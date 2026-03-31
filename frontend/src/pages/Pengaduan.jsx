import { useState } from "react";
import { createPengaduan } from "../services/api";

function Pengaduan() {
  const [nama, setNama] = useState("");
  const [isi, setIsi] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nama: nama,
      isi_pengaduan: isi
    };

    const result = await createPengaduan(data);
    console.log(result);

    alert("Pengaduan berhasil dikirim");
  };

  return (
    <div>
      <h1>Form Pengaduan</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />

        <textarea
          placeholder="Isi Pengaduan"
          value={isi}
          onChange={(e) => setIsi(e.target.value)}
        />

        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

export default Pengaduan;