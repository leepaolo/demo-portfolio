import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar--wrap'>
      <h1 style={{color: "red"}}>Logo</h1>
      <ul className='menu--links'>
        <Link to="/">
            <li>Home</li>
        </Link>
        <Link to="/About">
            <li>About</li>
        </Link>
        <Link to="/Portfolio">
            <li>Portfolio</li>
        </Link>
        <Link to="/Contact">
            <li>Contact me</li>
        </Link>
      </ul>

    </div>
  )
}
