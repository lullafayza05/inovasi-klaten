import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f4f6f9" }}>
      
      {/* Sidebar */}
      <div
        style={{
          width: "250px",
          background: "#1c3d6e",
          color: "white",
          padding: "20px"
        }}
      >
        <h2 style={{ marginBottom: "30px" }}>Admin</h2>

        <p style={{ cursor: "pointer" }} onClick={() => navigate("/dashboard")}>
          Dashboard
        </p>

        <p style={{ cursor: "pointer" }} onClick={() => navigate("/data-inovasi")}>
          Data Inovasi
        </p>

        <p style={{ cursor: "pointer" }} onClick={() => navigate("/tambah-inovasi")}>
          Tambah Inovasi
        </p>

        <p>Laporan</p>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        
        {/* Header */}
        <div
          style={{
            background: "white",
            padding: "15px 30px",
            borderBottom: "1px solid #ddd"
          }}
        >
          <h2>Dashboard Inovasi Daerah</h2>
        </div>

        <div style={{ padding: "30px" }}>
          
          {/* Statistik */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              marginBottom: "30px"
            }}
          >
            <div style={cardStyle}>
              <h3>Total Inovasi</h3>
              <h1>120</h1>
            </div>

            <div style={cardStyle}>
              <h3>Inovasi Aktif</h3>
              <h1>95</h1>
            </div>

            <div style={cardStyle}>
              <h3>Instansi Terdaftar</h3>
              <h1>40</h1>
            </div>
          </div>

          {/* Tabel */}
          <div style={tableContainer}>
            <h3 style={{ marginBottom: "15px" }}>Data Inovasi Terbaru</h3>

            <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead style={{ background: "#1c3d6e", color: "white" }}>
                <tr>
                  <th>No</th>
                  <th>Nama Inovasi</th>
                  <th>Instansi</th>
                  <th>Tahun</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Smart Village</td>
                  <td>Pemkab Klaten</td>
                  <td>2025</td>
                  <td>Aktif</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Digital Pelayanan Desa</td>
                  <td>Pemdes</td>
                  <td>2024</td>
                  <td>Aktif</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
};

const tableContainer = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
};

export default Dashboard;