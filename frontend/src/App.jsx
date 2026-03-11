import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Pengumuman from "./pages/Pengumuman";
import Pedoman from "./pages/Pedoman";
import ManualBook from "./pages/ManualBook";
import Galeri from "./pages/Galeri";
import Berita from "./pages/Berita";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        {/* Navbar Menu */}
        <Route path="/" element={<Home />} />
        <Route path="/pengumuman" element={<Pengumuman />} />
        <Route path="/pedoman" element={<Pedoman />} />
        <Route path="/manual-book" element={<ManualBook />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/login" element={<Login />} />

        {/* Menu Lingkaran Home */}
        <Route path="/peta" element={<h1>Peta Indeks</h1>} />
        <Route path="/data-indeks" element={<h1>Data Indeks</h1>} />
        <Route path="/pemenang-iga" element={<h1>Pemenang IGA</h1>} />
        <Route path="/tuxedovation" element={<h1>Tuxedovation</h1>} />
        <Route path="/puja-indah" element={<h1>Puja Indah</h1>} />
        <Route path="/web-bskdn" element={<h1>Web BSKDN</h1>} />

      </Routes>
    </Router>
  );
}

export default App;