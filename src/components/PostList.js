import React from 'react'

export default function PostList() {
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
        <div class="post">
            <div class="post-item">
                <div class="desc">
                    <p>Description-1-1</p>
                </div>
                <img src="https://via.placeholder.com/150" alt="post"/>
            </div>
        </div>
        <div class="post">
            <div class="post-item">
                <div class="desc">
                    <p>Description-1-1</p>
                </div>
                <img src="https://via.placeholder.com/150" alt="post"/>
            </div>
        </div>
        <div class="post">
            <div class="post-item">
                <div class="desc">
                    <p>Description-1-1</p>
                </div>
                <img src="https://via.placeholder.com/150" alt="post"/>
            </div>
        </div>
        <div class="post">
            <div class="post-item">
                <div class="desc">
                    <p>Description-1-1</p>
                </div>
                <img src="https://via.placeholder.com/150" alt="post"/>
            </div>
        </div>
      </div>
    </>
  )
}
