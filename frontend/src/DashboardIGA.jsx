import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const data = [
  {
    aspek: "Kecepatan",
    nilai: 80,
  },
  {
    aspek: "Produk",
    nilai: 70,
  },
  {
    aspek: "Infrastruktur",
    nilai: 85,
  },
  {
    aspek: "SDM",
    nilai: 75,
  },
  {
    aspek: "Ekosistem",
    nilai: 90,
  },
];

function DashboardIGA() {
  return (
    <div>
      <h1
        style={{
          color: "#1e3a8a",
          marginBottom: "20px",
        }}
      >
        Dashboard IGA
      </h1>

      {/* HEADER */}
      <div
        style={{
          background: "#1e3a8a",
          color: "white",
          padding: "40px",
          borderRadius: "20px",
        }}
      >
        <h2>Halo, Kabupaten Klaten</h2>

        <p
          style={{
            marginTop: "10px",
            lineHeight: "28px",
          }}
        >
          Anda bisa melihat seluruh Inovasi Daerah baik itu bidang
          Digital maupun Non Digital daerah Anda
        </p>
      </div>

      {/* PENGUMUMAN */}
      <div
        style={{
          background: "white",
          color: "black",
          padding: "25px",
          borderRadius: "20px",
          marginTop: "25px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            color: "#1e3a8a",
          }}
        >
          Pengumuman
        </h2>

        <div style={pengumumanItem}>
          <p style={tanggal}>19 August 2025</p>

          <p>
            Radiogram Perpanjangan Pelaporan IID 2025 Tahap II
          </p>
        </div>

        <div style={pengumumanItem}>
          <p style={tanggal}>26 July 2025</p>

          <p>
            Radiogram Perpanjangan Pelaporan IID 2025
          </p>
        </div>

        <div style={pengumumanItem}>
          <p style={tanggal}>20 June 2025</p>

          <p>
            RDG Penilaian Inovasi Daerah dan Pemberian IGA 2025
          </p>
        </div>
      </div>

      {/* CARD */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div style={card}>
          <h3>Skor Indeks Inovasi Daerah</h3>

          <h1>83.49</h1>
        </div>

        <div style={card}>
          <h3>Total Inovasi Pemda</h3>

          <h1>219</h1>
        </div>

        <div style={card}>
          <h3>Uji Coba</h3>

          <h1>0</h1>
        </div>

        <div style={card}>
          <h3>Penerapan</h3>

          <h1>219</h1>
        </div>
      </div>

      {/* ASPEK + PETA */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {/* ASPEK */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            height: "400px",
          }}
        >
          <h2>Aspek Penilaian</h2>

          <ResponsiveContainer width="100%" height="90%">
            <RadarChart data={data}>
              <PolarGrid />

              <PolarAngleAxis dataKey="aspek" />

              <PolarRadiusAxis />

              <Radar
                name="Nilai"
                dataKey="nilai"
                stroke="#1e3a8a"
                fill="#1e3a8a"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* PETA */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            height: "400px",
          }}
        >
          <h2>Peta Inovasi</h2>

          <MapContainer
            center={[-7.7056, 110.606]}
            zoom={10}
            style={{
              height: "320px",
              width: "100%",
              borderRadius: "15px",
            }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[-7.7056, 110.606]}>
              <Popup>Kabupaten Klaten</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const pengumumanItem = {
  borderBottom: "1px solid #ddd",
  paddingBottom: "15px",
  marginBottom: "15px",
};

const tanggal = {
  color: "gray",
  fontSize: "14px",
  marginBottom: "8px",
};

export default DashboardIGA;