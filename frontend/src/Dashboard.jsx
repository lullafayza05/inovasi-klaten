import { useState } from "react";
import Database from "./Database"; // ⬅️ pastikan file ada
import Lomba from "./Lomba";
function Dashboard() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [page, setPage] = useState("dashboard");

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* SIDEBAR */}
      {openSidebar && (
        <div style={sidebar}>
          <h3 style={{ padding: "20px" }}>Dashboard</h3>

          <div style={menuItem} onClick={() => setPage("dashboard")}>
            Dashboard
          </div>

          <div style={menuItem} onClick={() => setPage("database")}>
            Database Inovasi
          </div>

          <div style={menuItem} onClick={() => setPage("lomba")}>
            Lomba Inovasi
          </div>
        </div>
      )}

      {/* MAIN */}
      <div style={{ flex: 1, background: "#f4f6f9" }}>
        
        {/* NAVBAR */}
        <div style={navbar}>
          <span onClick={() => setOpenSidebar(!openSidebar)}>☰</span>
          <h3>Dashboard Indeks Inovasi Daerah</h3>
        </div>

        {/* CONTENT */}
          <div style={{ padding: "20px" }}>

        {/* DASHBOARD */}
        {page === "dashboard" && (
          <>
            <h2>Dashboard</h2>
            <p>Halaman Dashboard</p>
          </>
        )}

        {/* DATABASE */}
        {page === "database" && <Database />}

        {/* LOMBA */}
        {page === "lomba" && <Lomba />}

      </div>
            </div>
          </div>
        );
      }

/* STYLE */
const sidebar = {
  width: "220px",
  background: "#1e3a5f",
  color: "white",
};

const menuItem = {
  padding: "15px 20px",
  cursor: "pointer",
};

const navbar = {
  height: "60px",
  background: "#0b2c5f",
  color: "white",
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "0 20px",
};

export default Dashboard;