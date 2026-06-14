import { ArrowRight, Coffee, Terminal, FileCode2, Figma, GitBranch, Database } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import myPhoto from "../assets/photo.jpeg";

// ─── YOUR PHOTO ───────────────────────────────────────────────────────────────
// 1. Drop your image file into:  src/app/assets/   (e.g. photo.jpg)
// 2. Uncomment the import below and update the filename to match:
//    import myPhoto from "../assets/photo.jpg";
// 3. Replace PHOTO_SRC below with:  myPhoto
const PHOTO_SRC = myPhoto;

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const stackItems = [
  { icon: <Coffee size={18} strokeWidth={1.5} />, name: "Java" },
  { icon: <Terminal size={18} strokeWidth={1.5} />, name: "Python" },
  { icon: <FileCode2 size={18} strokeWidth={1.5} />, name: "C" },
  { icon: <Figma size={18} strokeWidth={1.5} />, name: "Figma" },
  { icon: <GitBranch size={18} strokeWidth={1.5} />, name: "Git & GitHub" },
  { icon: <Database size={18} strokeWidth={1.5} />, name: "PostgreSQL / MySQL" },
];

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      {/* ── HERO — full-screen gradient ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 52%, #3b82f6 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "100px 28px 80px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "64px",
              alignItems: "center",
            }}
            className="flex-col-on-mobile"
          >
            {/* Left text */}
            <div>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: "0.1em",
                  marginBottom: "20px",
                  textTransform: "uppercase",
                }}
              >System and Technology Infomation Student | Institut Teknologi Bandung</p>
              <h1
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)",
                  color: "#ffffff",
                  lineHeight: 1.1,
                  marginBottom: "24px",
                  letterSpacing: "-0.02em",
                }}
              >Hello, I'm Zhafira!<br />Just a student who loves to code and build things.</h1>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.75,
                  maxWidth: "480px",
                  marginBottom: "40px",
                }}
              >Currently a 4th-semester STI student at ITB. Right now, I'm exploring web development, messing around with databases, and learning how to build cool digital solutions from scratch.</p>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button
                  onClick={() => onNavigate("projects")}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "#18181b",
                    background: "#ffffff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px 24px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "opacity 0.15s, transform 0.15s",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 24px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)";
                  }}
                >
                  View Projects <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => onNavigate("contact")}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    color: "#ffffff",
                    background: "rgba(255,255,255,0.15)",
                    border: "1.5px solid rgba(255,255,255,0.5)",
                    borderRadius: "8px",
                    padding: "12px 24px",
                    cursor: "pointer",
                    backdropFilter: "blur(8px)",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.25)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)"; }}
                >
                  Get in touch
                </button>
              </div>
            </div>

            {/* Profile photo — replace YOUR_PHOTO_URL with your imported image variable */}
            <div
              style={{
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                border: "2.5px solid rgba(255,255,255,0.4)",
                flexShrink: 0,
                boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
                overflow: "hidden",
                background: "rgba(255,255,255,0.15)",
              }}
            >
              <ImageWithFallback
                src={PHOTO_SRC}
                alt="Zhafira Kayla Nafisa"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 82%",
                  transform: "scale(1.25)",
                  transformOrigin: "center 82%",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK — white section ── */}
      <section style={{ background: "#ffffff", padding: "88px 28px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "52px" }}>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                color: "#ec4899",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "10px",
              }}
            >
              what I work with
            </p>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: "2rem",
                color: "#18181b",
                letterSpacing: "-0.01em",
              }}
            >
              Tech Stack
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "16px",
            }}
          >
            {stackItems.map((item) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "18px 20px",
                  border: "1px solid #e4e4e7",
                  borderRadius: "10px",
                  background: "#fafafa",
                  transition: "border-color 0.15s, box-shadow 0.15s, transform 0.15s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "#ec4899";
                  el.style.boxShadow = "0 2px 12px rgba(236,72,153,0.12)";
                  el.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "#e4e4e7";
                  el.style.boxShadow = "none";
                  el.style.transform = "";
                }}
              >
                <span
                  style={{
                    color: "#8b5cf6",
                    flexShrink: 0,
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(139,92,246,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "#18181b",
                    fontWeight: 500,
                  }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Quick link to latest project */}
          <div
            style={{
              marginTop: "56px",
              padding: "32px 36px",
              background: "linear-gradient(135deg, #fdf2f8 0%, #f5f3ff 50%, #eff6ff 100%)",
              border: "1px solid #e4e4e7",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  color: "#71717a",
                  letterSpacing: "0.08em",
                  marginBottom: "6px",
                }}
              >
                LATEST PROJECT · 2025
              </p>
              <p
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  color: "#18181b",
                }}
              >
                NimonsCooked
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "#71717a",
                  marginTop: "4px",
                }}
              >
                Java · OOP
              </p>
            </div>
            <button
              onClick={() => onNavigate("projects")}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                color: "#ffffff",
                background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
                border: "none",
                borderRadius: "8px",
                padding: "11px 22px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                whiteSpace: "nowrap",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.88"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
            >
              See all projects <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
