import React from 'react'
import { PostsData } from '../PostsData'
import { useNavigate } from 'react-router-dom'
export default function PostList() {
    const navigate = useNavigate()
    return (
        <>
        <div class="posts">
            <div className='title'>
            <h2>Available Posts</h2>
            </div>
            <div class="search">
                <input type="text" class="searchTerm" placeholder="What post are you looking for?"/>
                <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
            </button>
            </div>
            {PostsData.map((post) => 
                <div class="post">
                    <div class="post-item" key={post.id}>
                        <div class="desc"> 
                            <h4 onClick={() => {navigate(`/posts/${post.title}`);}}>{post.title}</h4>
                        </div>
                        <img src={post.image} alt="post"/>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}
