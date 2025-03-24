// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Community from './pages/Community';
import Post from './pages/Post';
import Profile from './pages/Profile';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <Router>
      <div className="App">
        <Header user={user} setUser={setUser} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/r/:communityId" element={<Community />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="/user/:userId" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
