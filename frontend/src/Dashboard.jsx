import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard Admin</h1>

      <Link to="/tambah-inovasi">
        <button>Tambah Inovasi</button>
      </Link>
    </div>
  );
}

export default Dashboard;