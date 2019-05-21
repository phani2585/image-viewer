import React, { Component } from 'react';
import Login from '../../src/screens/login/Login';
import Home from '../../src/screens/home/Home';
//import Profile from '../../src/screens/Profile/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Controller extends Component {
    render() {
        return (
            <Router>
                <div className="main-container">
                    <Route exact path='/' render={(props) => <Login {...props}  />} />
                    <Route path='/home/' render={(props) => <Home {...props} />} />
                    
                </div>
            </Router>
        )
    }
}

export default Controller;