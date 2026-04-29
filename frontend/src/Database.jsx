import { useState } from "react";

function Database() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("Semua");

  const data = [];

  const filteredData = data.filter((item) => {
    const keyword = search.toLowerCase();

    const matchSearch =
      String(item.pemda || "").toLowerCase().includes(keyword) ||
      String(item.akun || "").toLowerCase().includes(keyword) ||
      String(item.nama || "").toLowerCase().includes(keyword) ||
      String(item.inovasi || "").toLowerCase().includes(keyword) ||
      String(item.tahapan || "").toLowerCase().includes(keyword) ||
      String(item.inisiator || "").toLowerCase().includes(keyword) ||
      String(item.koordinat || "").toLowerCase().includes(keyword) ||
      String(item.urusan || "").toLowerCase().includes(keyword) ||
      String(item.penerapan || "").toLowerCase().includes(keyword) ||
      String(item.pengembangan || "").toLowerCase().includes(keyword) ||
      String(item.skor || "").toLowerCase().includes(keyword) ||
      String(item.aksi || "").toLowerCase().includes(keyword);

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
        "Aksi",
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
        d.aksi,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "data_inovasi.csv";
    a.click();
  };

  const stats = [
    { title: "Inovasi Dilaporkan", value: 0 },
    { title: "Inovasi Dikirim", value: 0 },
    { title: "Skor", value: 0 },
    { title: "Inisiatif", value: 0 },
    { title: "Uji Coba", value: 0 },
    { title: "Penerapan", value: 0 },
  ];

  return (
    <div style={{ background: "#f4f6f9" }}>
      <div style={{ padding: "20px" }}>
        <h2>Inovasi Daerah</h2>
        <p style={{ color: "#777" }}>
          Update: {new Date().toLocaleString()}
        </p>

        {/* SEARCH */}
        <div style={searchWrapper}>
          <span style={icon}>🔍</span>
          <input
            placeholder="Cari data..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={searchInput}
          />
        </div>

        {/* STATS */}
        <div style={grid}>
          {stats.map((item, i) => (
            <div key={i} style={card}>
              <p>{item.title}</p>
              <h1>{item.value}</h1>
            </div>
          ))}
        </div>

        {/* DOWNLOAD */}
        <h3 style={{ marginTop: "30px" }}>Unduh Data</h3>
        <button style={downloadBtn} onClick={handleDownload}>
          DOWNLOAD
        </button>

        {/* TAB */}
        <div style={tabContainer}>
          {["Semua", "Inisiatif", "Uji Coba", "Penerapan"].map((item) => (
            <button
              key={item}
              onClick={() => setFilterStatus(item)}
              style={filterStatus === item ? activeTab : tab}
            >
              {item}
            </button>
          ))}
        </div>

        {/* MAIN CARD */}
        <div style={mainCard}>
          <div style={filterHeader}>
            <div>
              <h3>Kabupaten Klaten</h3>
              <p>bapperida IGA</p>
            </div>

            <div style={searchWrapper}>
              <span style={icon}>🔍</span>
              <input
                placeholder="Pencarian"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={searchInput}
              />
            </div>
          </div>

          {/* FILTER */}
          <div style={filterRow}>
            <select style={input}>
              <option>Bentuk Inovasi</option>
              <option>
                Inovasi daerah lainnya sesuai dengan urusan pemerintahan
              </option>
              <option>Inovasi pelayanan publik</option>
              <option>Inovasi tata kelola pemerintahan daerah</option>
            </select>

            <select style={input}>
              <option>Jenis Urusan</option>
              <option>Pendidikan</option>
              <option>Kesehatan</option>
              <option>Perhubungan</option>
              <option>Komunikasi dan Informatika</option>
              <option>Pariwisata</option>
            </select>

            <select style={input}>
              <option>Inisiator</option>
              <option>Kepala Daerah</option>
              <option>Anggota DPRD</option>
              <option>OPD</option>
              <option>ASN</option>
              <option>Masyarakat</option>
            </select>
          </div>

          {/* TABLE */}
          <div style={{ overflowX: "auto" }}>
            <table style={table}>
              <thead>
                <tr>
                  <th style={thStyle}>Nama Pemda</th>
                  <th style={thStyle}>Nama Akun</th>
                  <th style={thStyle}>Nama Inovasi</th>
                  <th style={thStyle}>Tahapan Inovasi</th>
                  <th style={thStyle}>Nama Inisiator</th>
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
                    <tr key={i}>
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
      </div>
    </div>
  );
}

/* ================= STYLE ================= */

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
  cursor: "pointer",
};

const tabContainer = {
  display: "flex",
  gap: "10px",
  marginTop: "20px",
};

const tab = {
  padding: "10px 15px",
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
  gap: "20px",
  flexWrap: "wrap",
};

const filterRow = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  marginTop: "20px",
};

const input = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
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

export default Database;