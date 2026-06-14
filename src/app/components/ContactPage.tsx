import { useState } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle } from "lucide-react";

export function ContactPage() {
  const [form, setForm] = useState({ email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1400);
  }

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    background: "rgba(255,255,255,0.12)",
    border: `1.5px solid ${focused === field ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.3)"}`,
    borderRadius: "10px",
    padding: "13px 16px",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    color: "#ffffff",
    outline: "none",
    transition: "border-color 0.15s, background 0.15s",
    backdropFilter: "blur(8px)",
    boxSizing: "border-box",
  });

  const socialLinks = [
    {
      icon: <Github size={20} strokeWidth={1.5} />,
      label: "GitHub",
      handle: "@zfkay",
      href: "https://github.com/zfkay",
    },
    {
      icon: <Linkedin size={20} strokeWidth={1.5} />,
      label: "LinkedIn",
      handle: "linkedin.com/in/zhafirakayla",
      href: "https://linkedin.com/in/zhafirakayla",
    },
    {
      icon: <Mail size={20} strokeWidth={1.5} />,
      label: "Email",
      handle: "zhafirakay146@gmail.com",
      href: "mailto:zhafirakay146@gmail.com",
    },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 52%, #3b82f6 100%)",
        minHeight: "100vh",
        padding: "110px 28px 80px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto", width: "100%" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.65)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Get in touch
          </p>
          <h1
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3rem)",
              color: "#ffffff",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Let's Connect
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.7,
              maxWidth: "440px",
              margin: "0 auto",
            }}
          >
            An Information Systems and Technology student at ITB who loves bridging management, people, and tech. Currently looking for internship opportunities in tech or product roles. Let's build something cool together!
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Form */}
          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "16px",
              padding: "36px",
              backdropFilter: "blur(16px)",
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <CheckCircle size={44} color="#ffffff" style={{ margin: "0 auto 16px", display: "block" }} />
                <p
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    color: "#fff",
                    marginBottom: "8px",
                  }}
                >
                  Message sent!
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.75)",
                    marginBottom: "24px",
                  }}
                >
                  I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ email: "", message: "" }); }}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.85rem",
                    color: "#18181b",
                    background: "#ffffff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "9px 20px",
                    cursor: "pointer",
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.78rem",
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: "6px",
                      letterSpacing: "0.03em",
                    }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="you@example.com"
                    style={inputStyle("email")}
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.78rem",
                      color: "rgba(255,255,255,0.7)",
                      marginBottom: "6px",
                      letterSpacing: "0.03em",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="What's on your mind?"
                    style={{ ...inputStyle("message"), resize: "vertical" }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    color: "#18181b",
                    background: sending ? "rgba(255,255,255,0.6)" : "#ffffff",
                    border: "none",
                    borderRadius: "10px",
                    padding: "13px",
                    cursor: sending ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "opacity 0.15s",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                  }}
                >
                  {sending ? (
                    <>
                      <span
                        style={{
                          width: "15px",
                          height: "15px",
                          border: "2px solid rgba(0,0,0,0.2)",
                          borderTopColor: "#18181b",
                          borderRadius: "50%",
                          display: "inline-block",
                          animation: "spin 0.7s linear infinite",
                        }}
                      />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={15} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Social links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                color: "rgba(255,255,255,0.9)",
                marginBottom: "4px",
              }}
            >
              Find me online
            </p>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "20px 22px",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "12px",
                  textDecoration: "none",
                  backdropFilter: "blur(8px)",
                  transition: "background 0.15s, transform 0.15s, box-shadow 0.15s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(255,255,255,0.2)";
                  el.style.transform = "translateY(-1px)";
                  el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "rgba(255,255,255,0.1)";
                  el.style.transform = "";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Glowing icon */}
                <span
                  style={{
                    color: "#ffffff",
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 0 16px rgba(255,255,255,0.2)",
                  }}
                >
                  {s.icon}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      color: "#ffffff",
                      marginBottom: "2px",
                    }}
                  >
                    {s.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      color: "rgba(255,255,255,0.65)",
                    }}
                  >
                    {s.handle}
                  </p>
                </div>
              </a>
            ))}

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.55)",
                marginTop: "8px",
                lineHeight: 1.6,
              }}
            >Based in Bandung, Indonesia.<br /></p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 680px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
