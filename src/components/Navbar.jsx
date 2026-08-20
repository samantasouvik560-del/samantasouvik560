import { Link } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="custom-navbar">

      {/* LOGO */}
      <Link to="/" className="souvik-logo">
        Souvik
      </Link>


      {/* NAVIGATION */}
      <div className="nav-links">

        <Link to="/" className="nav-item">
          Home
        </Link>

        <Link to="/about" className="nav-item">
          About
        </Link>

        <Link to="/form" className="nav-item">
          Form
        </Link>

        <Link to="/contact" className="nav-item">
          Contact
        </Link>


        {/* TOOLS */}
        <div className="tools-wrapper">

          <button
            className="tools-button"
            type="button"
          >
            Tools <span>⌄</span>
          </button>
          <Link to="/ai-text-improver">
  ✨ <span>AI Text Improver</span>
</Link>

          <div className="tools-menu">

            <Link to="/text-tools">
              📝 <span>Text Tools</span>
            </Link>

            <Link to="/text-editor">
              ✏️ <span>Text Editor</span>
            </Link>

            <Link to="/word-counter">
              🔢 <span>Word Counter</span>
            </Link>

            <Link to="/text-analyzer">
              🔍 <span>Text Analyzer</span>
            </Link>

            <Link to="/quick-notes">
              📌 <span>Quick Notes</span>
            </Link>

          </div>

        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="navbar-right">

        <div className="search-wrapper">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Search"
          />

        </div>


        {/* DARK MODE */}
        <button
          className={`theme-button ${
            darkMode ? "dark" : ""
          }`}
          onClick={() =>
            setDarkMode(!darkMode)
          }
          type="button"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </div>

    </nav>
  );
}