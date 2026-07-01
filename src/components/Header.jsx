import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <h1 className="site-title">
            <Link to="/">Laurel's Lens</Link>
          </h1>
          <nav className="site-nav">
            <NavLink to="/" end>Collected Thoughts</NavLink>
            <NavLink to="/visual-medicine">Visual Medicine</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
