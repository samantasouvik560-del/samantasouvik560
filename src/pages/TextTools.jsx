import { Link } from "react-router-dom";

export default function TextTools() {
  const tools = [
    {
      icon: "📝",
      title: "Text Editor",
      description: "Write, format, save and manage your documents.",
      category: "Writing",
      link: "/text-editor",
      active: true,
    },
    {
      icon: "📊",
      title: "Text Analyzer",
      description: "Analyze words, characters, sentences and reading time.",
      category: "Analysis",
      link: "/word-counter",
      active: true,
    },
    {
      icon: "🔍",
      title: "Find & Replace",
      description: "Find specific text and replace it instantly.",
      category: "Editing",
      link: "#",
    },
    {
      icon: "🧹",
      title: "Text Cleaner",
      description: "Clean spaces, blank lines and unwanted characters.",
      category: "Cleaning",
      link: "#",
    },
    {
      icon: "🔀",
      title: "Sort Lines",
      description: "Sort text lines alphabetically or numerically.",
      category: "Organizing",
      link: "#",
    },
    {
      icon: "♻️",
      title: "Duplicate Remover",
      description: "Detect and remove duplicate lines from your text.",
      category: "Cleaning",
      link: "#",
    },
    {
      icon: "🔐",
      title: "Text Encoder",
      description: "Encode and decode Base64 and URL text.",
      category: "Developer",
      link: "#",
    },
    {
      icon: "🧩",
      title: "JSON Formatter",
      description: "Format, beautify and validate JSON data.",
      category: "Developer",
      link: "#",
    },
    {
      icon: "📋",
      title: "Text Compare",
      description: "Compare two texts and identify their differences.",
      category: "Analysis",
      link: "#",
    },
    {
      icon: "🔤",
      title: "Slug Generator",
      description: "Convert text into clean URL-friendly slugs.",
      category: "Developer",
      link: "#",
    },
    {
      icon: "📑",
      title: "Markdown Preview",
      description: "Write Markdown and preview the formatted result.",
      category: "Writing",
      link: "#",
    },
    {
      icon: "↔️",
      title: "Whitespace Tools",
      description: "Convert spaces, tabs and line breaks easily.",
      category: "Cleaning",
      link: "#",
    },
  ];

  return (
    <div className="text-lab-page">

      {/* HERO */}

      <section className="text-lab-hero">

        <div className="text-lab-badge">
          ✦ SOUVIK HUB / TEXT LAB
        </div>

        <h1>
          Everything you need
          <span> to work with text.</span>
        </h1>

        <p>
          Write, analyze, clean, organize and transform text
          with a collection of powerful productivity tools.
        </p>

      </section>


      {/* SEARCH */}

      <div className="text-lab-search">

        <span>⌕</span>

        <input
          type="text"
          placeholder="Search a text tool..."
        />

        <div className="search-shortcut">
          /
        </div>

      </div>


      {/* FEATURED */}

      <section className="featured-tool">

        <div className="featured-icon">
          📝
        </div>

        <div className="featured-content">

          <div className="featured-label">
            FEATURED TOOL
          </div>

          <h2>
            Text Editor
          </h2>

          <p>
            A powerful workspace for writing and formatting
            documents with saving, downloading and printing.
          </p>

          <Link
            to="/text-editor"
            className="featured-button"
          >
            Open Text Editor →
          </Link>

        </div>

        <div className="featured-decoration">
          Aa
        </div>

      </section>


      {/* TOOL HEADER */}

      <div className="tools-heading">

        <div>
          <span>TOOLKIT</span>
          <h2>Text Utilities</h2>
        </div>

        <p>
          {tools.length} tools available
        </p>

      </div>


      {/* TOOLS */}

      <section className="text-lab-grid">

        {tools.map((tool, index) => {

          const CardContent = (
            <>
              <div className="tool-card-top">

                <div className={`lab-tool-icon icon-${index}`}>
                  {tool.icon}
                </div>

                <span className="tool-category">
                  {tool.category}
                </span>

              </div>

              <h3>
                {tool.title}
              </h3>

              <p>
                {tool.description}
              </p>

              <div className="tool-card-footer">

                <span>
                  {tool.active
                    ? "Open tool"
                    : "Coming soon"}
                </span>

                <span className="tool-arrow">
                  →
                </span>

              </div>
            </>
          );

          return tool.active ? (
            <Link
              key={tool.title}
              to={tool.link}
              className="lab-tool-card"
            >
              {CardContent}
            </Link>
          ) : (
            <div
              key={tool.title}
              className="lab-tool-card coming-soon"
            >
              {CardContent}
            </div>
          );
        })}

      </section>


      {/* BOTTOM */}

      <section className="text-lab-bottom">

        <div>
          <span className="bottom-icon">
            ⚡
          </span>

          <div>
            <h3>
              More tools are coming
            </h3>

            <p>
              New developer and productivity utilities
              will be added to Souvik Hub.
            </p>
          </div>
        </div>

        <span className="version">
          v1.0
        </span>

      </section>

    </div>
  );
}