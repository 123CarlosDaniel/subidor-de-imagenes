import { useNavigate } from "react-router-dom"
import "./navbar.css"


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="navbar" >
      <li className="title" onClick={()=> navigate("/")}>Subidor de imagenes</li>
      <li><button onClick={()=>navigate("/post")}>Agregar imagen</button></li>
    </nav>
  )
}

export default Navbar