import React from 'react'
import {Link, Outlet} from "react-router-dom"

export default function NavBar() {
  return (
    <div>
        <nav>
          <div className='nav-items'>
            <div><Link to="/" className="logo">NARUTO</Link></div>
            <div className='menu'>
              <Link to="/">Home</Link>
              <Link to="/posts">Post</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
        </nav>
        <Outlet/>
    </div>
  )
}
