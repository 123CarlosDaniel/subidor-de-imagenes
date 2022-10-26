import { useNavigate } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="navbar">
      <li className="title" onClick={() => navigate('/')}>
        Image uploader
      </li>
      <li>
        <button onClick={() => navigate('/post')}>Upload image</button>
      </li>
    </nav>
  )
}

export default Navbar
