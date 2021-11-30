import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginHeader from './LoginHeader.js';
import Login from './Login.js';
import RegisterHeader from './RegisterHeader.js';
import Register from './Register.js';
import HomeHeader from './HomeHeader.js';
import Sidebar from './Sidebar.js';
import Sidebar2 from './Sidebar2.js';

function App() {

  const [user, setUser] = useState([]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginHeader />
            <Login />
          </Route>
          <Route path="/register">
            <RegisterHeader />
            <Register />
          </Route>
          <Route path="/">
            <HomeHeader user={user} />
            <div className="app__page">
              <Sidebar user={user} />
              <div className="app__posts">
              </div>
              <Sidebar2 />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

