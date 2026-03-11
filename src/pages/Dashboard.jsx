import Header from "../components/Header";
import Card from "../components/Card";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <Header />

      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "30px"
      }}>
        <Card title="Peta Indeks" />
        <Card title="Data Indeks" />
        <Card title="Pemenang IGA" />
        <Card title="Tuxedovation" />
      </div>
    </div>
  );
}

export default Dashboard;