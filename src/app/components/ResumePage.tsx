const GRAD = "linear-gradient(135deg, #ec4899 0%, #8b5cf6 52%, #3b82f6 100%)";

function GradientTag({ text }: { text: string }) {
  return (
    <span
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.72rem",
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
      <h2
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 700,
          fontSize: "1.1rem",
          color: "#18181b",
          whiteSpace: "nowrap",
          letterSpacing: "-0.01em",
        }}
      >
        {children}
      </h2>
      <div
        style={{
          flex: 1,
          height: "1.5px",
          background: "linear-gradient(to right, #e4e4e7, transparent)",
        }}
      />
    </div>
  );
}

const experiences = [
  {
    role: "UXvidia Competition Specialist",
    company: "Arkavidia 11.0",
    period: "May 2026 — Present",
    bullets: [
      "Co-managing the execution of a national-level UI/UX design competition, attracting student participants from various universities.",
      "Collaborating with cross-functional committees to design clear competition guidelines and ensure a seamless participant experience.",
    ],
  },
  {
    role: "Content Strategist Staff",
    company: "Arkavidia 10.0",
    period: "Nov 2025 — Mar 2026",
    bullets: [
      "Created engaging digital content strategies that successfully boosted social media engagement and brand awareness for Arkavidia.",
      "Spearheaded live event documentation and real-time reports during peak event days to maintain active audience interaction.",
    ],
  },
  {
    role: "Internal Relations Specialist",
    company: "HMIF ITB",
    period: "Jun 2025 — Present",
    bullets: [
      "Maintained and strengthened strategic partnerships between HMIF, other student associations, and ITB's faculty members.",
      "Facilitated formal communications and collaborative forums to bridge student initiatives with academic stakeholders.",
    ],
  },
  {
    role: "Internal Engagement Intern",
    company: "HMIF ITB",
    period: "Oct 2025 — Mar 2026",
    bullets: [
      "Planned and executed internal community-building events to improve solidarity and engagement among HMIF members.",
    ],
  },
  {
    role: "Liaison Officer Staff — April Graduation",
    company: "HMIF ITB",
    period: "Mar 2026 — Apr 2026",
    bullets: [
      "Acted as the primary liaison and facilitator for graduates, managing schedule coordination and personal assistance during the graduation events.",
    ],
  },
  {
    role: "Mentor Staff (Brimana Racantari)",
    company: "OSKM ITB 2025",
    period: "Aug 2025",
    bullets: [
      "Mentored and facilitated the onboarding process for dozens of freshman students, introducing them to campus culture and student life.",
      "Served as the primary point of guidance, fostering a supportive environment and managing group dynamics during orientation.",
    ],
  },
  {
    role: "Campus Tour Guide Staff (Ardhacandra Vega)",
    company: "AMI ITB 2025",
    period: "Feb 2025",
    bullets: [
      "Conducted interactive campus tours and informational sessions for prospective students, promoting higher education motivation.",
      "Managed crowd control and logistics to ensure safe, engaging, and well-scheduled tour pathways for visitors.",
    ],
  },
  {
    role: "Human Resource Development Staff",
    company: "Wisuda Oktober ITB 2024",
    period: "Oct 2024",
    bullets: [
      "Evaluated committee performance and monitored operational workflows to ensure the graduation ceremony ran successfully.",
      "Provided constructive feedback and performance assessments for event staff members.",
    ],
  },
];

const skillGroups = [
  { label: "Languages", tags: ["Java", "Python", "C", "SQL"] },
  { label: "Databases", tags: ["PostgreSQL", "MySQL"] },
  { label: "Design & Tools", tags: ["Figma", "Git", "GitHub"] },
  { label: "Management & Soft Skills", tags: ["Project Management", "Team Leadership", "Event Coordination"] },
];

export function ResumePage() {
  return (
    <div>
      {/* ── HEADER — gradient ── */}
      <section
        style={{
          background: GRAD,
          padding: "120px 28px 64px",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.65)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Curriculum Vitae
          </p>
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#ffffff",
              marginBottom: "12px",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >Zhafira Kayla Nafisa</h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.6,
            }}
          > Syestem and Technology Information Student, Institut Teknologi Bandung<br />zhafirakay146@gmail.com · <span style={{ opacity: 0.7 }}>github.com/zfkay · linkedin.com/in/zhafirakayla</span></p>
        </div>
      </section>

      {/* ── BODY — white ── */}
      <section style={{ background: "#ffffff", padding: "64px 28px 96px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          {/* Education */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>Education</SectionLabel>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "4px",
                marginBottom: "8px",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#18181b",
                  }}
                >
                  Institut Teknologi Bandung
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "#71717a",
                    marginTop: "3px",
                  }}
                >
                  B.Sc. System and Technology Information
                </p>
              </div>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.72rem",
                  color: "#71717a",
                  background: "#f4f4f5",
                  padding: "3px 10px",
                  borderRadius: "5px",
                  border: "1px solid #e4e4e7",
                  whiteSpace: "nowrap",
                }}
              >2024 — Present</span>
            </div>
          </div>

          {/* Leadership & Activities */}
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>Leadership &amp; Activities</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
              {experiences.map((exp) => (
                <div key={exp.role}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "4px",
                      marginBottom: "8px",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: "'Outfit', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          color: "#18181b",
                        }}
                      >
                        {exp.role}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.85rem",
                          color: "#71717a",
                          marginTop: "2px",
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.72rem",
                        color: "#71717a",
                        background: "#f4f4f5",
                        padding: "3px 10px",
                        borderRadius: "5px",
                        border: "1px solid #e4e4e7",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  {/* Gradient left-border accent */}
                  <div
                    style={{
                      paddingLeft: "16px",
                      borderLeft: "2px solid",
                      borderImage: `${GRAD} 1`,
                    }}
                  >
                    <ul
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        color: "#52525b",
                        lineHeight: 1.75,
                        paddingLeft: "4px",
                        listStyleType: "none",
                      }}
                    >
                      {exp.bullets.map((b) => (
                        <li key={b} style={{ display: "flex", gap: "8px", marginBottom: "4px" }}>
                          <span style={{ color: "#ec4899", flexShrink: 0, marginTop: "2px" }}>▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <SectionLabel>Skills</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {skillGroups.map((group) => (
                <div
                  key={group.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "120px 1fr",
                    gap: "12px",
                    alignItems: "start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.825rem",
                      color: "#71717a",
                      paddingTop: "4px",
                    }}
                  >
                    {group.label}
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {group.tags.map((tag) => (
                      <GradientTag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
