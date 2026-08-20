import { Link } from "react-router-dom";

export default function MoreTools() {
  const upcoming = [
    { icon: "🧹", title: "Text Cleaner", description: "Clean spaces, blank lines and unwanted characters." },
    { icon: "🔀", title: "Sort Lines", description: "Sort text lines alphabetically or numerically." },
    { icon: "♻️", title: "Duplicate Remover", description: "Detect and remove duplicate lines from your text." },
    { icon: "🔐", title: "Text Encoder", description: "Encode and decode Base64 and URL text." },
    { icon: "🧩", title: "JSON Formatter", description: "Format, beautify and validate JSON data." },
    { icon: "📋", title: "Text Compare", description: "Compare two texts and identify their differences." },
    { icon: "🔤", title: "Slug Generator", description: "Convert text into clean URL-friendly slugs." },
    { icon: "📑", title: "Markdown Preview", description: "Write Markdown and preview the formatted result." },
  ];

  return (
    <div className="page" style={{ padding: "60px 7%", minHeight: "calc(100vh - 70px)" }}>
      <h1>More Tools</h1>
      <p>
        These utilities are on the way. In the meantime, check out the tools
        that are already live in the{" "}
        <Link to="/text-tools">Text Tools</Link> hub.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "35px",
        }}
      >
        {upcoming.map((tool) => (
          <div
            key={tool.title}
            style={{
              background: "var(--card-bg, #fff)",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: "14px",
              padding: "22px",
            }}
          >
            <div style={{ fontSize: "28px", marginBottom: "10px" }}>{tool.icon}</div>
            <h3 style={{ margin: "0 0 8px" }}>{tool.title}</h3>
            <p style={{ margin: 0, opacity: 0.75 }}>{tool.description}</p>
            <span style={{ display: "inline-block", marginTop: "12px", fontSize: "13px", opacity: 0.6 }}>
              Coming soon
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}