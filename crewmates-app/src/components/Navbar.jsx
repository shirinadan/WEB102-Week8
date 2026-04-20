import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">Crewmates</h2>
      <nav className="sidebar-links">
        <Link to="/">Home</Link>
        <Link to="/create">Create a Crewmate!</Link>
        <Link to="/crew">Crewmate Gallery</Link>
      </nav>
    </aside>
  )
}

export default Navbar