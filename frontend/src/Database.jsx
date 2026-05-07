import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

function Database({
  setDataInovasi,
  dataInovasi,
  setPage,
}) {
  /* ================= STATE ================= */

  const [username] = useState("bapperidaiga");
  const [formData, setFormData] = useState({
  namaInovasi: "",
  tahapan: "",
  inisiator: "",
  klasifikasi: "",
  jenis: "",
  bentuk: "",
  astaCita: "",
  urusan: "",
  waktuUji: "",
  waktuPenerapan: "",
  perkembangan: "",
});
  const [namaInisiator, setNamaInisiator] =
    useState("");

  const [koordinat, setKoordinat] =
    useState("");

  const [rancangBangun, setRancangBangun] =
    useState("");

  const [tujuanInovasi, setTujuanInovasi] =
    useState("");

  const [manfaat, setManfaat] = useState("");

  const [hasilInovasi, setHasilInovasi] =
    useState("");

  /* ================= QUILL ================= */

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  /* ================= WORD COUNTER ================= */
const countWords = (html) => {
  if (!html) return 0;

  const text = html
    .replace(/<(.|\n)*?>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (text === "") return 0;

  return text.split(" ").length;
};

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = () => {
  if (
    !formData.namaInovasi ||
    !formData.tahapan ||
    !formData.inisiator ||
    !namaInisiator ||
    !koordinat ||
    !formData.klasifikasi ||
    !formData.jenis ||
    !formData.bentuk ||
    !formData.astaCita ||
    !formData.urusan ||
    !formData.waktuUji ||
    !formData.waktuPenerapan ||
    !formData.perkembangan ||
    countWords(rancangBangun) < 300 ||
    !tujuanInovasi ||
    !manfaat ||
    !hasilInovasi
  ) {
    alert("Semua data wajib diisi!");
    return;
  }

  const dataBaru = {
    id: Date.now(),
    namaInovasi: formData.namaInovasi,
    namaAkun: username,
    tahapan: formData.tahapan,
    inisiator: formData.inisiator,
    klasifikasi: formData.klasifikasi,
    jenis: formData.jenis,
    bentuk: formData.bentuk,
    astaCita: formData.astaCita,
    urusan: formData.urusan,
    waktuUji: formData.waktuUji,
    waktuPenerapan:
      formData.waktuPenerapan,
    perkembangan:
      formData.perkembangan,
    koordinat: koordinat,
  };

  setDataInovasi([
    ...dataInovasi,
    dataBaru,
  ]);

  alert("Data berhasil disimpan!");

  setPage("listinovasi");
};
  return (
    <div style={pageWrapper}>
      <div style={container}>
        {/* HEADER */}
        <div style={headerBox}>
          <h1 style={{ margin: 0 }}>
            Inovasi Pemerintah Daerah
          </h1>

          <p
            style={{
              color: "#666",
              marginTop: "8px",
            }}
          >
            Dashboard | Inovasi Pemerintah
            Daerah
          </p>
        </div>

        {/* ALERT */}
        <div style={alertBox}>
          <b>Harap diperhatikan!</b>

          <p style={{ marginTop: "8px" }}>
            Lomba Inovasi Daerah ini
            digunakan hanya untuk
            penyelenggaraan Penilaian
            inovasi di Tingkat Daerah
            masing-masing.
          </p>
        </div>

        {/* FORM */}
        <div style={formCard}>
          <h2 style={{ marginBottom: "30px" }}>
            Tambah Inovasi Pemerintah
            Daerah
          </h2>

          {/* NAMA PEMDA */}
          <div style={formGroup}>
            <label style={label}>
              Nama Pemda
            </label>

            <p style={textView}>
              Kabupaten Klaten
            </p>
          </div>

          {/* NAMA INOVASI */}
          <div style={formGroup}>
            <label style={label}>
              Nama Inovasi*
            </label>

            <input
  type="text"
  name="namaInovasi"
  placeholder="Masukkan nama inovasi"
  style={inputStyle}
  value={formData.namaInovasi}
  onChange={handleChange}
/>
          </div>

          {/* NAMA AKUN */}
          <div style={formGroup}>
            <label style={label}>
              Nama Akun
            </label>

            <p style={textView}>
              {username}
            </p>
          </div>

          {/* GRID */}
          <div style={grid2}>
            {/* TAHAPAN */}
            <div style={formGroup}>
              <label style={label}>
                Tahapan Inovasi*
              </label>
<div style={radioGrid}>
  <label style={radioCard}>
    <input
      type="radio"
      name="tahapan"
      value="Inisiatif"
      onChange={handleChange}
    />
    Inisiatif
  </label>

  <label style={radioCard}>
    <input
      type="radio"
      name="tahapan"
      value="Uji Coba"
      onChange={handleChange}
    />
    Uji Coba
  </label>

  <label style={radioCard}>
    <input
      type="radio"
      name="tahapan"
      value="Penerapan"
      onChange={handleChange}
    />
    Penerapan
  </label>
</div>
            </div>

            {/* INISIATOR */}
            <div style={formGroup}>
              <label style={label}>
                Inisiator Inovasi Daerah*
              </label>

              <div style={radioGrid}>
                <label style={radioCard}>
  <input
    type="radio"
    name="inisiator"
    value="Kepala Daerah"
    onChange={handleChange}
  />
  Kepala Daerah
</label>

                <label style={radioCard}>
  <input
    type="radio"
    name="inisiator"
    value="DPRD"
    onChange={handleChange}
  />
  DPRD
</label>

               <label style={radioCard}>
  <input
    type="radio"
    name="inisiator"
    value="OPD"
    onChange={handleChange}
  />
  OPD
</label>

                <label style={radioCard}>
  <input
    type="radio"
    name="inisiator"
    value="ASN"
    onChange={handleChange}
  />
  ASN
</label>


                <label style={radioCard}>
  <input
    type="radio"
    name="inisiator"
    value="Masyarakat"
    onChange={handleChange}
  />
  Masyarakat
</label>
              </div>
            </div>
          </div>

          {/* GRID */}
          <div style={grid2}>
            {/* NAMA INISIATOR */}
            <div style={formGroup}>
              <label style={label}>
                Nama Inisiator*
              </label>

              <input
                type="text"
                placeholder="Masukkan nama inisiator"
                value={namaInisiator}
                onChange={(e) =>
                  setNamaInisiator(
                    e.target.value
                  )
                }
                style={inputStyle}
              />
            </div>

            {/* KOORDINAT */}
            <div style={formGroup}>
              <label style={label}>
                Koordinat*
              </label>

              <input
                type="text"
                placeholder="-7.7056, 110.6061"
                value={koordinat}
                onChange={(e) =>
                  setKoordinat(
                    e.target.value
                  )
                }
                style={inputStyle}
              />
            </div>
          </div>

        {/* GRID */}
<div style={grid2}>
  {/* KLASIFIKASI */}
  <div style={formGroup}>
    <label style={label}>
      Klasifikasi Inovasi*
    </label>

    <div style={radioGrid}>
  <label style={radioCard}>
    <input
      type="radio"
      name="klasifikasi"
      value="Inovasi Perangkat Daerah"
      onChange={handleChange}
    />
    Inovasi Perangkat Daerah
  </label>

  <label style={radioCard}>
    <input
      type="radio"
      name="klasifikasi"
      value="Inovasi Desa dan Kelurahan"
      onChange={handleChange}
    />
    Inovasi Desa dan Kelurahan
  </label>

  <label style={radioCard}>
    <input
      type="radio"
      name="klasifikasi"
      value="Inovasi Masyarakat"
      onChange={handleChange}
    />
    Inovasi Masyarakat
  </label>
</div>
  </div>

  {/* JENIS */}
  <div style={formGroup}>
    <label style={label}>
      Jenis Inovasi*
    </label>

    <div style={radioGrid}>
      <label style={radioCard}>
        <input
  type="radio"
  name="jenis"
  value="Digital"
  onChange={handleChange}
/>
        Digital
      </label>

      <label style={radioCard}>
        <input
  type="radio"
  name="jenis"
  value="Non Digital"
  onChange={handleChange}
/>
        Non Digital
      </label>
    </div>
  </div>
</div>

{/* GRID */}
<div style={grid2}>

   {/* BENTUK INOVASI */}
  <div style={formGroup}>
    <label style={label}>
      Bentuk Inovasi Daerah*
    </label>

   <select
  name="bentuk"
  value={formData.bentuk}
  onChange={handleChange}
  style={inputStyle}
>
                    <option>Silahkan Pilih</option>

              <option>
                Inovasi Daerah lainnya sesuai dengan Urusan Pemerintahan yang menjadi kewenangan Daerah
              </option>

              <option>
                Inovasi Pelayanan Publik
              </option>

              <option>
                Inovasi Tata kelola pemerintahan daerah
              </option>
    </select>
  </div>

  {/* ASTA CITA */}
  <div style={formGroup}>
    <label style={label}>
      Asta Cita*
    </label>

  <select
  name="astaCita"
  value={formData.astaCita}
  onChange={handleChange}
  style={inputStyle}
>
                   <option>Silahkan Pilih</option>

              <option>Memperkokoh ideologi Pancasila, demokrasi, dan hak asasi manusia (HAM)</option>

              <option>Memantapkan sistem pertahanan keamanan negara dan mendorong kemandirian bangsa melalui swasembada pangan, energi, air, ekonomi kreatif, ekonomi hijau, dan ekonomi biru</option>
              
              <option>Meningkatkan lapangan kerja yang berkualitas, mendorong kewirausahaan, mengembangkan industri kreatif, dan melanjutkan pengembangan infrastruktur</option>

              <option>Memperkuat pembangunan sumber daya manusia (SDM) , sains teknologi, pendidikan, kesehatan , prestasi, olahraga, kesetaraan gender, serta penguatan perempuan, pemuda, dan penyandang disabilitas</option>

              <option>Melanjutkan hilirisasi dan industrialisasi untuk meningkatkan nilai tambah di dalam negeri</option>
            
              <option>Membangun dari desa dan dari bawah untuk pemerataan ekonomi dan pemberantasan kemiskinan</option>

              <option>Memperkuat reformasi politik, hukum, dan birokrasi derta memperkuat pencegahan dan pemberantasan korupsi dan narkoba</option>

              <option>Memperkuat penyelarasab kehidupan yang harmonis dengan lingkungan alam, dan budaya serta peningkatan toleransi antarumat beragamauntuk mencapai masyarakat yang adil dan makmur</option>     
    </select>
  </div>

  {/* URUSAN */}
  <div style={formGroup}>
    <label style={label}>
      Urusan Pemerintahan
    </label>

    <select
  name="urusan"
  value={formData.urusan}
  onChange={handleChange}
  style={inputStyle}
>
      <option>
        Pilih...
      </option>

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
  </div>
</div>

{/* GRID */}
<div style={grid2}>
  {/* UJI COBA */}
  <div style={formGroup}>
    <label style={label}>
      Waktu Uji Coba Inovasi
      Daerah*
    </label>

    <input
  type="date"
  name="waktuUji"
  value={formData.waktuUji}
  onChange={handleChange}
  style={inputStyle}
/>
  </div>

  {/* PENERAPAN */}
<div style={formGroup}>
  <label style={label}>
    Waktu Penerapan Inovasi
    Daerah*
  </label>

  <input
    type="date"
    name="waktuPenerapan"
    value={formData.waktuPenerapan}
    onChange={handleChange}
    style={inputStyle}
  />
</div>
</div>

{/* PERKEMBANGAN */}
<div style={formGroup}>
  <label style={label}>
    Apakah sudah ada
    perkembangan inovasi
    tersebut?
  </label>

  <div style={radioGrid}>
  <label style={radioCard}>
    <input
      type="radio"
      name="perkembangan"
      value="Tidak"
      onChange={handleChange}
    />
    Tidak
  </label>

  <label style={radioCard}>
    <input
      type="radio"
      name="perkembangan"
      value="Ya"
      onChange={handleChange}
    />
    Ya
  </label>
</div>
</div>


          {/* RANCANG BANGUN */}
          <div style={formGroup}>
            <label style={label}>
              Rancang Bangun (Minimal
              300 kata)
            </label>

            <ReactQuill
              theme="snow"
              value={rancangBangun}
              onChange={setRancangBangun}
              modules={modules}
              placeholder="Masukkan rancang bangun inovasi..."
              style={quillStyle}
            />

            <div
  style={{
    ...wordCounter,
    color:
      countWords(rancangBangun) >= 300
        ? "green"
        : "red",
  }}
>
  {countWords(rancangBangun)} / 300 kata
</div>
          </div>

          {/* TUJUAN */}
          <div style={formGroup}>
            <label style={label}>
              Tujuan inovasi daerah
            </label>

            <ReactQuill
              theme="snow"
              value={tujuanInovasi}
              onChange={setTujuanInovasi}
              modules={modules}
              placeholder="Masukkan tujuan inovasi..."
              style={quillStyle}
            />

            <div style={wordCounter}>
              {countWords(
                tujuanInovasi
              )}{" "}
              words
            </div>
          </div>

          {/* MANFAAT */}
          <div style={formGroup}>
            <label style={label}>
              Manfaat yang diperoleh
            </label>

            <ReactQuill
              theme="snow"
              value={manfaat}
              onChange={setManfaat}
              modules={modules}
              placeholder="Masukkan manfaat..."
              style={quillStyle}
            />

            <div style={wordCounter}>
              {countWords(manfaat)} words
            </div>
          </div>

          {/* HASIL */}
          <div style={formGroup}>
            <label style={label}>
              Hasil Inovasi
            </label>

            <ReactQuill
              theme="snow"
              value={hasilInovasi}
              onChange={setHasilInovasi}
              modules={modules}
              placeholder="Masukkan hasil inovasi..."
              style={quillStyle}
            />

            <div style={wordCounter}>
              {countWords(
                hasilInovasi
              )}{" "}
              words
            </div>
          </div>

          {/* FILE */}
          <div style={grid2}>
            <div style={uploadBox}>
              <label style={label}>
                Anggaran (Jika
                diperlukan)
              </label>

              <input
                type="file"
                style={fileInput}
              />

              <p style={fileText}>
                *) Dokumen PDF,
                Maksimal 2MB
              </p>
            </div>

            <div style={uploadBox}>
              <label style={label}>
                Profil Bisnis (.ppt)
              </label>

              <input
                type="file"
                style={fileInput}
              />

              <p style={fileText}>
                *) Dokumen PDF,
                Maksimal 2MB
              </p>
            </div>
          </div>

          <div style={grid2}>
  {/* DOKUMEN HAKI */}
  <div style={uploadBox}>
    <label style={label}>
      Dokumen HAKI
    </label>

    <input
      type="file"
      style={fileInput}
    />

    <p style={fileText}>
      *) Dokumen PDF,
      Maksimal 2MB
    </p>
  </div>

  {/* PENGHARGAAN */}
  <div style={uploadBox}>
    <label style={label}>
      Penghargaan
    </label>

    <input
      type="file"
      style={fileInput}
    />

    <p style={fileText}>
      *) Dokumen PDF,
      Maksimal 2MB
    </p>
  </div>
