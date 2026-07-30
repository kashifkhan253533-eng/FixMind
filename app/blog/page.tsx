// app/blog/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Clock,
  User,
  Eye,
  ChevronRight,
  Calendar,
  BookOpen,
  Sparkles,
  TrendingUp,
  Star,
  ArrowRight,
  Filter
} from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

// ============================================================
// Helper Functions
// ============================================================

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "Smartphone Repair": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "Battery & Charging": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    "Water Damage": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "Unlocking": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "iPhone Repair": "bg-pink-500/10 text-pink-400 border-pink-500/20",
    "Laptop Repair": "bg-orange-500/10 text-orange-400 border-orange-500/20",
    "Software": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    "Hardware Repair": "bg-red-500/10 text-red-400 border-red-500/20",
    "Safety": "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "Tools & Techniques": "bg-teal-500/10 text-teal-400 border-teal-500/20",
    "Electronics": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    "Gaming": "bg-rose-500/10 text-rose-400 border-rose-500/20",
    "Wearables": "bg-violet-500/10 text-violet-400 border-violet-500/20",
    "Accessories": "bg-sky-500/10 text-sky-400 border-sky-500/20",
    "Smart Home": "bg-lime-500/10 text-lime-400 border-lime-500/20",
  };
  return colors[category] || "bg-slate-500/10 text-slate-400 border-slate-500/20";
};

// ============================================================
// Blog Card Component
// ============================================================

const BlogCard = ({ post }: { post: any }) => (
  <div className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition-all hover:shadow-2xl hover:shadow-emerald-500/5 hover:-translate-y-1 duration-300">
    {/* Image */}
    <div className="relative aspect-video bg-slate-800 overflow-hidden">
      <Image
        src={post.image}
        alt={post.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        unoptimized
      />
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
      <div className="absolute top-3 left-3">
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-medium border ${getCategoryColor(post.category)}`}>
          {post.category}
        </span>
      </div>
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/80">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {post.readTime}
        </span>
        <span className="flex items-center gap-1">
          <Eye className="w-3 h-3" />
          {post.views.toLocaleString()}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="font-semibold text-lg text-white line-clamp-2 group-hover:text-emerald-400 transition-colors">
        {post.title}
      </h3>
      <p className="text-slate-400 text-sm mt-2 line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700/50">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <User className="w-3 h-3" />
          <span>{post.author}</span>
          <span className="w-1 h-1 bg-slate-600 rounded-full" />
          <Calendar className="w-3 h-3" />
          <span>{post.date}</span>
        </div>
        {/* ✅ درست لنک – slug استعمال کریں */}
        <Link
          href={`/blog/${post.slug}`}
          className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm flex items-center gap-1"
        >
          Read More <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </div>
);

// ============================================================
// Main Component
// ============================================================

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Extract all categories
  const categories = ["All", ...new Set(blogPosts.map(post => post.category))];

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* ہیرو سیکشن */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-150 h-100 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">Repair Blog</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Repair <span className="text-emerald-400">Knowledge</span>
            <br />
            <span className="text-slate-300 text-2xl md:text-3xl">Learn, Fix, and Save</span>
          </h1>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Expert repair guides, tips, and tutorials for all your devices.
            <span className="block text-slate-400 text-sm mt-1">
              {blogPosts.length} articles • {categories.length - 1} categories • 1000+ words each
            </span>
          </p>

          {/* Search Bar */}
          <div className="mt-8 w-full max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search articles by title, category, or tag..."
                className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span><strong className="text-white">{blogPosts.length}</strong> Articles</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span><strong className="text-white">250+</strong> Hours of Reading</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span><strong className="text-white">100K+</strong> Total Views</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Category Filters */}
      {/* ============================================================ */}
      <section className="px-4 pb-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-slate-400">Filter by category:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  selectedCategory === category
                    ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                    : "bg-slate-800/30 text-slate-400 border-slate-700 hover:text-white hover:border-slate-600"
                }`}
              >
                {category === "All" ? "📚 All" : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* Blog Posts Grid */}
      {/* ============================================================ */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-slate-400">
              Showing <span className="text-white font-semibold">{filteredPosts.length}</span> articles
              {selectedCategory !== "All" && ` in "${selectedCategory}"`}
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-12 text-center">
              <Search className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">No articles found</h3>
              <p className="text-slate-400 text-sm mt-2">
                Try adjusting your search or filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-10 pt-6 border-t border-slate-800/50">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-slate-800/50 hover:bg-slate-700 rounded-xl border border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
              >
                Previous
              </button>
              <span className="px-4 py-2 text-sm text-slate-400">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-slate-800/50 hover:bg-slate-700 rounded-xl border border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* CTA Section */}
      {/* ============================================================ */}
      <section className="px-4 py-16 border-t border-slate-800/50 bg-slate-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-emerald-500/10 p-3 rounded-full border border-emerald-500/20">
              <Star className="w-8 h-8 text-emerald-400" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">
            Want to Contribute?
          </h3>
          <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
            Share your repair knowledge with the FixMend community.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25"
          >
            Write for FixMend
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}