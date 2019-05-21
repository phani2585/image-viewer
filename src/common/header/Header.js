//import React, { Component } from 'react';
import React from 'react';
import './Header.css';


const Header = function (props) {
    return (
        <div className="app-header app-logo">
            {props.heading}
            <div className="right-text">
            {props.text}
            </div>
            
        </div>
    )
}

export default Header;