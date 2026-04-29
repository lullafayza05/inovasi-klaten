import { useState } from "react";
import Lomba from "./Lomba";

function Dashboard() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [page, setPage] = useState("dashboard");
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("Semua");

  const data = [
    {
      pemda: "Klaten",
      akun: "admin",
      nama: "Smart City",
      inovasi: "Penerapan",
      tahapan: "ASN",
      inisiator: "Bapperida",
      koordinat: "-7.7058,110.6061",
      urusan: "Pendidikan",
      penerapan: "2024",
      pengembangan: "2023",
      skor: 80,
      aksi: true,
    },
    {
      pemda: "Surakarta",
      akun: "admin",
      nama: "Digital Health",
      inovasi: "Uji Coba",
      tahapan: "OPD",
      inisiator: "Dinkes",
      koordinat: "-7.5666,110.8166",
      urusan: "Kesehatan",
      penerapan: "2025",
      pengembangan: "2024",
      skor: 70,
      aksi: true,
    },
  ];

  const filteredData = data.filter((item) => {
    const keyword = search.toLowerCase();

    const matchSearch =
      String(item.pemda).toLowerCase().includes(keyword) ||
      String(item.akun).toLowerCase().includes(keyword) ||
      String(item.nama).toLowerCase().includes(keyword) ||
      String(item.inovasi).toLowerCase().includes(keyword) ||
      String(item.tahapan).toLowerCase().includes(keyword) ||
      String(item.inisiator).toLowerCase().includes(keyword) ||
      String(item.urusan).toLowerCase().includes(keyword);

    const matchStatus =
      filterStatus === "Semua" || item.inovasi === filterStatus;

    return matchSearch && matchStatus;
  });

  const handleDownload = () => {
    const csv = [
      [
        "Pemda",
        "Akun",
        "Nama",
        "Inovasi",
        "Tahapan",
        "Inisiator",
        "Koordinat",
        "Urusan",
        "Penerapan",
        "Pengembangan",
        "Skor",
      ],
      ...filteredData.map((d) => [
        d.pemda,
        d.akun,
        d.nama,
        d.inovasi,
        d.tahapan,
        d.inisiator,
        d.koordinat,
        d.urusan,
        d.penerapan,
        d.pengembangan,
        d.skor,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "data_inovasi.csv";
    a.click();
  };

  const stats = [
    { title: "Inovasi Dilaporkan", value: 257 },
    { title: "Inovasi Dikirim", value: 221 },
    { title: "Skor", value: 76 },
    { title: "Inisiatif", value: 5 },
    { title: "Uji Coba", value: 2 },
    { title: "Penerapan", value: 250 },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {openSidebar && (
        <div style={sidebar}>
          <h3 style={{ padding: "20px" }}>Dashboard</h3>

          <div style={menuItem} onClick={() => setPage("dashboard")}>
            Dashboard
          </div>

          <div style={menuItem} onClick={() => setPage("database")}>
            Database Inovasi
          </div>

          <div style={menuItem} onClick={() => setPage("lomba")}>
            Lomba Inovasi
          </div>
        </div>
      )}

      <div style={{ flex: 1, background: "#f4f6f9" }}>
        <div style={navbar}>
          <span
            onClick={() => setOpenSidebar(!openSidebar)}
            style={{ cursor: "pointer" }}
          >
            ☰
          </span>
          <h3>Dashboard Indeks Inovasi Daerah</h3>
        </div>

        <div style={{ padding: "20px" }}>
          {page === "dashboard" && (
            <>
              <h2>Form Input Inovasi</h2>
              <p style={{ color: "#777" }}>
                Tambahkan data inovasi daerah baru
              </p>

              <div style={formCard}>
                <div style={formGroup}>
                  <label>Nama Pemda</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama pemda"
                    style={inputStyle}
                  />
                </div>

                <div style={formGroup}>
                  <label>Nama Akun</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama akun"
                    style={inputStyle}
                  />
                </div>

                <div style={formGroup}>
                  <label>Nama Inovasi</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama inovasi"
                    style={inputStyle}
                  />
                </div>

                <div style={formGroup}>
                  <label>Tahapan Inovasi</label>
                  <select style={inputStyle}>
                    <option>Inisiatif</option>
                    <option>Uji Coba</option>
                    <option>Penerapan</option>
                  </select>
                </div>

                <div style={formGroup}>
                  <label>Nama Inisiator</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama inisiator"
                    style={inputStyle}
                  />
                </div>

                <div style={formGroup}>
                  <label>Koordinat</label>
                  <input
                    type="text"
                    placeholder="-7.7058,110.6061"
                    style={inputStyle}
                  />
                </div>

                <div style={formGroup}>
                  <label>Urusan</label>
                  <input
                    type="text"
                    placeholder="Masukkan urusan"
                    style={inputStyle}
                  />
                </div>

                <div style={formGroup}>
                  <label>Tahun Penerapan</label>
                  <input
                    type="number"
                    placeholder="2026"
                    style={inputStyle}
                  />
                </div>

                <div style={formGroup}>
                  <label>Tahun Pengembangan</label>
                  <input
                    type="number"
                    placeholder="2025"
                    style={inputStyle}
                  />
                </div>

                <div style={formGroup}>
                  <label>Skor</label>
                  <input
                    type="number"
                    placeholder="0 - 100"
                    style={inputStyle}
                  />
                </div>

                <button style={submitBtn}>Simpan Data</button>
              </div>
            </>
          )}

          {page === "database" && (
            <>
              <h2>Inovasi Daerah</h2>
              <p style={{ color: "#777" }}>
                Update: {new Date().toLocaleString()}
              </p>

              <div style={searchWrapper}>
                <span style={icon}>🔍</span>
                <input
                  placeholder="Cari data..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={searchInput}
                />
              </div>

              <div style={grid}>
                {stats.map((item, i) => (
                  <div key={i} style={card}>
                    <p>{item.title}</p>
                    <h1>{item.value}</h1>
                  </div>
                ))}
              </div>

              <h3 style={{ marginTop: "30px" }}>Unduh Data</h3>
              <button style={downloadBtn} onClick={handleDownload}>
                DOWNLOAD
              </button>

              <div style={tabContainer}>
                {["Semua", "Inisiatif", "Uji Coba", "Penerapan"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => setFilterStatus(item)}
                      style={filterStatus === item ? activeTab : tab}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>

              <div style={mainCard}>
                <div style={filterHeader}>
                  <div>
                    <h3>Kabupaten Klaten</h3>
                    <p>Bapperida IGA</p>
                  </div>
                </div>

                <div style={{ overflowX: "auto" }}>
                  <table style={table}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Nama Pemda</th>
                        <th style={thStyle}>Nama Akun</th>
                        <th style={thStyle}>Nama Inovasi</th>
                        <th style={thStyle}>Tahapan</th>
                        <th style={thStyle}>Inisiator</th>
                        <th style={thStyle}>Koordinat</th>
                        <th style={thStyle}>Urusan</th>
                        <th style={thStyle}>Penerapan</th>
                        <th style={thStyle}>Pengembangan</th>
                        <th style={thStyle}>Skor</th>
                        <th style={thStyle}>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.length === 0 ? (
                        <tr>
                          <td style={tdStyle} colSpan="11">
                            Data kosong
                          </td>
                        </tr>
                      ) : (
                        filteredData.map((item, i) => (
                          <tr
                            key={i}
                            style={{
                              background:
                                i % 2 === 0 ? "#fff" : "#f9f9f9",
                            }}
                          >
                            <td style={tdStyle}>{item.pemda}</td>
                            <td style={tdStyle}>{item.akun}</td>
                            <td style={tdStyle}>{item.nama}</td>
                            <td style={tdStyle}>{item.inovasi}</td>
                            <td style={tdStyle}>{item.inisiator}</td>
                            <td style={tdStyle}>{item.koordinat}</td>
                            <td style={tdStyle}>{item.urusan}</td>
                            <td style={tdStyle}>{item.penerapan}</td>
                            <td style={tdStyle}>{item.pengembangan}</td>
                            <td style={tdStyle}>{item.skor}</td>
                            <td style={tdStyle}>{String(item.aksi)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {page === "lomba" && <Lomba />}
        </div>
      </div>
    </div>
  );
}

const sidebar = {
  width: "220px",
  background: "#1e3a5f",
  color: "white",
};

const menuItem = {
  padding: "15px 20px",
  cursor: "pointer",
};

const navbar = {
  height: "60px",
  background: "#0b2c5f",
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "0 20px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  marginTop: "20px",
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "15px",
};

const downloadBtn = {
  padding: "10px 20px",
  borderRadius: "20px",
  border: "1px solid blue",
  background: "white",
};

const tabContainer = {
  display: "flex",
  gap: "10px",
  marginTop: "20px",
};

const tab = {
  padding: "10px",
  background: "#ddd",
  border: "none",
  cursor: "pointer",
};

const activeTab = {
  ...tab,
  background: "#0b2c5f",
  color: "white",
};

const mainCard = {
  background: "white",
  padding: "20px",
  marginTop: "20px",
  borderRadius: "10px",
};

const filterHeader = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const table = {
  width: "100%",
  marginTop: "20px",
  borderCollapse: "collapse",
};

const thStyle = {
  borderBottom: "2px solid #ddd",
  padding: "12px",
  textAlign: "left",
  background: "#f4f6f9",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #eee",
};

const searchWrapper = {
  display: "flex",
  alignItems: "center",
  background: "#f1f3f5",
  borderRadius: "999px",
  padding: "6px 12px",
  width: "220px",
  border: "1px solid #ddd",
};

const icon = {
  fontSize: "12px",
  marginRight: "6px",
  color: "#888",
};

const searchInput = {
  border: "none",
  outline: "none",
  background: "transparent",
  fontSize: "13px",
  width: "100%",
};

const formCard = {
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  maxWidth: "700px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
};

const formGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const submitBtn = {
  padding: "14px",
  background: "#0b2c5f",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

export default Dashboard;