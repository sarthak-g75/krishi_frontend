import React from 'react'
import {Link} from 'react-router-dom'
// import './styles/navbar.css'
const Navbar = () => {
  return (
<>

<nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
  <Link className="navbar-brand" to="/">Krishi</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className= "nav-item">
        <Link className="nav-link" to="/soilTesting">Soil Testing <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/rentEquipment">Rent an equipment</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/hireLabour">Hire Labour</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/getEquipment">Get an equipment</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/login">Login</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </li>
      
      
        

    </ul>
  </div>
</nav>

</>
  )
}

export default Navbar