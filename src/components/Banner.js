import React from 'react'
import logo from '../Assets/logos/movirimage.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark" style={{color:"white"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img className='mx-3' src={logo} height={'50px'} width='50px' alt="" /> GGmovies</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <Link className="nav-link " to="/">Search Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AllSerial">Search web Series</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to='/AllMightysearch'>All Mighty Search</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Banner