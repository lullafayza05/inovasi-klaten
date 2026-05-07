import { useState } from "react";

import Lomba from "./Lomba";
import Database from "./Database";
import Dashboard from "./Dashboard";
import DashboardIGA from "./DashboardIGA";
import ListInovasi from "./ListInovasi";

function Menu() {
  const [openSidebar, setOpenSidebar] =
    useState(true);

  const [page, setPage] =
    useState("list");

  /* ================= DATA GLOBAL ================= */

  const [dataInovasi, setDataInovasi] =
    useState([]);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      {/* SIDEBAR */}
      {openSidebar && (
        <div style={sidebar}>
          <h3 style={{ padding: "20px" }}>
            Bar Menu
          </h3>

          <div
            style={menuItem}
            onClick={() =>
              setPage("dashboard")
            }
          >
            Dashboard
          </div>

          <div
            style={menuItem}
            onClick={() =>
              setPage("dashboardiga")
            }
          >
            Dashboard IGA
          </div>

          <div
            style={menuItem}
            onClick={() =>
              setPage("list")
            }
          >
            List Inovasi
          </div>

          <div
            style={menuItem}
            onClick={() =>
              setPage("lomba")
            }
          >
            Lomba Inovasi
          </div>
        </div>
      )}

      {/* MAIN */}
      <div
        style={{
          flex: 1,
          background: "#f4f6f9",
        }}
      >
        {/* NAVBAR */}
        <div style={navbar}>
          <span
            onClick={() =>
              setOpenSidebar(
                !openSidebar
              )
            }
            style={{
              cursor: "pointer",
              fontSize: "22px",
            }}
          >
            ☰
          </span>

          <h3>
            Dashboard Indeks Inovasi
            Daerah
          </h3>
        </div>

        {/* CONTENT */}
        <div style={{ padding: "20px" }}>
          {page === "dashboard" && (
            <Dashboard
              data={dataInovasi}
            />
          )}

          {page === "dashboardiga" && (
            <DashboardIGA
              data={dataInovasi}
            />
          )}

          {page === "list" && (
            <ListInovasi
              data={dataInovasi}
              setPage={setPage}
            />
          )}

          {page === "database" && (
            <Database
              setDataInovasi={
                setDataInovasi
              }
              dataInovasi={
                dataInovasi
              }
              setPage={setPage}
            />
          )}

          {page === "lomba" && (
            <Lomba />
          )}
        </div>
      </div>
    </div>
  );
}

/* STYLE */

const sidebar = {
  width: "230px",
  background: "#1e3a5f",
  color: "white",
};

const menuItem = {
  padding: "15px 20px",
  cursor: "pointer",
  borderBottom:
    "1px solid rgba(255,255,255,0.1)",
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

export default Menu;