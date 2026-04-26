import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Pengumuman from "./pages/Pengumuman";
import Pedoman from "./pages/Pedoman";
import ManualBook from "./pages/ManualBook";
import Galeri from "./pages/Galeri";
import Berita from "./pages/Berita";
import Pengaduan from "./pages/pengaduan";
import Login from "./pages/Login";
import DataInovasi from "./pages/DataInovasi";
import DaftarLomba from "./pages/DaftarLomba"; // pastikan path benar
import DaftarMagang from "./pages/DaftarMagang"; 
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";

import Clock from "./components/Clock";

function App() {
  return (
    <Router>
      <Navbar />
      <Clock />

      <Routes>
        {/* PUBLIK */}
        <Route path="/" element={<Home />} />
        <Route path="/pengumuman" element={<Pengumuman />} />
        <Route path="/pedoman" element={<Pedoman />} />
        <Route path="/manual-book" element={<ManualBook />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/pengaduan" element={<Pengaduan />} />
        <Route path="/login" element={<Login />} />
        <Route path="/data-inovasi" element={<DataInovasi />} />

        {/* ADMIN */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* MENU HOME */}
        <Route path="/peta" element={<h1>Peta Indeks</h1>} />
        <Route path="/data-indeks" element={<h1>Data Indeks</h1>} />
        <Route path="/pemenang-iga" element={<h1>Pemenang IGA</h1>} />
        <Route path="/daftar-magang" element={<DaftarMagang/>} />
        <Route path="/daftar-lomba" element={<DaftarLomba />} />
        <Route path="/web-inovasi" element={<h1>Web Inovasi</h1>} />
      </Routes>
    </Router>
  );
}

export default App;