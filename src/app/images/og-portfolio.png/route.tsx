import { ImageResponse } from "next/og";

export function GET() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#f8fafc", color: "#0b1220", padding: "72px 82px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", width: 420, height: 420, borderRadius: 210, right: -120, top: -150, border: "72px solid #dbeafe" }} />
      <div style={{ position: "absolute", width: 260, height: 260, borderRadius: 130, right: 80, bottom: -170, background: "#2563eb" }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div style={{ fontFamily: "Georgia, serif", fontSize: 48, letterSpacing: -4 }}>JB</div>
          <div style={{ fontSize: 26, fontWeight: 700 }}>Jonathan Betancourt</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ display: "flex", color: "#2563eb", fontSize: 21, fontWeight: 700, letterSpacing: 1.6, textTransform: "uppercase", marginBottom: 22 }}>QA Automation Engineer</div>
          <div style={{ display: "flex", fontSize: 54, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2.5 }}>Software Automation · QA · RPA · AI Engineer · Backend</div>
          <div style={{ display: "flex", color: "#475569", fontSize: 22, lineHeight: 1.45, marginTop: 24 }}>Playwright · API Testing · CI/CD · Python · TypeScript · Node.js</div>
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 },
  );
}
