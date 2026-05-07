import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { useState, useEffect } from "react";

import "./App.css";

import Navbar from "./components/Navbar";
import Clock from "./components/Clock";

import Home from "./pages/Home";
import Pengumuman from "./pages/Pengumuman";
import Pedoman from "./pages/Pedoman";
import ManualBook from "./pages/ManualBook";
import Galeri from "./pages/Galeri";
import Berita from "./pages/Berita";
import Pengaduan from "./pages/Pengaduan";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DataInovasi from "./pages/DataInovasi";
import DaftarLomba from "./pages/DaftarLomba";
import DaftarMagang from "./pages/DaftarMagang";

import ProtectedRoute from "./ProtectedRoute";

import Dashboard from "./Dashboard";
import Menu from "./Menu";

import ListInovasi from "./ListInovasi";
import Database from "./Database";

function App() {

  /* ================= STATE DATA ================= */

  const [dataInovasi, setDataInovasi] =
    useState(() => {
      const saved =
        localStorage.getItem("dataInovasi");

      return saved ? JSON.parse(saved) : [];
    });

  /* ================= SIMPAN KE LOCAL STORAGE ================= */

  useEffect(() => {
    localStorage.setItem(
      "dataInovasi",
      JSON.stringify(dataInovasi)
    );
  }, [dataInovasi]);

  return (
    <Router>
      <Navbar />
      <Clock />

      <Routes>

        {/* ================= PUBLIK ================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/pengumuman"
          element={<Pengumuman />}
        />

        <Route
          path="/pedoman"
          element={<Pedoman />}
        />

        <Route
          path="/manual-book"
          element={<ManualBook />}
        />

        <Route
          path="/galeri"
          element={<Galeri />}
        />

        <Route
          path="/berita"
          element={<Berita />}
        />

        <Route
          path="/pengaduan"
          element={<Pengaduan />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/data-inovasi"
          element={<DataInovasi />}
        />

        <Route
          path="/daftar-magang"
          element={<DaftarMagang />}
        />

        <Route
          path="/daftar-lomba"
          element={<DaftarLomba />}
        />

        {/* ================= DASHBOARD ================= */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Menu>
                <Dashboard
                  data={dataInovasi}
                />
              </Menu>
            </ProtectedRoute>
          }
        />

        {/* ================= LIST INOVASI ================= */}

        <Route
          path="/listinovasi"
          element={
            <ProtectedRoute>
              <Menu>
                <ListInovasi
                  data={dataInovasi}
                />
              </Menu>
            </ProtectedRoute>
          }
        />

        {/* ================= DATABASE ================= */}

        <Route
          path="/database"
          element={
            <ProtectedRoute>
              <Menu>
                <Database
                  dataInovasi={dataInovasi}
                  setDataInovasi={
                    setDataInovasi
                  }
                />
              </Menu>
            </ProtectedRoute>
          }
        />

        {/* ================= MENU LAIN ================= */}

        <Route
          path="/peta"
          element={<h1>Peta Indeks</h1>}
        />

        <Route
          path="/data-indeks"
          element={<h1>Data Indeks</h1>}
        />

        <Route
          path="/pemenang-iga"
          element={<h1>Pemenang IGA</h1>}
        />

        <Route
          path="/web-inovasi"
          element={<h1>Web Inovasi</h1>}
        />

      </Routes>
    </Router>
  );
}

export default App;