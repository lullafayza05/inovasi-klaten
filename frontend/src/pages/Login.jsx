import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Username dan password wajib diisi!");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.access) {
        // simpan token
        localStorage.setItem("token", data.access);

        // 🔥 redirect ke dashboard
        navigate("/dashboard");
      } else {
        alert("Login gagal");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan server");
    }
  };

  return (
    <div style={container}>
      <form onSubmit={handleLogin} style={formBox}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={input}
        />

        <div style={passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={passwordInput}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={eyeButton}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button type="submit" style={button}>
          Masuk
        </button>
      </form>
    </div>
  );
}

/* STYLE */
const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "#f1f5f9",
};

const formBox = {
  width: "350px",
  background: "white",
  padding: "40px",
  borderRadius: "15px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const input = {
  width: "100%",
  padding: "14px",
};

const passwordWrapper = { position: "relative" };

const passwordInput = {
  width: "100%",
  padding: "14px",
  paddingRight: "40px",
};

const eyeButton = {
  position: "absolute",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  cursor: "pointer",
};

const button = {
  width: "100%",
  padding: "14px",
  background: "#2f4f7f",
  color: "white",
  border: "none",
};

export default Login;