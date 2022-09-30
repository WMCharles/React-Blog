import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home({PostsData}) {
  const navigate = useNavigate()
  return (
    <div>
        <div className="posts">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="What post are you looking for?"/>
                <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
            </button>
            </div>
            {PostsData.map((post) => 
                <div className="post" key={post.id}>
                    <div className="post-item">
                        <div className="desc"> 
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
