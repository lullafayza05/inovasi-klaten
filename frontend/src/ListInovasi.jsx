import React, { useState } from "react";

function ListInovasi({ data, setPage }) {
  const [search, setSearch] = useState("");
  const [filterTahapan, setFilterTahapan] = useState("Semua");

  /* FILTER DATA */
  const filteredData = (data || []).filter((item) => {
    const cocokSearch =
      item.namaInovasi
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      item.urusan
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const cocokTahapan =
      filterTahapan === "Semua"
        ? true
        : item.tahapan === filterTahapan;

    return cocokSearch && cocokTahapan;
  });

  return (
    <div style={page}>
      {/* ALERT */}
      <div style={alertBox}>
        <b>Harap diperhatikan!</b>
        <p style={{ marginTop: 10 }}>
          Lomba Inovasi Daerah ini digunakan hanya untuk penyelenggaraan Penilaian inovasi di Tingkat Daerah masing-masing.
        </p>
      </div>

      {/* DOWNLOAD */}
      <div style={{ marginBottom: 30 }}>
        <h3 style={title}>Unduh Data</h3>
        <button style={downloadBtn}>DOWNLOAD</button>
      </div>

      {/* FILTER */}
      <div style={filterBox}>
        <button
          style={filterTahapan === "Semua" ? activeTab : tabBtn}
          onClick={() => setFilterTahapan("Semua")}
        >
          Semua
        </button>

        <button
          style={filterTahapan === "Inisiatif" ? activeTab : tabBtn}
          onClick={() => setFilterTahapan("Inisiatif")}
        >
          Inisiatif
        </button>

        <button
          style={filterTahapan === "Uji Coba" ? activeTab : tabBtn}
          onClick={() => setFilterTahapan("Uji Coba")}
        >
          Uji Coba
        </button>

        <button
          style={filterTahapan === "Penerapan" ? activeTab : tabBtn}
          onClick={() => setFilterTahapan("Penerapan")}
        >
          Penerapan
        </button>
      </div>

      {/* TABLE CARD */}
      <div style={card}>
        {/* HEADER */}
        <div style={topBar}>
          <div>
            <h2 style={{ margin: 0 }}>Kabupaten Klaten</h2>
            <h3 style={{ marginTop: 5 }}>bapperidaiga</h3>
          </div>

          <div style={rightTop}>
            <input
              type="text"
              placeholder="Pencarian..."
              style={searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button style={addBtn} onClick={() => setPage("database")}>
              Tambah Inovasi Pemerintah Daerah
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div style={{ overflowX: "auto" }}>
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>#</th>
                <th style={th}>Nama Inovasi</th>
                <th style={th}>Nama Akun</th>
                <th style={th}>Tahapan</th>
                <th style={th}>Koordinat</th>
                <th style={th}>Urusan</th>
                <th style={th}>Waktu Uji Coba</th>
                <th style={th}>Waktu Penerapan</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={index}>
                    <td style={td}>{index + 1}</td>
                    <td style={td}>{item.namaInovasi}</td>
                    <td style={td}>{item.namaAkun}</td>
                    <td style={td}>{item.tahapan}</td>
                    <td style={td}>{item.koordinat}</td>
                    <td style={td}>{item.urusan}</td>
                    <td style={td}>{item.waktuUji}</td>
                    <td style={td}>{item.waktuPenerapan}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center", padding: "30px" }}>
                    Belum ada data inovasi
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div style={pagination}>
          <button style={pageBtn}>1</button>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLE ================= */

const page = {
  padding: "30px",
  background: "#f3f4f6",
  minHeight: "100vh",
};

const alertBox = {
  background: "#ea7d7d",
  padding: "25px",
  borderRadius: "15px",
  marginBottom: "30px",
  color: "black",
};

const title = {
  color: "#9ca3af",
  marginBottom: "20px",
};

const downloadBtn = {
  border: "1px solid #4f46e5",
  color: "#4f46e5",
  background: "white",
  borderRadius: "30px",
  padding: "14px 25px",
  fontWeight: "bold",
  cursor: "pointer",
};

const filterBox = {
  display: "flex",
  gap: "10px",
  marginBottom: "40px",
  flexWrap: "wrap",
};

const activeTab = {
  padding: "14px 25px",
  border: "none",
  borderRadius: "10px",
  background: "#1e3a8a",
  color: "white",
  cursor: "pointer",
  fontWeight: "600",
};

const tabBtn = {
  padding: "14px 25px",
  border: "none",
  borderRadius: "10px",
  background: "#e5e7eb",
  cursor: "pointer",
};

const card = {
  background: "white",
  borderRadius: "20px",
  padding: "25px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
};

const topBar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "30px",
  flexWrap: "wrap",
  gap: "20px",
};

const rightTop = {
  display: "flex",
  gap: "15px",
  flexWrap: "wrap",
};

const searchInput = {
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  width: "250px",
};

const addBtn = {
  background: "#163b82",
  color: "white",
  border: "none",
  padding: "14px 25px",
  borderRadius: "30px",
  fontWeight: "bold",
  cursor: "pointer",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
};

const th = {
  textAlign: "left",
  padding: "18px",
  borderBottom: "1px solid #d1d5db",
  background: "#f9fafb",
};

const td = {
  padding: "18px",
  borderBottom: "1px solid #e5e7eb",
  verticalAlign: "top",
};

const pagination = {
  marginTop: "30px",
  display: "flex",
  gap: "10px",
};

const pageBtn = {
  width: "40px",
  height: "40px",
  border: "none",
  background: "#1e3a8a",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
};

export default ListInovasi;