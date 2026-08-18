import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand souvik-brand" to="/">
          Souvik
        </Link>

        {/* Mobile menu button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >

          {/* Menu */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            {/* About */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            {/* Form */}
            <li className="nav-item">
              <Link className="nav-link" to="/form">
                Form
              </Link>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

            {/* Tools */}
            <li className="nav-item dropdown">

              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Tools
              </a>

              <ul className="dropdown-menu">

                {/* Text Tools */}
                <li>
                  <Link
                    className="dropdown-item"
                    to="/text-tools"
                  >
                    Text Tools
                  </Link>
                </li>

                {/* Text Editor */}
                <li>
                  <Link
                    className="dropdown-item"
                    to="/text-editor"
                  >
                    Text Editor
                  </Link>
                </li>

                {/* Word Counter */}
                <li>
                  <Link
                    className="dropdown-item"
                    to="/word-counter"
                  >
                    Word Counter
                  </Link>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                {/* More Tools */}
                <li>
                  <Link
                    className="dropdown-item"
                    to="/more-tools"
                  >
                    More Tools
                  </Link>
                </li>

              </ul>
            </li>

          </ul>

          {/* Search + Dark Mode */}
          <form className="d-flex navbar-tools">

            <input
              className="form-control search-box"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />

            <button
              className="btn search-btn"
              type="submit"
            >
              Search
            </button>

            {/* Dark Mode Toggle */}
            <div className="dark-mode-toggle">

              <label className="switch">

                <input
                  type="checkbox"
                  checked={props.darkMode}
                  onChange={() =>
                    props.setDarkMode(!props.darkMode)
                  }
                />

                <span className="slider"></span>

              </label>

              <span className="dark-mode-text">
                Enable Dark Mode
              </span>

            </div>

          </form>

        </div>
      </div>
    </nav>
  );
}