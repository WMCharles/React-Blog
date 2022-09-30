import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import About from './components/About/About';
import AddPost from './components/posts/AddPost';
import Home from './components/Home/Home';
import Posts from './components/posts/Posts';
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
      fetch("http://localhost:8001/posts")
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home PostsData={post}/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="posts" element={<Posts/>}>
            <Route path="addpost" element={<AddPost addPostItem={addPostItem}/>}/>
          </Route>
          <Route path="posts/:title" element={<PostItem PostsData={post}/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
