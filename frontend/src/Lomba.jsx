import { useState } from "react";

function Lomba() {
  const [data, setData] = useState([
    { id: 1, nama: "Smart City", peserta: "Nyakk", nilai: 80 },
    { id: 2, nama: "E-Gov", peserta: "Helii", nilai: 70 },
  ]);

  const [form, setForm] = useState({
    id: null,
    nama: "",
    peserta: "",
    nilai: "",
  });

  const [search, setSearch] = useState("");

  // 🔍 SEARCH
  const filteredData = data.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // 🏆 RANKING
  const rankedData = [...filteredData]
    .sort((a, b) => b.nilai - a.nilai)
    .map((item, index) => ({
      ...item,
      ranking: index + 1,
    }));

  // ➕ TAMBAH / EDIT
  const handleSubmit = () => {
    if (!form.nama || !form.peserta || !form.nilai) return;

    if (form.id) {
      setData(data.map((d) => (d.id === form.id ? form : d)));
    } else {
      setData([
        ...data,
        { ...form, id: Date.now(), nilai: Number(form.nilai) },
      ]);
    }

    setForm({ id: null, nama: "", peserta: "", nilai: "" });
  };

  const handleEdit = (item) => setForm(item);

  const handleDelete = (id) =>
    setData(data.filter((d) => d.id !== id));

  const handleDownload = () => {
    const csv = [
      ["Ranking", "Nama Inovasi", "Peserta", "Nilai"],
      ...rankedData.map((d) => [
        d.ranking,
        d.nama,
        d.peserta,
        d.nilai,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "lomba_inovasi.csv";
    a.click();
  };

  return (
    <div>
      <h2>Lomba Inovasi</h2>

      {/* FORM */}
      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Nama Inovasi"
          value={form.nama}
          onChange={(e) =>
            setForm({ ...form, nama: e.target.value })
          }
        />

        <input
          placeholder="Peserta"
          value={form.peserta}
          onChange={(e) =>
            setForm({ ...form, peserta: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Nilai"
          value={form.nilai}
          onChange={(e) =>
            setForm({ ...form, nilai: e.target.value })
          }
        />

        <button onClick={handleSubmit}>
          {form.id ? "Update" : "Tambah"}
        </button>
      </div>

      {/* SEARCH */}
      <input
        placeholder="Cari semua data..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />
      <button onClick={handleDownload}>Download CSV</button>

      {/* TABLE */}
      <table border="1" style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Nama</th>
            <th>Peserta</th>
            <th>Nilai</th>
            <th>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {rankedData.length === 0 ? (
            <tr>
              <td colSpan="5">Data kosong</td>
            </tr>
          ) : (
            rankedData.map((item) => (
              <tr key={item.id}>
                <td>{item.ranking}</td>
                <td>{item.nama}</td>
                <td>{item.peserta}</td>
                <td>{item.nilai}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(item.id)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Lomba;