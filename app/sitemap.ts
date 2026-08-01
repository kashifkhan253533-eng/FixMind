// app/sitemap.ts
import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";
import { devicesData } from "@/lib/devices";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fixmend.netlify.app";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0, changeFrequency: "daily" },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/devices`, lastModified: new Date(), priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/videos`, lastModified: new Date(), priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/unlock`, lastModified: new Date(), priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/download`, lastModified: new Date(), priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), priority: 0.3, changeFrequency: "yearly" },
    { url: `${baseUrl}/terms`, lastModified: new Date(), priority: 0.3, changeFrequency: "yearly" },
    { url: `${baseUrl}/cookies`, lastModified: new Date(), priority: 0.3, changeFrequency: "yearly" },
  ];

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.7,
    changeFrequency: "weekly",
  }));

  // Device pages
  const devicePages: MetadataRoute.Sitemap = devicesData.map((device) => ({
    url: `${baseUrl}/device/${device.id}`,
    lastModified: new Date(),
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [...staticPages, ...blogPages, ...devicePages];
}
