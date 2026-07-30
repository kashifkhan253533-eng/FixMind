// app/videos/page.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { Search, Filter, ChevronLeft, ChevronRight, Wrench } from "lucide-react";
import Link from "next/link";

// ============================================================
// Custom YouTube Icon
// ============================================================
const YoutubeLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// ============================================================
// Types
// ============================================================
interface Video {
  id: number;
  video_id: string;
  title: string;
  thumbnail: string;
  channel_title: string;
  search_query: string;
  view_count?: string;
  duration?: string;
}

// ============================================================
// Video Card Component
// ============================================================
const VideoCard = ({ video }: { video: Video }) => {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${video.video_id}?autoplay=0&rel=0&modestbranding=1`;

  return (
    <div className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:border-emerald-500/30 transition-all hover:scale-[1.02] duration-200">
      <div className="relative aspect-video bg-slate-900">
        <iframe
          src={embedUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
        {/* Watermark */}
        <div className="absolute bottom-2 right-2 z-10 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1.5 pointer-events-none select-none border border-white/10">
          <Wrench className="w-3 h-3 text-emerald-400" />
          <span className="text-white font-bold text-xs tracking-tight">
            Fix<span className="text-emerald-400">Mend</span>
          </span>
        </div>
      </div>

      <div className="p-3">
        <h3 className="font-medium text-sm text-white line-clamp-2 hover:text-emerald-400 transition-colors">
          {video.title}
        </h3>
        <div className="flex items-center justify-between mt-1.5 text-xs text-slate-400">
          <span>{video.channel_title}</span>
          <span className="bg-slate-700/30 px-2 py-0.5 rounded-full text-[10px] truncate max-w-25">
            {video.search_query}
          </span>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// Main Page
// ============================================================
export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalVideos, setTotalVideos] = useState(0);

  // ✅ fetchVideos کو useCallback میں لپیٹیں تاکہ useEffect میں مستحکم رہے
  const fetchVideos = useCallback(async () => {
    setLoading(true);
    try {
      const url = new URL("/api/videos", window.location.origin);
      url.searchParams.set("page", String(page));
      url.searchParams.set("limit", "20");
      if (search) url.searchParams.set("search", search);
      if (category) url.searchParams.set("category", category);

      const res = await fetch(url.toString());
      const data = await res.json();

      if (data.success) {
        setVideos(data.data);
        setTotalPages(data.totalPages);
        setTotalVideos(data.total);
        if (data.categories) setCategories(data.categories);
      }
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    } finally {
      setLoading(false);
    }
  }, [page, search, category]);

  // ✅ useEffect میں fetchVideos کو کال کریں
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchVideos();
  }, [fetchVideos]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    // fetchVideos خود بخود page، search، category کی تبدیلی پر چلے گا
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* ہیڈر */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-8 px-4 overflow-hidden border-b border-slate-800/50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <YoutubeLogo className="w-8 h-8 text-red-500" />
                <h1 className="text-3xl font-bold">Video Library</h1>
              </div>
              <p className="text-slate-400 text-sm mt-1">
                Browse {totalVideos.toLocaleString()} repair videos from our community
              </p>
            </div>
            <Link
              href="/"
              className="text-sm text-slate-400 hover:text-white hover:bg-slate-800 px-4 py-2 rounded-xl border border-slate-700 transition-all"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* فلٹرز اور سرچ */}
      {/* ============================================================ */}
      <section className="px-4 py-6 border-b border-slate-800/30 bg-slate-900/20">
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search videos by title, channel, or device..."
                className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl py-3 px-4 pl-11 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setPage(1);
                }}
                className="w-full md:w-48 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl py-3 px-4 pl-11 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all appearance-none"
              >
                <option value="">All Categories</option>
                {categories.slice(0, 30).map((cat) => (
                  <option key={cat} value={cat} className="bg-slate-800">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ویڈیوز گرڈ */}
      {/* ============================================================ */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
              <span className="ml-4 text-slate-400">Loading videos...</span>
            </div>
          ) : videos.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold text-white">No videos found</h3>
              <p className="text-slate-400 mt-2">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {videos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>

              {/* ============================================================ */}
              {/* Pagination */}
              {/* ============================================================ */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between gap-4 mt-10 pt-6 border-t border-slate-800/50">
                  <p className="text-sm text-slate-400">
                    Showing {(page - 1) * 20 + 1} - {Math.min(page * 20, totalVideos)} of {totalVideos.toLocaleString()} videos
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="p-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg border border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="px-4 py-1 bg-slate-800/50 rounded-lg text-sm border border-slate-700">
                      {page} / {totalPages}
                    </span>
                    <button
                      onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className="p-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg border border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}