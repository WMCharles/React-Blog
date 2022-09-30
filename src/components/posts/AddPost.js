import React, {useState} from 'react'

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

  //handleSubmit function - submits data to server
  function handleInputSubmit(){
    fetch("http://localhost:8001/posts", {
      method: "POST",
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
          <form>
            <h2>Create Post</h2>
            <div className='input-control'>
              <label htmlFor='title'>Title</label>
              <input type="text" placeholder="add title"/>
            </div>
            <div className='input-control'> 
              <label htmlFor='description'>Description</label>
              <textarea rows="5" name="description" placeholder="add description" />
            </div>
            <div className='input-control'>
              <label htmlFor='description'>Image</label>
              <input type="text" placeholder='add image url'/>
            </div>
            <div className='input-control'>
              <button type='submit'>Add Post</button>
            </div>
          </form>
      </div>
    </div>
  )
}
