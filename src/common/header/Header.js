/*WORK IN PROGRESS */

import React, { Component } from 'react';
import './Header.css';

/* Header component class is defined in this file.This file is COMMON for all the pages */

class Header extends Component {
    render() {
        return (
            <div>
                <header className="app-header app-logo">
                  Image Viewer
                </header>
            </div>
        )
    }
}

export default Header;