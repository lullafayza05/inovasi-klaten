import { useState, useEffect } from "react";

function DaftarLomba() {
  const [form, setForm] = useState({
    id: null,
    nama: "",
    peserta: "",
  });

  const [data, setData] = useState([]);
  const isLogin = !!localStorage.getItem("token"); // 🔥 cek login

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("lomba")) || [];
    setData(saved);
  }, []);

  const saveData = (newData) => {
    setData(newData);
    localStorage.setItem("lomba", JSON.stringify(newData));
  };

  const handleSubmit = () => {
    if (!isLogin) return alert("Harus login dulu!");

    if (!form.nama || !form.peserta)
      return alert("Isi semua data!");

    if (form.id) {
      const updated = data.map((item) =>
        item.id === form.id ? form : item
      );
      saveData(updated);
      alert("Data berhasil diupdate!");
    } else {
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

  const handleEdit = (item) => {
    if (!isLogin) return alert("Login dulu!");
    setForm(item);
  };

  const handleDelete = (id) => {
    if (!isLogin) return alert("Login dulu!");
    const filtered = data.filter((item) => item.id !== id);
    saveData(filtered);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Pendaftaran Krenova</h2>

      {/* FORM */}
      <div className="form-container">
        <div className="form-card">
          {!isLogin && <p style={{color:"red"}}>Login dulu untuk daftar</p>}

          <input
            className="form-input"
            placeholder="Nama Inovasi"
            value={form.nama}
            disabled={!isLogin}
            onChange={(e) =>
              setForm({ ...form, nama: e.target.value })
            }
          />

          <input
            className="form-input"
            placeholder="Nama Peserta"
            value={form.peserta}
            disabled={!isLogin}
            onChange={(e) =>
              setForm({ ...form, peserta: e.target.value })
            }
          />

          <button
            className="form-button"
            onClick={handleSubmit}
            disabled={!isLogin}
          >
            {form.id ? "Update" : "Daftar"}
          </button>
        </div>
      </div>

      {/* LIST */}
      <h3 style={{ marginTop: "30px" }}>Data Pendaftaran</h3>

      {data.map((item) => (
        <div key={item.id} className="list-card">
          <b>{item.nama}</b> - {item.peserta}

          <div style={{ marginTop: "10px" }}>
            <button
              className="btn-small btn-edit"
              onClick={() => handleEdit(item)}
            >
              Edit
            </button>

            <button
              className="btn-small btn-delete"
              onClick={() => handleDelete(item.id)}
            >
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DaftarLomba;