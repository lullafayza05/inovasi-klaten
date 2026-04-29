import { useState } from "react";
import Lomba from "./Lomba";
import Database from "./Database";

function Dashboard() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [page, setPage] = useState("dashboard");

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* SIDEBAR */}
      {openSidebar && (
        <div style={sidebar}>
          <h3 style={{ padding: "20px" }}>Bar Menu</h3>

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

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, background: "#f4f6f9" }}>
        <div style={navbar}>
          <span
            onClick={() => setOpenSidebar(!openSidebar)}
            style={{ cursor: "pointer", fontSize: "22px" }}
          >
            ☰
          </span>
          <h3>Dashboard Indeks Inovasi Daerah</h3>
        </div>

        <div style={{ padding: "20px" }}>
          {/* DASHBOARD */}
          {page === "dashboard" && (
            <>
              <h2>Tambah Inovasi Daerah</h2>
              <p style={{ color: "#777" }}>
                Tambahkan data inovasi daerah baru
              </p>

              <div style={formCard}>
                <div style={formGroup}>
                  <label>Nama Pemda*</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama pemda"
                    style={inputStyle}
                  />
                </div>

                <div style={formGroup}>
                  <label>Nama Inovasi*</label>
                  <input
                    type="text"
                    placeholder="Nama inovasi daerah"
                    style={inputStyle}
                  />
                </div>

                <div style={formGroup}>
                  <label>Tahapan Inovasi*</label>
                  <div style={radioRow}>
                    <label>
                      <input type="radio" name="tahapan" /> Inisiatif
                    </label>
                    <label>
                      <input type="radio" name="tahapan" /> Uji Coba
                    </label>
                    <label>
                      <input type="radio" name="tahapan" /> Penerapan
                    </label>
                  </div>
                </div>

                <div style={formGroup}>
                  <label>Inisiator Inovasi Daerah*</label>
                  <div style={radioRow}>
                    <label>
                      <input type="radio" name="inisiator" /> Kepala Daerah
                    </label>
                    <label>
                      <input type="radio" name="inisiator" /> Anggota DPRD
                    </label>
                    <label>
                      <input type="radio" name="inisiator" /> OPD
                    </label>
                    <label>
                      <input type="radio" name="inisiator" /> ASN
                    </label>
                    <label>
                      <input type="radio" name="inisiator" /> Masyarakat
                    </label>
                  </div>
                </div>

                <div style={formGroup}>
                  <label>Jenis Inovasi*</label>
                  <div style={radioRow}>
                    <label>
                      <input type="radio" name="jenis" /> Digital
                    </label>
                    <label>
                      <input type="radio" name="jenis" /> Non Digital
                    </label>
                  </div>
                </div>

                <div style={formGroup}>
                  <label>Bentuk Inovasi Daerah*</label>
                  <select style={inputStyle}>
                    <option>Pilih Bentuk Inovasi</option>
                    <option>Inovasi Tata Kelola Pemerintahan Daerah</option>
                    <option>Inovasi Pelayanan Publik</option>
                    <option>Inovasi Daerah Lainnya</option>
                  </select>
                </div>

                <div style={formGroup}>
                  <label>Tematik*</label>
                  <select style={inputStyle}>
                    <option>Pilih Tematik</option>
                    <option>Kemudahan Investasi</option>
                    <option>Penanggulangan Kemiskinan</option>
                    <option>Digitalisasi Pelayanan</option>
                  </select>
                </div>

                <div style={formGroup}>
                  <label>Urusan Pemerintahan Utama*</label>
                  <select style={inputStyle}>
                    <option>Pilih Urusan</option>
                    <option>Pendidikan</option>
                    <option>Kesehatan</option>
                    <option>Perhubungan</option>
                    <option>Komunikasi dan Informatika</option>
                  </select>
                </div>

                <div style={formGroup}>
                  <label>Waktu Uji Coba Inovasi Daerah*</label>
                  <input type="date" style={inputStyle} />
                </div>

                <div style={formGroup}>
                  <label>Waktu Penerapan Inovasi Daerah*</label>
                  <input type="date" style={inputStyle} />
                </div>

                <div style={formGroup}>
                  <label>Rancang Bangun (Minimal 300 kata)*</label>
                  <textarea
                    rows="6"
                    placeholder="Masukkan penjelasan rancang bangun inovasi..."
                    style={textareaStyle}
                  ></textarea>
                </div>

                <div style={formGroup}>
                  <label>Tujuan Inovasi Daerah (Minimal 300 kata)</label>
                  <textarea
                    rows="6"
                    placeholder="Masukkan tujuan inovasi daerah..."
                    style={textareaStyle}
                  ></textarea>
                </div>

                <div style={formGroup}>
                  <label>Anggaran (Jika diperlukan)</label>
                  <input type="file" style={fileInputStyle} />
                </div>

                <div style={formGroup}>
                  <label>Profil Bisnis (.pdf)</label>
                  <input
                    type="file"
                    accept=".pdf"
                    style={fileInputStyle}
                  />
                </div>

                <div style={formGroup}>
                  <label>Dokumen Pendukung</label>
                  <input type="file" style={fileInputStyle} />
                </div>

                <button style={submitBtn}>Simpan Data</button>
              </div>
            </>
          )}

          {/* DATABASE */}
          {page === "database" && <Database />}

          {/* LOMBA */}
          {page === "lomba" && <Lomba />}
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
  cursor: "pointer",
  transition: "0.3s",
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

const formCard = {
  background: "white",
  padding: "30px",
  borderRadius: "15px",
  marginTop: "20px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const formGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
  width: "100%",
};

const textareaStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
  resize: "vertical",
  width: "100%",
};

const fileInputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  background: "white",
  fontSize: "14px",
};

const radioRow = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
};

const submitBtn = {
  marginTop: "25px",
  padding: "14px",
  width: "100%",
  background: "#0b2c5f",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

export default Dashboard;