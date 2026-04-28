import { useState, useEffect } from "react";

function DaftarMagang() {
  const [form, setForm] = useState({
    id: null,
    nama: "",
    email: "",
    kampus: "",
    posisi: "",
  });

  const [data, setData] = useState([]);

  const MAX_KUOTA = 5;

  const isLogin = !!localStorage.getItem("token");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("magang")) || [];
    setData(saved);
  }, []);

  const saveData = (newData) => {
    setData(newData);
    localStorage.setItem("magang", JSON.stringify(newData));
  };

  const handleSubmit = () => {
    if (!isLogin) {
      alert("Harus login dulu!");
      return;
    }

    if (!form.nama || !form.email || !form.kampus || !form.posisi) {
      alert("Isi semua data!");
      return;
    }

    if (form.id) {
      const updated = data.map((item) =>
        item.id === form.id ? form : item
      );
      saveData(updated);
      alert("Data berhasil diupdate!");
    } else {
      if (data.length >= MAX_KUOTA) {
        alert("Kuota penuh!");
        return;
      }

      const newItem = {
        id: Date.now(),
        ...form,
        status: "Menunggu",
      };

      saveData([...data, newItem]);
      alert("Berhasil daftar!");
    }

    setForm({
      id: null,
      nama: "",
      email: "",
      kampus: "",
      posisi: "",
    });
  };

  const handleEdit = (item) => {
    if (!isLogin) return alert("Login dulu!");
    setForm(item);
  };

  const handleDelete = (id) => {
    if (!isLogin) return alert("Login dulu!");
    saveData(data.filter((item) => item.id !== id));
  };

  const isPenuh = data.length >= MAX_KUOTA;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Pendaftaran Magang</h1>

      <h3>
        Kuota: {data.length} / {MAX_KUOTA}
        {isPenuh && !form.id ? " (PENUH)" : ""}
      </h3>

      {!isLogin && (
        <p style={{ color: "red" }}>
          Login dulu untuk daftar / edit / hapus
        </p>
      )}

      <div className="form-container">
        <div className="form-card">
          <input
            className="form-input"
            placeholder="Nama"
            value={form.nama}
            disabled={!isLogin}
            onChange={(e) =>
              setForm({ ...form, nama: e.target.value })
            }
          />

          <input
            className="form-input"
            placeholder="Email"
            value={form.email}
            disabled={!isLogin}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            className="form-input"
            placeholder="Kampus"
            value={form.kampus}
            disabled={!isLogin}
            onChange={(e) =>
              setForm({ ...form, kampus: e.target.value })
            }
          />

          <input
            className="form-input"
            placeholder="Posisi"
            value={form.posisi}
            disabled={!isLogin}
            onChange={(e) =>
              setForm({ ...form, posisi: e.target.value })
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

      <h3 style={{ marginTop: "30px" }}>Daftar Pendaftar</h3>

      {data.length === 0 ? (
        <p>Belum ada data</p>
      ) : (
        data.map((item) => (
          <div key={item.id} className="list-card">
            <b>{item.nama}</b> - {item.kampus} ({item.posisi})

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
        ))
      )}
    </div>
  );
}

export default DaftarMagang;