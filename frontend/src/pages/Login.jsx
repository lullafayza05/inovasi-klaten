import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!username.trim() || !password.trim()) {
      alert("Username dan password wajib diisi!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.access) {
        // Simpan token
        localStorage.setItem("token", data.access);
        localStorage.setItem("refresh", data.refresh);

        // Redirect tanpa notifikasi
        navigate("/dashboard");
      } else {
        alert(data.detail || "Username atau password salah!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Terjadi kesalahan server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={container}>
      <form onSubmit={handleLogin} style={formBox}>
        <h2 style={title}>Login Dashboard</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={input}
          autoComplete="username"
        />

        <div style={passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={passwordInput}
            autoComplete="current-password"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={eyeButton}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button
          type="submit"
          style={{
            ...button,
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
          disabled={loading}
        >
          {loading ? "Memproses..." : "Masuk"}
        </button>

        <p style={registerText}>
          Belum punya akun?{" "}
          <Link to="/register" style={registerLink}>
            Daftar dulu
          </Link>
        </p>
      </form>
    </div>
  );
}

/* ================= STYLE ================= */

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
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
};

const title = {
  textAlign: "center",
  color: "#2f4f7f",
};

const input = {
  width: "100%",
  padding: "14px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
};

const passwordWrapper = {
  position: "relative",
};

const passwordInput = {
  width: "100%",
  padding: "14px",
  paddingRight: "45px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
};

const eyeButton = {
  position: "absolute",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "18px",
};

const button = {
  width: "100%",
  padding: "14px",
  background: "#2f4f7f",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "bold",
};

const registerText = {
  textAlign: "center",
  fontSize: "14px",
  color: "#555",
};

const registerLink = {
  color: "#2f4f7f",
  fontWeight: "bold",
  textDecoration: "none",
};

export default Login;