import React from 'react'
import { Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', exact: true },
  { to: '/business', label: 'Business' },
  { to: '/entertainment', label: 'Entertainment' },
  { to: '/general', label: 'General' },
  { to: '/health', label: 'Health' },
  { to: '/science', label: 'Science' },
  { to: '/sports', label: 'Sports' },
  { to: '/technology', label: 'Technology' },
]

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">NewsBuddy</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {links.map(({ to, label, exact }) => (
            <li className="nav-item" key={to}>
              <Link className="nav-link" aria-current={exact ? 'page' : undefined} to={to}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
)

export default NavBar
