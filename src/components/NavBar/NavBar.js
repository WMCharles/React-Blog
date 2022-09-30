import React from 'react'
import {Link, Outlet} from "react-router-dom"

export default function NavBar() {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/posts">Post</Link>
            <Link to="/about">About</Link>
        </nav>
        <Outlet/>
    </div>
  )
}
