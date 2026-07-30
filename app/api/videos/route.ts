// app/api/videos/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const search = searchParams.get("search") || "";
    const category = searchParams.get("category") || "";

    const offset = (page - 1) * limit;

    let query = supabase
      .from("youtube_videos")
      .select("*", { count: "exact" });

    // 🔍 سرچ فلٹر (عنوان یا چینل کے نام میں)
    if (search) {
      query = query.or(
        `title.ilike.%${search}%,channel_title.ilike.%${search}%,search_query.ilike.%${search}%`
      );
    }

    // 📂 کیٹیگری فلٹر (یہ search_query کے مطابق ہے)
    if (category) {
      query = query.eq("search_query", category);
    }

    // 📄 Pagination اور ترتیب (نئی ویڈیوز پہلے)
    const { data, count, error } = await query
      .order("fetched_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) throw error;

    // 📊 منفرد کیٹیگریز کی لسٹ (فلٹر کے لیے)
    const { data: categoriesData } = await supabase
      .from("youtube_videos")
      .select("search_query")
      .order("search_query");

    const uniqueCategories = [...new Set(categoriesData?.map((item) => item.search_query) || [])];

    return NextResponse.json({
      success: true,
      data: data || [],
      total: count || 0,
      page,
      limit,
      totalPages: Math.ceil((count || 0) / limit),
      categories: uniqueCategories.slice(0, 50), // پہلی 50 کیٹیگریز
    });
  } catch (error: unknown) {
    // ✅ `error: any` کو `error: unknown` سے بدل دیا گیا
    const message = error instanceof Error ? error.message : "Failed to fetch videos";
    return NextResponse.json(
      { success: false, message },
      { status: 500 }
    );
  }
}