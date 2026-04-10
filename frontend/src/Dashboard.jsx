import { useState } from "react";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("Semua");
  const [openSidebar, setOpenSidebar] = useState(true);

  const data = [
    {
      pemda: "Klaten",
      akun: "admin",
      nama: "Smart Village",
      inovasi: "Penerapan",
      tahapan: "ASN",
      inisiator: "ini",
      koordinat: "-7.7,110.6",
      urusan: "Pendidikan",
      penerapan: "2024",
      pengembangan: "2023",
      skor: 80,
      aksi: true, 
    },
  ];

  const filteredData = data.filter((item) => {
    const matchSearch = item.nama
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus =
      filterStatus === "Semua" || item.status === filterStatus;

    return matchSearch && matchStatus;
  });

  const handleDownload = () => {
    const csv = [
      ["Pemda", "Akun", "Inovasi", "Tahapan", "Inisiator", "Koordinat", "Urusan", "Penerapan", "Pengembangan", "Skor", "Aksi"],
      ...filteredData.map((d) => [
        d.pemda,
        d.akun,
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
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

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
      
      {/* SIDEBAR */}
      {openSidebar && (
        <div style={sidebar}>
          <h3 style={{ padding: "20px" }}>Dashboard</h3>
          <div style={menuItem}>Dashboard</div>
          <div style={menuItem}>Database Inovasi</div>
          <div style={menuItem}>Lomba Inovasi</div>
        </div>
      )}

      {/* MAIN */}
      <div style={{ flex: 1, background: "#f4f6f9" }}>
        
        {/* NAVBAR */}
        <div style={navbar}>
          <span onClick={() => setOpenSidebar(!openSidebar)}>☰</span>
          <h3>Dashboard Indeks Inovasi Daerah</h3>
        </div>

        <div style={{ padding: "20px" }}>
          
          {/* HEADER */}
          <h2>Inovasi Daerah</h2>
          <p style={{ color: "#777" }}>
            Update: {new Date().toLocaleString()}
          </p>

          {/* 🔥 SEARCH ATAS (OVAL) */}
          <div style={searchWrapper}>
            <span style={icon}>🔍</span>
            <input
              placeholder="Cari data..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={searchInput}
            />
          </div>

          {/* CARD */}
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

          {/* FILTER + TABLE */}
          <div style={mainCard}>
            
            {/* HEADER + SEARCH KANAN (OVAL FIX) */}
            <div style={filterHeader}>
              <div>
                <h3>Kabupaten Klaten</h3>
                <p>bapperida IGA</p>
              </div>

              <div style={searchWrapper}>
                <span style={icon}>🔍</span>
                <input
                  placeholder="pencarian"
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
                <option>Inovasi daerah lainnya sesuai dengan urusan pemerintahan yang menjadi kewenangan daerah</option>
                <option>Inovasi pelayanan publik</option>
                <option>inovasi tata kelola pemerintahan daerah</option>
              </select> 

              <select style={input}>
                <option>Jenis Urusan</option>
                <option>pendidikan</option>
                <option>kesehatan</option>
                <option>pekerjaan umum dan penataan ruang</option>
                <option>perumahan rakyat dan kawasan permukiman</option>
                <option>Ketentraman, ketertiban umum, dan perlindungan masyarakat</option>
                <option>sosial</option>
                <option>tenaga kerja</option>
                <option>pemberdayaan perempuan dan perlindungan anak</option>
                <option>pangan</option>
                <option>pertanahan</option>
                <option>lingkungan hidup</option>
                <option>adminitrasi kependududkan dan pencatatan sipil</option>
                <option>pemberdayaan masyarakat dan desa</option>
                <option>pengendalian penduduk dan keluarga berencana</option>
                <option>perhubungan</option>
                <option>komunikasi dan informatika</option>
                <option>koperasi, usaha kecil, dan menengah</option>
                <option>penenaman modal</option>
                <option>kepemudaan dan olahraga</option>
                <option>statistik</option>
                <option>persandian</option>
                <option>kebudayaan</option>
                <option>perpustakaan</option>
                <option>kearsiapan</option>
                <option>kelautan dan perikanan</option>  
                <option>pariwisata</option>
                <option>pertanian</option>
                <option>kehutsnsn</option>
                <option>energi dan sumber daya mineral</option>
                <option>perdagangan</option>
                <option>perindustrian</option>
                <option>transmigrasi</option>
                <option>perencanaan</option>
                <option>keuangan</option>
                <option>kepegawaian</option>
                <option>penddidikan dan pelatihan</option>
                <option>penelitian dan pengembangan</option>
                <option>penunjang lainnya sesuai dengan ketentuan peraturan perundang-undangan</option>
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
                    <th>Nama Pemda</th>
                    <th>Nama Akun</th>
                    <th>Nama Inovasi</th>
                    <th>Tahapan Inovasi</th>
                    <th>Nama Inisiator</th>
                    <th>Koordinat</th>
                    <th>Urusan Pemerintahan Utama</th>
                    <th>Waktu Penerapan Inovasi Daerah</th>
                    <th>Waktu Pengembangan Inovasi Daerah</th>
                    <th>Estimasi Skor Kematangan</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length === 0 ? (
                    <tr>
                      <td colSpan="5">Data kosong</td>
                    </tr>
                  ) : (
                    filteredData.map((item, i) => (
                      <tr key={i}>
                        <td>{item.pemda}</td>
                        <td>{item.akun}</td>
                        <td>{item.inovasi}</td>
                        <td>{item.tahapan}</td>
                        <td>{item.inisiator}</td>
                        <td>{item.koordinat}</td>
                        <td>{item.urusan}</td>
                        <td>{item.penerapan}</td>
                        <td>{item.pengembangan}</td>
                        <td>{item.skor}</td>
                        <td>{item.aksi}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLE ================= */

const sidebar = {
  width: "220px",
  background: "#1e3a5f",
  color: "white",
};

const menuItem = {
  padding: "15px 20px",
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
};

const activeTab = {
  ...tab,
  background: "white",
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
};

const table = {
  width: "100%",
  marginTop: "20px",
};

/* 🔥 SEARCH OVAL FIX */
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

export default Dashboard;