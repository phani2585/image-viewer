import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Controller from '../src/common/Controller';
//import Profile from '../src/screens/profile/Profile';
//import Home from '../src/screens/home/Home';
import 'typeface-roboto';



//ReactDOM.render(<Home/> , document.getElementById('root'));


ReactDOM.render(<Controller/>, document.getElementById('root'));

/* Temporarily used to view content of Profile page till routing to Profile Page developed*/
//ReactDOM.render(<Profile/>, document.getElementById('root'));