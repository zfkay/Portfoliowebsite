import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { ResumePage } from "./components/ResumePage";
import { ProjectsPage } from "./components/ProjectsPage";
import { ContactPage } from "./components/ContactPage";

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [page]);

  return (
    <div style={{ background: "#ffffff" }}>
      <Navbar currentPage={page} onNavigate={setPage} />

      {page === "home" && <HomePage onNavigate={setPage} />}
      {page === "resume" && <ResumePage />}
      {page === "projects" && <ProjectsPage />}
      {page === "contact" && <ContactPage />}

      {/* Footer — white strip */}
      {page !== "contact" && (
        <footer style={{ background: "#ffffff", borderTop: "1px solid #e4e4e7", padding: "20px 28px" }}>
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                color: "#a1a1aa",
              }}
            >
              © 2026 Zhafira Kayla Nafisa
            </span>
            <div style={{ display: "flex", gap: "20px" }}>
              {["home", "resume", "projects", "contact"].map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    color: "#a1a1aa",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textTransform: "capitalize",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#18181b"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#a1a1aa"; }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
