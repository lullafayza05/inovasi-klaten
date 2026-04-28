import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (data.access) {
        localStorage.setItem("token", data.access);

        const profileRes = await fetch(
          "http://127.0.0.1:8000/api/inovasi/profile/",
          {
            headers: {
              Authorization: `Bearer ${data.access}`,
            },
          }
        );

        const profile = await profileRes.json();

        const role = profile.is_staff ? "admin" : "user";
        localStorage.setItem("role", role);

        if (role === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      } else {
        alert("Username atau password salah");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f9",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "20px",
            background: "#1c3d6e",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Masuk
        </button>
      </div>

      {/* 🔥 LINK REGISTER (INI YANG BENAR) */}
      <p style={{ marginTop: "15px" }}>
        Belum punya akun?{" "}
        <span
          onClick={() => navigate("/register")}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Daftar
        </span>
      </p>
    </div>
  );
}

export default Login;