import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#fff",
        borderBottom: "1px solid #ddd"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Logo_Kemendagri.png/120px-Logo_Kemendagri.png"
          width="40"
        />
        <h3>Inovasi Klaten</h3>
      </div>

      <ul style={{ display: "flex", gap: "25px", listStyle: "none" }}>
        <li><Link to="/" style={{ textDecoration: "none", color: "#333" }}>Home</Link></li>
        <li><Link to="/pengumuman" style={{ textDecoration: "none", color: "#333" }}>Pengumuman</Link></li>
        <li><Link to="/pedoman" style={{ textDecoration: "none", color: "#333" }}>Pedoman Nilai Indeks</Link></li>
        <li><Link to="/manual-book" style={{ textDecoration: "none", color: "#333" }}>Manual Book</Link></li>
        <li><Link to="/galeri" style={{ textDecoration: "none", color: "#333" }}>Galeri</Link></li>
        <li><Link to="/berita" style={{ textDecoration: "none", color: "#333" }}>Berita</Link></li>
      </ul>

      <Link to="/login">
        <button
          style={{
            background: "#1c3d6e",
            color: "white",
            border: "none",
            padding: "8px 20px",
            borderRadius: "20px"
          }}
        >
          Login
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;