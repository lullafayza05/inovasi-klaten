import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tanggal = time.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const jam = time.toLocaleTimeString("id-ID") + " WIB";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "15px",
        background: "white",
        padding: "10px 15px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        fontSize: "14px"
      }}
    >
      <div>Tanggal = {tanggal}</div>
      <div>Jam = {jam}</div>
    </div>
  );
}

export default Clock;