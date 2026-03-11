function Card({ title }) {
  return (
    <div style={{
      background: "#f5f5f5",
      padding: "20px",
      borderRadius: "10px",
      width: "150px",
      textAlign: "center"
    }}>
      <div style={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "#ddd",
        margin: "auto"
      }}></div>

      <p style={{ marginTop: "10px" }}>{title}</p>
    </div>
  );
}

export default Card;