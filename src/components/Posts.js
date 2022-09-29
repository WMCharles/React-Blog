import React from 'react'
import {Link, Outlet} from "react-router-dom"
export default function Posts() {
  return (
    <div>
        <div className='sub-nav'>
            <Link to ="list">Posts</Link>
            <Link to = "addpost">Add Post</Link>
        </div>
        <Outlet/>
    </div>
  )
}
