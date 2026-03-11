import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Inovasi from "./pages/Inovasi";
import "./App.css";


function App() {
  return (
    <BrowserRouter>

      <Header />

      <Navbar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inovasi" element={<Inovasi />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;