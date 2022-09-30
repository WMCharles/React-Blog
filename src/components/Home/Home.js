import React from 'react'
import { PostsData } from '../../data/PostsData';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
        <div class="posts">
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
    </div>
  )
}
