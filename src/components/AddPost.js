import React from 'react'

export default function AddPost() {
  return (
    <div>
      <div className='posts addpost'>
          <form>
            <h2>Create Post</h2>
            <div className='input-control'>
              <label htmlFor='title'>Title</label>
              <input type="text" placeholder="title"/>
            </div>
            <div className='input-control'> 
              <label htmlFor='description'>Description</label>
              <input type="textarea" placeholder='add description' />
            </div>
            <div className='input-control'>
              <input type="file"/>
            </div>
            <div className='input-control'>
              <button type='submit'>Add Post</button>
            </div>
          </form>
      </div>
    </div>
  )
}
