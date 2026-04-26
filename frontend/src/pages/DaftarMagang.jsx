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

  // LOAD DATA
  useEffect(() => {
    try {
      const saved = localStorage.getItem("magang");
      const parsed = saved ? JSON.parse(saved) : [];
      setData(Array.isArray(parsed) ? parsed : []);
    } catch (error) {
      console.log("LocalStorage error:", error);
      setData([]);
    }
  }, []);

  // SAVE HELPER
  const saveData = (newData) => {
    setData(newData);
    localStorage.setItem("magang", JSON.stringify(newData));
  };

  // TAMBAH / EDIT
  const handleSubmit = () => {
    if (!form.nama || !form.email || !form.kampus || !form.posisi) {
      alert("Isi semua data!");
      return;
    }

    // EDIT
    if (form.id) {
      const updated = data.map((item) =>
        item.id === form.id ? form : item
      );
      saveData(updated);
      alert("Data berhasil diupdate!");
    } else {
      // CEK KUOTA hanya saat TAMBAH
      if (data.length >= MAX_KUOTA) {
        alert("Kuota magang sudah PENUH!");
        return;
      }

      const newItem = {
        id: Date.now(),
        nama: form.nama,
        email: form.email,
        kampus: form.kampus,
        posisi: form.posisi,
        status: "Menunggu",
      };

      saveData([...data, newItem]);
      alert("Pendaftaran berhasil!");
    }

    setForm({
      id: null,
      nama: "",
      email: "",
      kampus: "",
      posisi: "",
    });
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

  const isPenuh = data.length >= MAX_KUOTA;

  return (
    <div style={{ padding: "40px" }}>
      <h1>Pendaftaran Magang</h1>

      <h3>
        Kuota: {data.length} / {MAX_KUOTA}
        {isPenuh && !form.id ? " (PENUH)" : ""}
      </h3>

      {/* FORM */}
      <input
        placeholder="Nama Lengkap"
        value={form.nama}
        onChange={(e) =>
          setForm({ ...form, nama: e.target.value })
        }
      />
      <br /><br />

      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />
      <br /><br />

      <input
        placeholder="Asal Kampus"
        value={form.kampus}
        onChange={(e) =>
          setForm({ ...form, kampus: e.target.value })
        }
      />
      <br /><br />

      <input
        placeholder="Posisi Magang"
        value={form.posisi}
        onChange={(e) =>
          setForm({ ...form, posisi: e.target.value })
        }
      />
      <br /><br />

      <button onClick={handleSubmit}>
        {form.id ? "Update" : "Daftar"}
      </button>

      {/* LIST */}
      <h3 style={{ marginTop: "30px" }}>Daftar Pendaftar</h3>

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
            <b>{item.nama}</b> - {item.kampus} ({item.posisi})

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

export default DaftarMagang;