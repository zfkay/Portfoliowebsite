import { ExternalLink, Github, Users, Clock } from "lucide-react";
import nimonsImg from "../assets/nimons.jpeg";
import setorImg from "../assets/setorin.jpeg";

const GRAD = "linear-gradient(135deg, #ec4899 0%, #8b5cf6 52%, #3b82f6 100%)";

function Badge({ text }: { text: string }) {
  return (
    <span
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.68rem",
        padding: "3px 10px",
        borderRadius: "5px",
        background: "linear-gradient(135deg, #fdf2f8, #eff6ff)",
        border: "1px solid #e4e4e7",
        color: "#18181b",
        display: "inline-block",
      }}
    >
      {text}
    </span>
  );
}

const projects = [
  {
    title: "NimonsCooked",
    subtitle: "Course Project",
    meta: { team: "4 people", duration: "4 weeks" },
    tags: ["Java", "OOP", "Game Dev", "GUI"],
    image: nimonsImg,
    description:
      "A pixel-art, time-management cooking game inspired by Overcooked. Players control two chefs collaborating to prepare sushi dishes, manage kitchen stations, and complete customer orders under time pressure — all built on core Object-Oriented Programming principles including abstraction, inheritance, polymorphism, and encapsulation.",
    contribution:
      "My role focused on developing the core gameplay logic, implementing player movement and collision systems, integrating GUI assets, and ensuring seamless state transitions between menus and levels.",
    github: "https://github.com/NadineArindy/if2010-tubes-2025-k02-h.git",
  },
  {
    title: "Setor.in",
    subtitle: "Course Project",
    meta: { team: "6 people", duration: "2 months" },
    tags: ["Java", "JavaFX", "SQLite", "MVC", "OOP"],
    image: setorImg,
    description:
      "A desktop application built for waste bank operators to digitize and automate their day-to-day operational records. Operators can log waste deposits from residents where weight is automatically converted into balance or points based on price per kilogram, while simultaneously updating waste stock. All transaction records are permanent and immutable to ensure data integrity.",
    contribution:
      "My contributions covered writing backend Java logic for transaction handling, designing relational database queries for logging data, and developing user management features within the JavaFX environment.",
    github: "https://github.com/greeyash/IF2050-2026-K02-G12-Setor.in.git",
  },
];

export function ProjectsPage() {
  return (
    <div>
      {/* Header */}
      <section style={{ background: "#ffffff", padding: "110px 28px 48px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem",
              color: "#71717a",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Portfolio
          </p>
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "14px",
            }}
          >
            <span
              style={{
                background: GRAD,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projects
            </span>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              color: "#71717a",
              lineHeight: 1.7,
              maxWidth: "520px",
            }}
          >
            Course projects built as part of my studies at Institut Teknologi Bandung.
          </p>
        </div>
      </section>

      {/* Project list */}
      <section style={{ background: "#fafafa", padding: "8px 28px 96px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "28px" }}>
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                border: "1px solid #e4e4e7",
                overflow: "hidden",
              }}
            >
              {/* Gradient top bar */}
              <div style={{ height: "3px", background: GRAD }} />

              <div style={{ padding: "32px 36px" }}>
                {/* Title row + laptop mockup */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "24px",
                    marginBottom: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <h2
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        color: "#18181b",
                        letterSpacing: "-0.01em",
                        marginBottom: "8px",
                      }}
                    >
                      {project.title}
                    </h2>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "#71717a" }}>
                        {project.subtitle}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <Users size={12} color="#a1a1aa" />
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#a1a1aa" }}>
                          {project.meta.team}
                        </span>
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <Clock size={12} color="#a1a1aa" />
                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#a1a1aa" }}>
                          {project.meta.duration}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Project image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "220px",
                      height: "148px",
                      objectFit: "cover",
                      objectPosition: "top",
                      borderRadius: "8px",
                      border: "1px solid #e4e4e7",
                      flexShrink: 0,
                      display: "block",
                    }}
                  />
                </div>

                {/* Tech badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {project.tags.map((tag) => (
                    <Badge key={tag} text={tag} />
                  ))}
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "#f0f0f2", marginBottom: "20px" }} />

                {/* Description */}
                <div style={{ marginBottom: "16px" }}>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.68rem",
                      color: "#ec4899",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    About
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "#52525b",
                      lineHeight: 1.75,
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* My Contribution */}
                <div style={{ marginBottom: "24px" }}>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.68rem",
                      color: "#8b5cf6",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    My Contribution
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "#52525b",
                      lineHeight: 1.75,
                    }}
                  >
                    {project.contribution}
                  </p>
                </div>

                {/* GitHub link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    color: "#18181b",
                    background: "#f4f4f5",
                    border: "1px solid #e4e4e7",
                    borderRadius: "7px",
                    padding: "9px 16px",
                    textDecoration: "none",
                    transition: "background 0.15s, border-color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "linear-gradient(135deg, #fdf2f8, #eff6ff)";
                    el.style.borderColor = "#f9a8c9";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "#f4f4f5";
                    el.style.borderColor = "#e4e4e7";
                  }}
                >
                  <Github size={14} strokeWidth={2} />
                  View on GitHub
                  <ExternalLink size={12} strokeWidth={2} color="#a1a1aa" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
