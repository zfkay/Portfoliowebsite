import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const links = [
  { id: "home", label: "Home" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const onGradientPage = currentPage === "home" || currentPage === "contact";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled || !onGradientPage
          ? "rgba(255,255,255,0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled || !onGradientPage ? "1px solid #e4e4e7" : "none",
        transition: "background 0.25s, border-color 0.25s",
      }}
    >
      <div
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 28px" }}
        className="flex items-center justify-between h-16"
      >
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            background: onGradientPage && !scrolled
              ? "transparent"
              : "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        ><span
            style={{
              background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 52%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >Zhafira Kayla Nafisa</span></button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = currentPage === link.id;
            const lightText = onGradientPage && !scrolled;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: active ? 600 : 400,
                  color: lightText
                    ? active ? "#fff" : "rgba(255,255,255,0.75)"
                    : active ? "#18181b" : "#71717a",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px 0",
                  position: "relative",
                  transition: "color 0.15s",
                }}
              >
                {link.label}
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "linear-gradient(135deg, #ec4899, #3b82f6)",
                      borderRadius: "1px",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            color: onGradientPage && !scrolled ? "#fff" : "#71717a",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            background: "#fff",
            borderTop: "1px solid #e4e4e7",
            padding: "8px 0",
          }}
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => { onNavigate(link.id); setOpen(false); }}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "12px 28px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9rem",
                fontWeight: currentPage === link.id ? 600 : 400,
                color: currentPage === link.id ? "#18181b" : "#71717a",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
