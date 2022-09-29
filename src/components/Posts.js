import React from 'react'
import {Link, Outlet} from "react-router-dom"
export default function Posts() {
  return (
    <div>
        <h1>Posts</h1>
        <div className='sub-nav'>
            <Link to ="post-list">Posts</Link>
            <Link to = "addpost">Add Post</Link>
        </div>
        <Outlet/>
    </div>
  )
}
