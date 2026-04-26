import { useState, useEffect } from "react";

function DaftarLomba() {
  const [form, setForm] = useState({
    id: null,
    nama: "",
    peserta: "",
  });

  const [data, setData] = useState([]);

  // LOAD DATA
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("lomba")) || [];
    setData(saved);
  }, []);

  // SIMPAN KE LOCALSTORAGE
  const saveData = (newData) => {
    setData(newData);
    localStorage.setItem("lomba", JSON.stringify(newData));
  };

  // TAMBAH / UPDATE
  const handleSubmit = () => {
    if (!form.nama || !form.peserta)
      return alert("Isi semua data!");

    if (form.id) {
      // EDIT
      const updated = data.map((item) =>
        item.id === form.id ? form : item
      );
      saveData(updated);
      alert("Data berhasil diupdate!");
    } else {
      // TAMBAH
      const newItem = {
        id: Date.now(),
        nama: form.nama,
        peserta: form.peserta,
        nilai: 0,
        status: "Terdaftar",
      };

      saveData([...data, newItem]);
      alert("Berhasil daftar!");
    }

    setForm({ id: null, nama: "", peserta: "" });
  };

  // EDIT
  const handleEdit = (item) => {
    setForm(item);
  };

  // HAPUS
  const handleDelete = (id) => {
    const filtered = data.filter((item) => item.id !== id);
    saveData(filtered);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Pendaftaran Krenova</h2>

      {/* FORM */}
      <input
        placeholder="Nama Inovasi"
        value={form.nama}
        onChange={(e) =>
          setForm({ ...form, nama: e.target.value })
        }
      />

      <br /><br />

      <input
        placeholder="Nama Peserta"
        value={form.peserta}
        onChange={(e) =>
          setForm({ ...form, peserta: e.target.value })
        }
      />

      <br /><br />

      <button onClick={handleSubmit}>
        {form.id ? "Update" : "Daftar"}
      </button>

      {/* LIST */}
      <h3 style={{ marginTop: "30px" }}>Data Pendaftaran</h3>

      {data.length === 0 ? (
        <p>Belum ada pendaftar</p>
      ) : (
        data.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <b>{item.nama}</b> - {item.peserta}

            <div style={{ marginTop: "10px" }}>
              <button onClick={() => handleEdit(item)}>
                Edit
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                style={{ marginLeft: "10px" }}
              >
                Hapus
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default DaftarLomba;