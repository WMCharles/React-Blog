import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import About from './components/About/About';
import AddPost from './components/posts/AddPost';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import NoPage from './components/ErrorPage/NoPage';
import NavBar from './components/NavBar/NavBar';

import './App.css';
import PostItem from './components/posts/PostItem';

function App() {
  // Post state
  const [post, setPost] = useState([])

  // Fetch data
  useEffect(
    () => {
      fetch("http://localhost:8000/posts")
      .then((res) => (res.json()))
      .then((data) => setPost(data))
    },
    []
  )
  
  //Update post state as data is added to server
  function addPostItem(item){
    const newPost = [...post, item]
    setPost(newPost)
  }

  // Implementing search functionality
  const [query, setQuery] = useState("")

  const keys = ["description", "title"]
  const search = (data) => {
    return data.filter((item) => 
            keys.some((key) => 
                item[key].toUpperCase().includes(query)
            )
    )
}


  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home PostsData={search(post)} input={setQuery}/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="addpost" element={<AddPost addPostItem={addPostItem}/>}/>
          <Route path="post/edit/:id" element={<AddPost addPostItem={addPostItem}/>}/>
          <Route path="post/:title" element={<PostItem PostsData={post}/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
