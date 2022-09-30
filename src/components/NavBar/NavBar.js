import React from 'react'
import {Link, Outlet} from "react-router-dom"

export default function NavBar() {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/posts">Posts</Link>
        </nav>
        <Outlet/>
    </div>
  )
}
