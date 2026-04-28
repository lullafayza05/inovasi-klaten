import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    // ✅ VALIDASI
    if (!username || !password) {
      alert("Username & Password wajib diisi");
      return;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/inovasi/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await response.json();

      if (data.message) {
        alert("Register berhasil!");
        navigate("/login");
      } else {
        alert(data.error || "Register gagal");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Register</h2>

        {/* ✅ FORM DIMULAI DI SINI */}
        <form
          onSubmit={(e) => {
            e.preventDefault(); // biar ga reload
            handleRegister();
          }}
        >
          <input
            className="input-field"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            className="input-field"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="btn-daftar" type="submit">
            Daftar
          </button>
        </form>
        {/* ✅ FORM SELESAI */}
      </div>
    </div>
  );
}

export default Register;