import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import About from './components/About/About';
import AddPost from './components/posts/AddPost';
import Home from './components/Home/Home';
import Posts from './components/posts/Posts';
import NoPage from './components/ErrorPage/NoPage';
import NavBar from './components/NavBar/NavBar';

import './App.css';
import PostItem from './components/posts/PostItem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="posts" element={<Posts/>}>
            <Route path="addpost" element={<AddPost/>}/>
          </Route>
          <Route path="posts/:title" element={<PostItem/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
