import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Dashboard</Link>
      <Link to="/inovasi">Inovasi</Link>
      <Link to="/kontak">Kontak</Link>
      <Link to="/tentang">Tentang</Link>
    </div>
  );
}

export default Navbar;