// app/og-image/route.tsx
import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "FixMend - Repair Your World";
  const description = searchParams.get("description") || "Free repair guides, cheap spare parts, and AI-powered diagnostics.";

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1a1a2e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              background: "#10b981",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
            }}
          >
            🔧
          </div>
          <div style={{ fontSize: "50px", fontWeight: "bold", color: "#ffffff" }}>
            Fix<span style={{ color: "#10b981" }}>Mend</span>
          </div>
        </div>
        <div
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#ffffff",
            textAlign: "center",
            maxWidth: "80%",
            lineHeight: "1.2",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            textAlign: "center",
            marginTop: "20px",
            maxWidth: "70%",
          }}
        >
          {description}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "60px",
            right: "60px",
            display: "flex",
            justifyContent: "space-between",
            color: "#475569",
            fontSize: "18px",
            borderTop: "1px solid #1e293b",
            paddingTop: "20px",
          }}
        >
          <span>🌍 120+ Countries</span>
          <span>📱 50K+ Users</span>
          <span>🔧 200+ Guides</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}