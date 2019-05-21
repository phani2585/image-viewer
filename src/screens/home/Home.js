import React, { Component } from 'react';
//import Profile from '../../screens/profile/Profile';
import './Home.css';
import Header from '../../common/header/Header';
//import {BrowserRouter as Router, Route} from 'react-router-dom';

class Home extends Component {

    constructor() {
        super();
        this.baseUrl="https://api.instagram.com/v1/users/self/?access_token=13521022383.d5e23ae.c9785a17269b494eb996c2cbc490a6f3";

        }
    
    render() {
        return (	    
            <div>
            
            <Header />
            Home Page 
            </div>
        )
    }
}

export default Home;