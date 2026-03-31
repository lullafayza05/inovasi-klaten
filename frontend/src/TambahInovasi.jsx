import { useState } from "react";

function TambahInovasi() {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch(
      "http://127.0.0.1:8000/api/inovasi/create/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          judul,
          deskripsi,
        }),
      }
    );

    const data = await response.json();
    console.log(data);

    alert("Data berhasil ditambahkan");
  };

  return (
    <div>
      <h2>Tambah Inovasi</h2>

      <input
        placeholder="Judul inovasi"
        onChange={(e) => setJudul(e.target.value)}
      />

      <textarea
        placeholder="Deskripsi"
        onChange={(e) => setDeskripsi(e.target.value)}
      />

      <button onClick={handleSubmit}>Simpan</button>
    </div>
  );
}

export default TambahInovasi;