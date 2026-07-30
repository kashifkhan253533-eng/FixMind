// app/api/ultimate-full-sync/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { getAllCategories } from "@/lib/youtube-categories";

// ============================================================
// Types for YouTube API
// ============================================================

interface YouTubeSearchItem {
  id: { videoId: string };
  snippet: {
    title: string;
    description?: string;
    channelTitle: string;
    channelId: string;
    publishedAt: string;
    thumbnails: {
      high?: { url: string };
      default?: { url: string };
    };
  };
}

interface YouTubeSearchResponse {
  items: YouTubeSearchItem[];
  nextPageToken?: string;
}

// ============================================================
// Supabase Client
// ============================================================

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || "";

// ============================================================
// YouTube API Call
// ============================================================

async function fetchYouTubeVideos(query: string, maxResults: number = 50) {
  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("q", query);
  url.searchParams.set("type", "video");
  url.searchParams.set("maxResults", String(maxResults));
  url.searchParams.set("order", "relevance");
  url.searchParams.set("videoDuration", "medium");
  url.searchParams.set("key", YOUTUBE_API_KEY);

  const response = await fetch(url.toString());
  const data = (await response.json()) as YouTubeSearchResponse;

  if (!response.ok) {
    throw new Error("YouTube API error");
  }

  return data.items || [];
}

// ============================================================
// GET Handler – Ultimate Full Sync
// ============================================================

export async function GET() {
  try {
    if (!YOUTUBE_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: "YouTube API key not configured. Please add YOUTUBE_API_KEY to .env.local",
        },
        { status: 400 }
      );
    }

    const categories = getAllCategories();
    console.log(`🚀 Starting Ultimate Full Sync for ${categories.length} categories...`);

    let totalInserted = 0;
    let totalQuotaUsed = 0;
    const results: Array<{
      query: string;
      status: string;
      count?: number;
      error?: string;
    }> = [];
    const MAX_RESULTS_PER_PAGE = 50;

    for (const query of categories) {
      try {
        console.log(`🔍 Fetching: "${query}"`);
        const items = await fetchYouTubeVideos(query, MAX_RESULTS_PER_PAGE);
        totalQuotaUsed += 100;

        if (items.length === 0) {
          results.push({ query, status: "no_videos" });
          continue;
        }

        // ✅ Properly typed: items is YouTubeSearchItem[]
        const videosToInsert = items.map((item: YouTubeSearchItem) => ({
          video_id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description?.substring(0, 300) || "",
          channel_id: item.snippet.channelId,
          channel_title: item.snippet.channelTitle,
          published_at: item.snippet.publishedAt,
          thumbnail: item.snippet.thumbnails?.high?.url || "",
          search_query: query,
          fetched_at: new Date().toISOString(),
        }));

        const { error } = await supabase
          .from("youtube_videos")
          .upsert(videosToInsert, { onConflict: "video_id" });

        if (error) {
          console.error(`❌ Supabase error for "${query}":`, error);
          results.push({ query, status: "error", error: error.message });
        } else {
          totalInserted += videosToInsert.length;
          results.push({ query, status: "success", count: videosToInsert.length });
          console.log(`✅ "${query}": ${videosToInsert.length} videos inserted`);
        }

        await new Promise((resolve) => setTimeout(resolve, 300));
      } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown error";
        console.error(`❌ Error fetching "${query}":`, message);
        results.push({ query, status: "failed", error: message });
      }
    }

    const totalQuotaRemaining = 30000 - totalQuotaUsed;

    return NextResponse.json({
      success: true,
      message: "✅ Ultimate Full Sync Complete!",
      summary: {
        totalCategories: categories.length,
        totalVideosInserted: totalInserted,
        totalQuotaUsed: totalQuotaUsed,
        totalQuotaRemaining: totalQuotaRemaining,
        percentageUsed: Math.round((totalQuotaUsed / 30000) * 100),
        percentageRemaining: Math.round((totalQuotaRemaining / 30000) * 100),
      },
      results,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("🔥 Ultimate Sync Error:", message);
    return NextResponse.json(
      { success: false, message: message || "Ultimate sync failed" },
      { status: 500 }
    );
  }
}