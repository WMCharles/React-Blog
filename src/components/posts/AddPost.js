import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"

export default function AddPost({addPostItem}) {
  // Input State
  const [formData, setFormData] = useState({
    title:"",
    description:"",
    image:""
  })

  //handleChange function
  function handleInputChange (event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
  });
  }

  // Edit Post 
  // 1. Define constant use for editing
  // NB: the const needs to be the same as the one defined in Routes
  // 2. useEffect - for editing 
  // 3. Update handleInputSubmit function  
  const params = useParams()
  const [id, setId] = useState(params.id)

  useEffect(()=>{
    if(id){
        fetch(`http://localhost:3000/posts/${id}`).then(resp=>resp.json()).then(post=>{
            setFormData(post);
        })
    }
  }, [id]); 

  //handleSubmit function - submits data to server
  function handleInputSubmit(){
    fetch(`http://localhost:8001/posts/${id ? '/'+id : ''}`, {
      method: id ? "PATCH" : "POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((dataInput) => addPostItem(dataInput))
  }

  return (
    <div>
      <div className='posts addpost'>
          <form onSubmit={handleInputSubmit}>
            <h2>Create Post</h2>
            <div className='input-control'>
              <label htmlFor='title'>Title</label>
              <input type="text" name="title" placeholder="add title" onChange={handleInputChange}/>
            </div>
            <div className='input-control'> 
              <label htmlFor='description'>Description</label>
              <textarea rows="5" name="description" placeholder="add description" onChange={handleInputChange}/>
            </div>
            <div className='input-control'>
              <label htmlFor='description'>Image</label>
              <input type="text" name='image' placeholder='add image url' onChange={handleInputChange}/>
            </div>
            <div className='input-control'>
              <button type='submit'>Add Post</button>
            </div>
          </form>
      </div>
    </div>
  )
}
