function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#fff",
        borderBottom: "1px solid #eee"
      }}
    >
      <h2 style={{ margin: 0, fontWeight: "bold" }}>
        Inovasi Klaten
      </h2>

      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          margin: 0,
          padding: 0
        }}
      >
        <li>Home</li>
        <li>Pengumuman</li>
        <li>Pedoman Nilai Indeks</li>
        <li>Manual Book</li>
        <li>Galeri</li>
        <li>Berita</li>
      </ul>

      <button
        style={{
          background: "#0c3b63",
          color: "white",
          padding: "5px 20px",
          borderRadius: "60px",
          border: "none",
          cursor: "pointer"
        }}
      >
        Login
      </button>
    </nav>
  );
}

export default Navbar;