import { Link } from 'react-router-dom'
import '../styles/Header.css'

export default function Header() {
  return (
    <header>
      <Link to="/" id="logo-header">
        <img src="https://images.vexels.com/media/users/3/131779/isolated/lists/3d4929d289ad98ad71637d5c257d2f08-pizza-logo-1.png" alt="" />
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menus</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </header>
  )
}