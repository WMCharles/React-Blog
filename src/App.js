import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import About from './components/About';
import AddPost from './components/AddPost';
import Home from './components/Home';
import Posts from './components/Posts';
import NoPage from './components/NoPage';
import NavBar from './components/NavBar';
import PostList from './components/PostList';

import './App.css';
import PostItem from './components/PostItem';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="posts" element={<Posts/>}>
            <Route path="addpost" element={<AddPost/>}/>
            <Route path="list" element={<PostList/>}/>
            <Route path=":title" element={<PostItem/>}/>
          </Route>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
