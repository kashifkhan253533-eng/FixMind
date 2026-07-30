// components/ui/Breadcrumbs.tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  if (pathSegments.length === 0) return null;

  const formatLabel = (segment: string): string => {
    return segment
      .replace(/-/g, " ")
      .replace(/_/g, " ")
      .replace(/\[|\]/g, "")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav className="flex items-center gap-1 text-sm text-slate-400 py-3 px-4 bg-slate-800/30 rounded-xl border border-slate-700/50 mb-4 overflow-x-auto" aria-label="Breadcrumbs">
      <Link
        href="/"
        className="hover:text-emerald-400 transition-colors flex items-center gap-1 shrink-0"
        aria-label="Home"
      >
        <Home className="w-4 h-4" />
      </Link>

      {pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1;
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        const label = formatLabel(segment);

        return (
          <div key={segment + index} className="flex items-center gap-1 shrink-0">
            <ChevronRight className="w-3 h-3 text-slate-600" />
            {isLast ? (
              <span className="text-white font-medium truncate max-w-37.5 sm:max-w-62.5">
                {label}
              </span>
            ) : (
              <Link href={href} className="hover:text-emerald-400 transition-colors truncate max-w-25 sm:max-w-37.5">
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}