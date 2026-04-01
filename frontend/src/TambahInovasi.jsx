import { useState } from "react";
import axios from "axios";

function TambahInovasi() {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access_token");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/inovasi/create/",
        {
          judul: judul,
          deskripsi: deskripsi,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Data berhasil ditambahkan");
      console.log(response.data);
    } catch (error) {
      console.log(error);
      alert("Gagal kirim data");
    }
  };

  return (
    <div>
      <h1>Tambah Inovasi</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Judul inovasi"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Deskripsi inovasi"
          value={deskripsi}
          onChange={(e) => setDeskripsi(e.target.value)}
        />

        <br /><br />

        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}

export default TambahInovasi;