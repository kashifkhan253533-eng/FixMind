// app/page.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { 
  Search, 
  Wrench, 
  Bot, 
  ArrowRight, 
  Eye, 
  Sparkles,
  Users,
  ChevronRight,
  Shield,
  Globe,
  CheckCircle,
  PlayCircle,
  BookOpen,
  Headphones,
  Smartphone,
  Laptop,
  Tablet,
  Gamepad2,
  Watch,
  Award,
  Heart
} from "lucide-react";
import { devicesData } from "@/lib/devices";
import ChatBot from "@/components/ui/ChatBot";

// ============================================================
// Custom YouTube Icon
// ============================================================
const YoutubeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// ============================================================
// Types
// ============================================================
interface Device {
  id: number;
  name: string;
  brand: string;
  category: string;
  image: string;
}

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

interface YouTubeVideoItem {
  id: string;
  title: string;
  thumbnail: string;
  channelName: string;
  viewCount?: string;
  duration?: string;
}

// ============================================================
// JSON-LD Schema Component (SEO)
// ============================================================
const JsonLd = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FixMend",
    "description": "World's largest free repair library with 200+ guides, 5,000+ videos, and AI diagnostics.",
    "url": "https://fixmend.netlify.app/",
    "logo": "https://fixmend.netlify.app/logo.png",
    "sameAs": [
      "https://youtube.com/@fixmend",
      "https://twitter.com/fixmend",
      "https://facebook.com/fixmend"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@fixmend.com"
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// ============================================================
// Video Card Component
// ============================================================
const VideoCard = ({ video }: { video: Video }) => {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${video.video_id}?autoplay=0&rel=0&modestbranding=1`;

  return (
    <div className="group bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-emerald-500/40 transition-all hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 duration-300">
      <div className="relative aspect-video bg-slate-900">
        <iframe
          src={embedUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
        <div className="absolute bottom-2 right-2 z-10 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1.5 pointer-events-none select-none border border-white/10">
          <Wrench className="w-3 h-3 text-emerald-400" />
          <span className="text-white font-bold text-[10px] tracking-tight">
            Fix<span className="text-emerald-400">Mend</span>
          </span>
        </div>
        {video.duration && (
          <div className="absolute top-2 right-2 bg-black/70 px-2 py-0.5 rounded text-[10px] text-white/80 font-mono">
            {video.duration}
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <PlayCircle className="w-12 h-12 text-white/90 drop-shadow-2xl" />
        </div>
      </div>
      <div className="p-3.5">
        <h3 className="font-medium text-sm text-white line-clamp-2 group-hover:text-emerald-400 transition-colors">
          {video.title}
        </h3>
        <div className="flex items-center justify-between mt-2 text-xs text-slate-400">
          <span className="truncate max-w-32.5">{video.channel_title}</span>
          {video.view_count && (
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              {video.view_count}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// Main Home Component
// ============================================================
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Device[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoadingVideos, setIsLoadingVideos] = useState(false);

  // ✅ Fetch recent videos
  const fetchRecentVideos = useCallback(async () => {
    setIsLoadingVideos(true);
    try {
      const res = await fetch(`/api/videos?limit=8&page=1`);
      const data = await res.json();
      if (data.success && data.data) {
        setVideos(data.data);
      } else {
        setVideos([]);
      }
    } catch (error) {
      console.error("Failed to fetch recent videos:", error);
      setVideos([]);
    } finally {
      setIsLoadingVideos(false);
    }
  }, []);

  // ✅ Load videos on mount
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchRecentVideos();
  }, [fetchRecentVideos]);

  // ✅ Search handler for devices
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }
    const results = devicesData.filter((device) =>
      device.name.toLowerCase().includes(query.toLowerCase()) ||
      device.brand.toLowerCase().includes(query.toLowerCase()) ||
      device.category.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    setShowResults(true);
  };

  // ✅ Category search for videos
  const handleCategorySearch = async (category: string) => {
    setIsLoadingVideos(true);
    try {
      const response = await fetch(`/api/youtube?device=${encodeURIComponent(category)}&maxResults=8`);
      const data = await response.json();
      if (data.success && data.data) {
        const formatted = data.data.map((v: YouTubeVideoItem) => ({
          id: v.id,
          video_id: v.id,
          title: v.title,
          thumbnail: v.thumbnail,
          channel_title: v.channelName,
          search_query: category,
          view_count: v.viewCount,
          duration: v.duration,
        }));
        setVideos(formatted);
      } else {
        setVideos([]);
      }
    } catch (error) {
      console.error("Failed to fetch category videos:", error);
      setVideos([]);
    } finally {
      setIsLoadingVideos(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowResults(false);
  };

  // Features data
  const features = [
    {
      icon: <Wrench className="w-6 h-6 text-emerald-400" />,
      title: "200+ Repair Guides",
      desc: "Step-by-step instructions for phones, laptops, tablets & more."
    },
    {
      icon: <YoutubeIcon className="w-6 h-6 text-red-500" />,
      title: "5,000+ Video Tutorials",
      desc: "Watch professional repairs from YouTube experts."
    },
    {
      icon: <Bot className="w-6 h-6 text-purple-400" />,
      title: "AI Diagnostics",
      desc: "Get instant troubleshooting help from our AI assistant."
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-400" />,
      title: "Community Driven",
      desc: "Join 50,000+ repair enthusiasts worldwide."
    },
  ];

  // Stats
  const stats = [
    { label: "Repair Guides", value: "200+", icon: <BookOpen className="w-4 h-4" /> },
    { label: "Video Tutorials", value: "5,000+", icon: <YoutubeIcon className="w-4 h-4 text-red-500" /> },
    { label: "Active Users", value: "50,000+", icon: <Users className="w-4 h-4" /> },
    { label: "Countries", value: "120+", icon: <Globe className="w-4 h-4" /> },
  ];

  // Categories for quick browse
  const browseCategories = [
    { name: "Smartphones", icon: <Smartphone className="w-5 h-5" />, color: "from-emerald-500/20 to-emerald-600/10" },
    { name: "Laptops", icon: <Laptop className="w-5 h-5" />, color: "from-blue-500/20 to-blue-600/10" },
    { name: "Tablets", icon: <Tablet className="w-5 h-5" />, color: "from-purple-500/20 to-purple-600/10" },
    { name: "Gaming", icon: <Gamepad2 className="w-5 h-5" />, color: "from-red-500/20 to-red-600/10" },
    { name: "Wearables", icon: <Watch className="w-5 h-5" />, color: "from-pink-500/20 to-pink-600/10" },
    { name: "Accessories", icon: <Headphones className="w-5 h-5" />, color: "from-yellow-500/20 to-yellow-600/10" },
  ];

  return (
    <>
      {/* ✅ JSON-LD Schema Added */}
      <JsonLd />
      
      <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
        
        {/* ============================================================ */}
        {/* 1. HERO SECTION */}
        {/* ============================================================ */}
        <section className="relative pt-20 pb-12 md:pt-28 md:pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-125 bg-emerald-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-150 h-100 bg-pink-500/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/3 left-1/4 w-100 h-100 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6 animate-pulse">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium text-emerald-400 tracking-wider uppercase">#1 Global Repair Platform</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5">
              Fix Your <span className="text-emerald-400">Devices</span>
              <br />
              <span className="bg-linear-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                Save the Planet
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              The world&apos;s largest free repair library. 
              <span className="text-emerald-400 font-medium"> 200+ guides</span>, 
              <span className="text-red-400 font-medium"> 5,000+ videos</span>, and 
              <span className="text-purple-400 font-medium"> AI-powered diagnostics</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link
                href="/devices"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 duration-300"
              >
                <Wrench className="w-5 h-5" />
                Start Repairing
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/videos"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-800/80 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700 hover:border-slate-600 hover:scale-105 duration-300 backdrop-blur-sm"
              >
                <PlayCircle className="w-5 h-5" />
                Watch Videos
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-10">
              {stats.map((stat, i) => (
                <div key={i} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-3 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mb-1">
                    {stat.icon}
                    <span>{stat.label}</span>
                  </div>
                  <p className="text-xl font-bold text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="mt-8 w-full max-w-xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search for a device... e.g. 'iPhone 13'"
                  className="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full py-3.5 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Search Results */}
              {showResults && (
                <div className="absolute left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden shadow-2xl z-50 max-h-80 overflow-y-auto">
                  {searchResults.length === 0 ? (
                    <div className="p-6 text-center text-slate-400">
                      <p className="text-sm">No devices found</p>
                      <p className="text-xs mt-1">Try a different keyword</p>
                    </div>
                  ) : (
                    searchResults.map((device) => (
                      <Link
                        key={device.id}
                        href={`/device/${device.id}`}
                        onClick={() => {
                          setShowResults(false);
                          setSearchQuery("");
                        }}
                        className="flex items-center gap-4 px-5 py-3 hover:bg-slate-700/50 transition-all border-b border-slate-700/50 last:border-0 group"
                      >
                        <span className="text-2xl">{device.image}</span>
                        <div className="flex-1 text-left">
                          <p className="font-medium text-white group-hover:text-emerald-400 transition-colors">
                            {device.name}
                          </p>
                          <p className="text-xs text-slate-400">{device.brand} • {device.category}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                      </Link>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. FEATURES SECTION */}
        {/* ============================================================ */}
        <section className="px-4 py-12 border-y border-slate-800/30 bg-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-slate-700/30 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-emerald-500/10 transition-all">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">{feature.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. BROWSE BY CATEGORY */}
        {/* ============================================================ */}
        <section className="px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">Browse by <span className="text-emerald-400">Category</span></h2>
                <p className="text-slate-400 text-sm">Find repair guides for your device type</p>
              </div>
              <Link href="/devices" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1">
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {browseCategories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => handleCategorySearch(cat.name)}
                  className={`bg-linear-to-br ${cat.color} backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 text-center hover:border-emerald-500/30 hover:scale-[1.02] transition-all group`}
                >
                  <div className="text-3xl mb-2 flex justify-center text-slate-300 group-hover:text-white transition-colors">
                    {cat.icon}
                  </div>
                  <p className="text-sm font-medium text-white">{cat.name}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. ⭐ 500-WORD SEO CONTENT SECTION (NAYA) */}
        {/* ============================================================ */}
        <section className="px-4 py-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Why <span className="text-emerald-400">FixMend</span> is the World's Best Free Repair Platform?
            </h2>
            
            <p className="text-slate-300 leading-relaxed">
              FixMend is the world's largest free repair platform, helping over 50,000 users 
              in 120+ countries fix their devices. Whether you need to repair a cracked 
              smartphone screen, replace a laptop battery, or troubleshoot a tablet issue, 
              our step-by-step guides and 5,000+ video tutorials make it easy. 
              Our AI-powered diagnostics tool provides instant troubleshooting help, 
              saving you time and money. Join our community of repair enthusiasts and 
              start fixing your devices today — it's completely free and helps reduce 
              electronic waste.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6">
              🔧 Comprehensive Repair Guides for Every Device
            </h3>
            <p className="text-slate-300 leading-relaxed">
              FixMend offers over 200 detailed repair guides covering a wide range of devices, 
              including smartphones, laptops, tablets, gaming consoles, wearables, and accessories. 
              Each guide is written by experts and includes step-by-step instructions with clear 
              images and safety tips. Whether you are a beginner or a professional repair technician, 
              you will find our guides easy to follow and highly reliable. We update our content 
              regularly to ensure you have access to the latest repair techniques and industry best practices.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6">
              📺 5,000+ Video Tutorials for Visual Learners
            </h3>
            <p className="text-slate-300 leading-relaxed">
              For those who prefer visual learning, FixMend provides access to over 5,000 video 
              tutorials from YouTube experts. These videos cover everything from basic repairs to 
              advanced troubleshooting, allowing you to watch and learn at your own pace. Each video 
              is curated and verified to ensure accuracy and quality. With new videos added regularly, 
              you will always find the latest repair tutorials for your specific device model.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6">
              🤖 AI-Powered Diagnostics for Instant Help
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Our AI-powered diagnostics tool is designed to help you troubleshoot issues quickly 
              and accurately. Simply describe your problem, and our AI assistant will provide instant 
              troubleshooting steps and potential fixes. This feature saves you hours of research 
              and helps you identify the root cause of the issue before you start repairing. It is 
              like having a professional technician by your side, 24/7, completely free of charge.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6">
              🌍 Join a Global Community of Repair Enthusiasts
            </h3>
            <p className="text-slate-300 leading-relaxed">
              FixMend is more than just a repair library — it is a community of over 50,000 
              repair enthusiasts from 120+ countries. Our community members share repair tips, 
              success stories, and help each other troubleshoot complex issues. By joining FixMend, 
              you become part of a global movement that promotes sustainability and reduces 
              electronic waste. Together, we are making the world a greener place, one repaired 
              device at a time.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6">
              💰 100% Free and Accessible to Everyone
            </h3>
            <p className="text-slate-300 leading-relaxed">
              FixMend is completely free to use. We believe that everyone should have access to 
              quality repair information, regardless of their budget. There are no hidden fees, 
              no subscription plans, and no paywalls. Our mission is to empower people to fix their 
              own devices, save money, and reduce their environmental footprint. Whether you are a 
              student, a professional, or someone who simply wants to learn a new skill, FixMend 
              is here to support you every step of the way.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6">
              🚀 Start Fixing Your Devices Today
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Ready to fix your devices and save the planet? Explore our extensive library of repair 
              guides, watch video tutorials, or use our AI diagnostics tool to get started. With 
              FixMend, you have everything you need to become a confident repairer. Join 50,000+ 
              users worldwide and start your repair journey today — it is fast, easy, and completely 
              free. Don't wait — your device is waiting to be fixed!
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. RECENT VIDEOS */}
        {/* ============================================================ */}
        <section className="px-4 py-12 bg-slate-900/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <YoutubeIcon className="w-6 h-6 text-red-500" />
                  <h2 className="text-2xl font-bold">Recent <span className="text-red-400">Videos</span></h2>
                </div>
                <p className="text-slate-400 text-sm">Latest repair tutorials from our community</p>
              </div>
              <Link href="/videos" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1">
                View All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {isLoadingVideos ? (
              <div className="flex items-center justify-center py-16">
                <div className="w-10 h-10 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
                <span className="ml-3 text-slate-400 text-sm">Loading videos...</span>
              </div>
            ) : videos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {videos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-slate-800/20 border border-slate-700/50 rounded-2xl">
                <YoutubeIcon className="w-16 h-16 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-400">No videos available yet.</p>
                <p className="text-slate-500 text-sm mt-1">Search for a device to see repair tutorials.</p>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. TRUST BADGES */}
        {/* ============================================================ */}
        <section className="px-4 py-12 border-y border-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center gap-2 text-slate-400">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">100% Free</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">Verified Guides</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Users className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">50K+ Community</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Award className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">Trusted Worldwide</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Globe className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">120+ Countries</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. CTA SECTION */}
        {/* ============================================================ */}
        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto bg-linear-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div className="flex justify-center mb-4">
                <div className="bg-emerald-500/10 p-3 rounded-full border border-emerald-500/20">
                  <Wrench className="w-8 h-8 text-emerald-400" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Fix Something Today?
              </h3>
              <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
                Join 50,000+ repairers saving money and the planet. Start now, it&apos;s completely free.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/devices"
                  className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2"
                >
                  <Search className="w-4 h-4" />
                  Find Your Device
                </Link>
                <Link
                  href="/videos"
                  className="px-8 py-3.5 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all border border-slate-600 flex items-center gap-2"
                >
                  <PlayCircle className="w-4 h-4" />
                  Watch Tutorials
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ChatBot Component */}
        {/* ============================================================ */}
        <ChatBot />
      </div>
    </>
  );
}
