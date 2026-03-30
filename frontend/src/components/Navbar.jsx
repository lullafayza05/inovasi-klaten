import { Link } from "react-router-dom";
import logo from "../assets/logobaperda.png";
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
  <div className="coin-logo">🪙</div>

  <h3 style={{ margin: 0, whiteSpace: "nowrap" }}>
    KOIN Klaten
  </h3>
</div>

      <ul
  style={{
    display: "flex",
    alignItems: "center",
    gap: "35px",
    listStyle: "none",
    margin: 0,
    padding: 0
  }}
>


  <li>
  <Link to="/" className="menu-link">Home</Link>
</li>

<li>
  <Link to="/pengumuman" className="menu-link">Pengumuman</Link>
</li>

<li>
  <Link to="/pedoman" className="menu-link">Pedoman Nilai Indeks</Link>
</li>

<li>
  <Link to="/manual-book" className="menu-link">Manual Book</Link>
</li>

<li>
  <Link to="/galeri" className="menu-link">Galeri</Link>
</li>

<li>
  <Link to="/berita" className="menu-link">Berita</Link>
</li>
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