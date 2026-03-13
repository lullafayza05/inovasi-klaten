import { useNavigate } from "react-router-dom";
function Home() {

  const navigate = useNavigate();

  const menu = [
    { icon: "📍", title: "PETA INDEKS", link: "/peta" },
    { icon: "💡", title: "DATA INDEKS", link: "/data-indeks" },
    { icon: "🏅", title: "PEMENANG IGA", link: "/pemenang-iga" },
    { icon: "▶", title: "TUXEDOVATION", link: "/tuxedovation" },
    { icon: "💡", title: "PUJA INDAH", link: "/puja-indah" },
    { icon: "🌐", title: "WEB ", link: "/web-bskdn" }
  ];

  return (
  <div style={{ padding: "40px", position: "relative" }}>
   
      {/* HERO */}
      <div
        style={{
          background: "#0f2f54",
          color: "white",
          borderRadius: "15px",
          padding: "40px",
          marginBottom: "50px"
        }}
      >
        <h2>
          Inovasi penting dalam kehidupan yang berkembang dan dinamis
          sehingga perlu berkreasi dan berinovasi di semua bidang.
        </h2>
      </div>


      {/* ICON MENU */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "30px"
        }}
      >

        {menu.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.link)}
            style={{
              cursor: "pointer",
              textAlign: "center"
            }}
          >

            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                background: "#f1f1f1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "35px",
                transition: "0.3s",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.background = "#e6eef7";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = "#f1f1f1";
              }}
            >
              {item.icon}
            </div>

            <p style={{ marginTop: "10px", fontWeight: "bold" }}>
              {item.title}
            </p>

          </div>
        ))}

      </div>


      {/* COUNTDOWN */}
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h3>Hitung Mundur Pengisian Indeks Inovasi Daerah</h3>
        <p>Time's up!</p>
      </div>

    </div>
  );
}

export default Home;