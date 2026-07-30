// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/dashboard/",
        "/login/",
        "/signup/",
        "/verify-email/",
        "/reset-password/",
        "/forgot-password/",
      ],
    },
    sitemap: "https://fixmend.com/sitemap.xml",
  };
}