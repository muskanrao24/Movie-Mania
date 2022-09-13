import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("email");
    navigate('/login');
  }

  return (
    <nav>
      <div className="menu-icon">
        <span className="fa fa-bars"></span>
      </div>
      <div className="logo">
        <img src={require('../images/logo.jpg')} alt="" height="50px" width="50px" />
        MOVIE MANIAC
      </div>

      <div className="nav-items">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/aboutus">AboutUs</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
      </div>
      <div className="search-icon">
        <span className="fa fa-search"></span>
      </div>
      <div className="cancel-icon">
        <span className="fa fa-times"></span>
      </div>
      <form action="#">
        <input type="search" className="search-data" placeholder="Search" required />
        <button type="submit" className="fas fa-search"></button>
      </form>

      {
        (localStorage.email) ? (
          <button className="btn btn-primary mx-1" onClick={logout}>Logout</button>
        ) : (
          <>
            <Link to="/signup">
              <button className="btn btn-primary mx-1">SignUp</button>
            </Link>

            <Link to="/login">
              <button className="btn btn-primary mx-1">Login</button>
            </Link>
          </>
        )
      }

    </nav>
  )
}
