import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <h1 className="site-title">
            <Link to="/">testing new name</Link>
          </h1>
          <nav className="site-nav">
            <Link to="/">Home</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
