import { useEffect, useState } from "react";

function DataInovasi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/inovasi/")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Data Inovasi Daerah</h1>

      <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Inovasi</th>
            <th>Instansi</th>
            <th>Tahun</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.nama_inovasi}</td>
              <td>{item.instansi}</td>
              <td>{item.tahun}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataInovasi;