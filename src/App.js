// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/r/:communityId" component={Community} />
            <Route path="/post/:postId" component={Post} />
            <Route path="/user/:userId" component={Profile} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;