</div>

          {/* BUTTON */}
         <button
  onClick={handleSubmit}
  style={{
    ...submitBtn,
    background:
      countWords(rancangBangun) >= 300
        ? "#0b2c5f"
        : "#9ca3af",
    cursor:
      countWords(rancangBangun) >= 300
        ? "pointer"
        : "not-allowed",
  }}
  disabled={
    countWords(rancangBangun) < 300
  }
>
  Simpan Data
</button>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLE ================= */

const pageWrapper = {
  background: "#f3f4f6",
  minHeight: "100vh",
  padding: "30px 0",
};

const container = {
  width: "90%",
  maxWidth: "1200px",
  margin: "0 auto",
};

const headerBox = {
  marginBottom: "20px",
};

const alertBox = {
  background: "#f8b4b4",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "25px",
};

const formCard = {
  background: "white",
  padding: "35px",
  borderRadius: "18px",
  boxShadow:
    "0 2px 10px rgba(0,0,0,0.08)",
};

const formGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginBottom: "30px",
};

const grid2 = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  marginBottom: "20px",
};

const label = {
  fontWeight: "600",
  fontSize: "15px",
};

const textView = {
  margin: 0,
  fontSize: "16px",
  color: "#111827",
};

const inputStyle = {
  padding: "14px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  fontSize: "14px",
  width: "100%",
  outline: "none",
};

const quillStyle = {
  background: "white",
  borderRadius: "12px",
};

const wordCounter = {
  textAlign: "right",
  fontSize: "14px",
  color: "#666",
};

const radioGrid = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
};

const radioCard = {
  border: "1px solid #d1d5db",
  padding: "14px 18px",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
};

const uploadBox = {
  background: "#f5f5f5",
  padding: "20px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const fileInput = {
  fontSize: "14px",
};

const fileText = {
  margin: 0,
  fontSize: "13px",
  color: "#555",
};

const submitBtn = {
  width: "100%",
  padding: "16px",
  border: "none",
  borderRadius: "12px",
  background: "#0b2c5f",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "20px",
};

export default Database;