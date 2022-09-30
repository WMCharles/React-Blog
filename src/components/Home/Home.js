import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home({PostsData, input}) {
  const navigate = useNavigate()
  return (
    <div>
        <div className="posts">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="What naruto charactor are you looking for?" onChange={(e) => input(e.target.value.toLocaleUpperCase())}/>
                <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
            </button>
            </div>
            {PostsData.map((post) => 
                <div className="post" key={post.id} onClick={() => {navigate(`/posts/${post.title}`);}}>
                    <div className="post-item">
                        <div className="desc"> 
                            <h4>{post.title}</h4>
                        </div>
                        <img src={post.image} alt="post"/>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}
