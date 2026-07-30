// app/api/youtube/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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

interface YouTubeVideoDetailsItem {
  id: string;
  contentDetails: { duration: string };
  statistics: { viewCount: string };
}

interface YouTubeVideoDetailsResponse {
  items: YouTubeVideoDetailsItem[];
}

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  channelName: string;
  channelId: string;
  publishedAt: string;
  viewCount: string;
  duration: string;
  url: string;
}

// ============================================================
// Supabase Client
// ============================================================

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || "";

// 🔥 QUOTA SETTINGS
const MAX_QUOTA_TO_USE = 15000;
const QUOTA_PER_SEARCH = 100;
const MAX_RESULTS_PER_PAGE = 50;
const MAX_PAGES_PER_QUERY = 3;

// ============================================================
// YouTube API Call
// ============================================================

async function fetchYouTubeVideos(
  deviceName: string,
  issue: string,
  maxResults: number
): Promise<YouTubeVideo[]> {
  let searchQuery = `${deviceName} repair`;
  if (issue) searchQuery += ` ${issue}`;
  searchQuery += " tutorial";

  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("q", searchQuery);
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

  const videoIds = data.items?.map((item) => item.id.videoId).filter(Boolean) || [];
  let videoDetails: YouTubeVideoDetailsItem[] = [];
  if (videoIds.length > 0) {
    const detailsUrl = new URL("https://www.googleapis.com/youtube/v3/videos");
    detailsUrl.searchParams.set("part", "contentDetails,statistics");
    detailsUrl.searchParams.set("id", videoIds.join(","));
    detailsUrl.searchParams.set("key", YOUTUBE_API_KEY);

    const detailsResponse = await fetch(detailsUrl.toString());
    const detailsData = (await detailsResponse.json()) as YouTubeVideoDetailsResponse;
    videoDetails = detailsData.items || [];
  }

  return (data.items || []).map((item: YouTubeSearchItem) => {
    const detail = videoDetails.find((d) => d.id === item.id.videoId);
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url || "",
      channelName: item.snippet.channelTitle,
      channelId: item.snippet.channelId,
      publishedAt: item.snippet.publishedAt,
      viewCount: formatViewCount(detail?.statistics?.viewCount || "0"),
      duration: formatDuration(detail?.contentDetails?.duration || "N/A"),
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    };
  });
}

// ============================================================
// Helper Functions
// ============================================================

function formatViewCount(count: string): string {
  const num = parseInt(count, 10);
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toString();
}

function formatDuration(duration: string): string {
  try {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return "N/A";
    const hours = parseInt(match[1] || "0", 10);
    const minutes = parseInt(match[2] || "0", 10);
    const seconds = parseInt(match[3] || "0", 10);
    if (hours > 0) {
      return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  } catch {
    return "N/A";
  }
}

// ============================================================
// Mock Data
// ============================================================

function getMockVideos(deviceName: string, issue: string): YouTubeVideo[] {
  return [
    {
      id: `mock_${Date.now()}_1`,
      title: `How to Fix ${deviceName} - Complete Guide`,
      thumbnail: "https://img.youtube.com/vi/mock1/hqdefault.jpg",
      channelName: "Repair Academy",
      channelId: "UCmock1",
      publishedAt: new Date().toISOString(),
      viewCount: "245K",
      duration: "12:34",
      url: "https://www.youtube.com/watch?v=mock1",
    },
    {
      id: `mock_${Date.now()}_2`,
      title: `${deviceName} ${issue || "Repair"} - Step by Step`,
      thumbnail: "https://img.youtube.com/vi/mock2/hqdefault.jpg",
      channelName: "Tech Repair Pro",
      channelId: "UCmock2",
      publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      viewCount: "89K",
      duration: "8:22",
      url: "https://www.youtube.com/watch?v=mock2",
    },
    {
      id: `mock_${Date.now()}_3`,
      title: `DIY ${deviceName} Fix - Save Money!`,
      thumbnail: "https://img.youtube.com/vi/mock3/hqdefault.jpg",
      channelName: "Fix It Yourself",
      channelId: "UCmock3",
      publishedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      viewCount: "512K",
      duration: "15:07",
      url: "https://www.youtube.com/watch?v=mock3",
    },
  ];
}

// ============================================================
// GET Handler (با ڈیفالٹ ویڈیوز)
// ============================================================

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    let deviceName = searchParams.get("device") || "";
    const issue = searchParams.get("issue") || "";
    const forceRefresh = searchParams.get("refresh") === "true";
    const maxResults = parseInt(searchParams.get("maxResults") || "6", 10);

    // ✅ اگر device نہیں دیا گیا تو ڈیفالٹ سرچ استعمال کریں
    if (!deviceName) {
      deviceName = "electronics repair";
    }

    if (!YOUTUBE_API_KEY) {
      return NextResponse.json({
        success: true,
        data: getMockVideos(deviceName, issue),
        total: 3,
        message: "Using mock data (YouTube API key not configured)",
      });
    }

    // Supabase سے چیک کریں
    const searchQuery = `${deviceName} ${issue}`.trim();
    const { data: existingVideos, error: fetchError } = await supabase
      .from("youtube_videos")
      .select("*")
      .eq("search_query", searchQuery)
      .limit(maxResults);

    if (fetchError) {
      console.error("Supabase fetch error:", fetchError);
    }

    if (existingVideos && existingVideos.length > 0 && !forceRefresh) {
      const videos = existingVideos.map((v: any) => ({
        id: v.video_id,
        title: v.title,
        thumbnail: v.thumbnail,
        channelName: v.channel_title,
        channelId: v.channel_id,
        publishedAt: v.published_at,
        viewCount: "N/A",
        duration: "N/A",
        url: `https://www.youtube.com/watch?v=${v.video_id}`,
      }));

      return NextResponse.json({
        success: true,
        data: videos,
        total: videos.length,
        fromCache: true,
        message: "Data from Supabase",
      });
    }

    // YouTube سے لائیں اور Save کریں
    const videos = await fetchYouTubeVideos(deviceName, issue, maxResults);

    const videosToInsert = videos.map((v) => ({
      video_id: v.id,
      title: v.title,
      thumbnail: v.thumbnail,
      channel_id: v.channelId,
      channel_title: v.channelName,
      published_at: v.publishedAt,
      search_query: searchQuery,
    }));

    const { error: insertError } = await supabase
      .from("youtube_videos")
      .upsert(videosToInsert, { onConflict: "video_id" });

    if (insertError) {
      console.error("Supabase insert error:", insertError);
    }

    return NextResponse.json({
      success: true,
      data: videos,
      total: videos.length,
      fromCache: false,
      message: "Fresh data from YouTube (saved to Supabase)",
    });
  } catch (error) {
    console.error("YouTube API Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch YouTube videos",
        data: getMockVideos("electronics repair", ""),
      },
      { status: 500 }
    );
  }
}

