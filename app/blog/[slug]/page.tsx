// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, User, Eye, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

// ============================================================
// Generate static paths for all posts
// ============================================================
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// ============================================================
// Helper: Get category color
// ============================================================
function getCategoryColor(category: string) {
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
}

// ============================================================
// Render content with markdown-like formatting
// ============================================================
function renderContent(content: string) {
  const html = content
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-8 mb-4 text-white">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-6 mb-3 text-white">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-4 mb-2 text-white">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
    .replace(/\n/g, '<br />')
    .replace(/^\* (.*$)/gim, '<li class="ml-4 list-disc text-slate-300">$1</li>')
    .replace(/^\- (.*$)/gim, '<li class="ml-4 list-disc text-slate-300">$1</li>')
    .replace(/\| (.*) \| (.*) \| (.*) \|/g, (match, p1, p2, p3) => {
      return `<div class="grid grid-cols-3 gap-2 bg-slate-800/30 p-2 rounded-lg my-2 text-sm"><span class="font-semibold">${p1.trim()}</span><span>${p2.trim()}</span><span>${p3.trim()}</span></div>`;
    });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

// ============================================================
// 🆕 Page Component – params کو await کریں
// ============================================================
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ params کو await کریں
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* ============================================================ */}
      {/* ہیرو سیکشن */}
      {/* ============================================================ */}
      <section className="relative pt-24 pb-8 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-150 h-100 bg-pink-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {/* Featured Image */}
          <div className="relative aspect-video bg-slate-800 rounded-2xl overflow-hidden mb-6">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 to-transparent" />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-6">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {post.views.toLocaleString()}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(
                post.category
              )}`}
            >
              {post.category}
            </span>
          </div>

          {/* Excerpt */}
          <p className="text-slate-300 text-lg italic border-l-4 border-emerald-500 pl-4 mb-8">
            {post.excerpt}
          </p>

          {/* Content */}
          <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
            {renderContent(post.content)}
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-slate-800/50">
            <h4 className="text-sm font-semibold text-slate-400 mb-2">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-slate-700/30 rounded-full text-xs text-slate-400 border border-slate-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/50 pt-6">
            <Link
              href="/blog"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> All Articles
            </Link>
            <Link
              href="/"
              className="text-slate-400 hover:text-white transition-colors text-sm"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}