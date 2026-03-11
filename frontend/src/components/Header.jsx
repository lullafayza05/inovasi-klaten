function Header() {
  return (
    <div style={{
      background: "#0c3b63",
      color: "white",
      padding: "40px",
      borderRadius: "10px",
      display: "flex",
      alignItems: "center",
      gap: "30px"
    }}>
      <img
        src="/hai.png"
        alt="hai"
        style={{ width: "140px", borderRadius: "10px" }}
      />

      <div>
        <h2>
          Inovasi penting dalam kehidupan yang berkembang dan dinamis sehingga
          perlu berkreasi dan berinovasi di semua bidang termasuk pemerintahan.
        </h2>

        <p style={{ marginTop: "10px" }}>
          <b>bapak</b> <br />
          Menteri Dalam Negeri
        </p>
      </div>
    </div>
  );
}

export default Header;