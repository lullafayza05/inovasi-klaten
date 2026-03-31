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

import Dashboard from "./pages/Dashboard";
import TambahInovasi from "./pages/TambahInovasi";
import ProtectedRoute from "./components/ProtectedRoute";

import Clock from "./components/Clock";

function App() {
  return (
    <Router>
      <Navbar />
      <Clock />

      <Routes>
        {/* Halaman Publik */}
        <Route path="/" element={<Home />} />
        <Route path="/pengumuman" element={<Pengumuman />} />
        <Route path="/pedoman" element={<Pedoman />} />
        <Route path="/manual-book" element={<ManualBook />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/pengaduan" element={<Pengaduan />} />
        <Route path="/login" element={<Login />} />

        {/* Admin */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tambah-inovasi"
          element={
            <ProtectedRoute>
              <TambahInovasi />
            </ProtectedRoute>
          }
        />

        {/* Menu Lingkaran Home */}
        <Route path="/peta" element={<h1>Peta Indeks</h1>} />
        <Route path="/data-indeks" element={<h1>Data Indeks</h1>} />
        <Route path="/pemenang-iga" element={<h1>Pemenang IGA</h1>} />
        <Route path="/tuxedovation" element={<h1>Tuxedovation</h1>} />
        <Route path="/puja-indah" element={<h1>Puja Indah</h1>} />
        <Route path="/web-inovasi" element={<h1>Web Inovasi</h1>} />
      </Routes>
    </Router>
  );
}

export default App;