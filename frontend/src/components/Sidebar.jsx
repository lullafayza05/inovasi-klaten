import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div style={{
      width:"200px",
      height:"100vh",
      background:"#1e293b",
      color:"white",
      padding:"20px"
    }}>
      <h2>Menu</h2>

      <ul style={{listStyle:"none", padding:"0"}}>
        <li>
          <Link to="/" style={{color:"white"}}>Dashboard</Link>
        </li>

        <li>
          <Link to="/inovasi" style={{color:"white"}}>Data Inovasi</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar