import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="page"
      style={{
        padding: "80px 7%",
        minHeight: "calc(100vh - 70px)",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "72px", margin: 0 }}>404</h1>
      <p style={{ fontSize: "18px", opacity: 0.75, margin: "10px 0 30px" }}>
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          padding: "12px 26px",
          borderRadius: "10px",
          background: "#6c63ff",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}