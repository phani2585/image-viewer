/*WORK IN PROGRESS */

import React, { Component } from 'react';
import Login from '../../src/screens/login/Login';
import Home from '../../src/screens/home/Home';
import Profile from '../../src/screens/profile/Profile';
import { BrowserRouter as Router, Route } from 'react-router-dom';


/* Base url of Instagram app & routing to all pages defined in Controller class.This file is COMMON for all the pages  */

class Controller extends Component {

    constructor() {
        super();
        this.baseUrl = "https://api.instagram.com/v1/users/self/";

    }

    render() {
        return (
            <Router>
                <div className="main-container">
                    <Route exact path='/' render={(props) => <Login {...props} baseUrl={this.baseUrl} />} />
                    <Route path='/home/' render={(props) => <Home {...props} baseUrl={this.baseUrl} />} />
                    <Route path='/profile/' render={(props) => <Profile {...props} baseUrl={this.baseUrl} />} />
                </div>
            </Router>
        )
    }
}

export default Controller;