// ============================================================
// POST Handler (Bulk Fetch)
// ============================================================

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const queries: string[] = body.queries || [
      "Smartphone repair",
      "Laptop repair",
      "iPhone repair",
      "Samsung repair",
      "Electronics DIY",
      "Screen replacement",
      "Battery replacement",
      "Charging port repair",
      "Water damage repair",
      "MacBook repair",
      "Dell laptop repair",
      "PS5 repair",
      "Xbox repair",
      "AirPods repair",
      "Smartwatch repair",
      "Circuit board repair",
      "Soldering tutorial",
      "Phone disassembly",
      "Tablet repair",
      "Monitor repair",
      "Headphone repair",
      "Speaker repair",
      "Printer repair",
      "Camera repair",
      "Drone repair",
    ];

    let totalQuotaUsed = 0;
    let totalInserted = 0;
    let queriesProcessed = 0;
    const results: Array<{ query: string; inserted?: number; status: string; quotaUsed?: number; error?: string }> = [];

    for (const query of queries) {
      if (totalQuotaUsed >= MAX_QUOTA_TO_USE) {
        results.push({ query: "QUOTA_LIMIT_REACHED", status: "stopped", quotaUsed: totalQuotaUsed });
        break;
      }

      let queryInserted = 0;

      for (let page = 0; page < MAX_PAGES_PER_QUERY; page++) {
        if (totalQuotaUsed >= MAX_QUOTA_TO_USE) break;

        try {
          const videos = await fetchYouTubeVideos(query, "", MAX_RESULTS_PER_PAGE);
          totalQuotaUsed += QUOTA_PER_SEARCH;

          if (videos.length === 0) break;

          const videosToInsert = videos.map((v) => ({
            video_id: v.id,
            title: v.title,
            thumbnail: v.thumbnail,
            channel_id: v.channelId,
            channel_title: v.channelName,
            published_at: v.publishedAt,
            search_query: query,
          }));

          const { error } = await supabase
            .from("youtube_videos")
            .upsert(videosToInsert, { onConflict: "video_id" });

          if (error) throw error;

          queryInserted += videos.length;
          totalInserted += videos.length;
          await new Promise((resolve) => setTimeout(resolve, 300));
        } catch (error: unknown) {
          const message = error instanceof Error ? error.message : "Unknown error";
          results.push({ query, inserted: queryInserted, status: "partial", error: message });
          break;
        }
      }

      if (queryInserted > 0) {
        results.push({ query, inserted: queryInserted, status: "completed", quotaUsed: totalQuotaUsed });
        queriesProcessed++;
      }
    }

    const quotaRemaining = 30000 - totalQuotaUsed;

    return NextResponse.json({
      success: true,
      message: `Bulk fetch completed. Used ${totalQuotaUsed}/${MAX_QUOTA_TO_USE} quota.`,
      summary: {
        totalQuotaUsed,
        quotaRemaining,
        totalInserted,
        queriesProcessed,
        quotaLimit: MAX_QUOTA_TO_USE,
        totalQuotaAvailable: 30000,
        percentageUsed: Math.round((totalQuotaUsed / 30000) * 100),
        percentageRemaining: Math.round((quotaRemaining / 30000) * 100),
      },
      results,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { success: false, message: message || "Bulk fetch failed" },
      { status: 500 }
    );
  }
}