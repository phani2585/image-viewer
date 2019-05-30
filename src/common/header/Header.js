/*WORK IN PROGRESS */
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './Header.css'; 
import Avatar from '@material-ui/core/Avatar';
import testData from '../Test';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Profile from '../../screens/profile/Profile';
import Login from '../../screens/login/Login';


/* Header component class is defined in this file.This file is COMMON for all the pages */



class Header extends Component {

    constructor() {
        super();
        this.state = {
            menuIsOpen:false,
            simpleMenu:"",
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true
        }
    }

    closeMenuHandler =() =>{
        this.setState({menuIsOpen:false});
    }

    openMenuHandler = () => {
        this.setState({ menuIsOpen:true });
    }

    myAccountClickHandler = (e) => {
        ReactDOM.render(<Profile/>, document.getElementById('root'));
    }

    logOutClickHandler = (e) =>{
        let accessToken = "13521022383.d5e23ae.c9785a17269b494eb996c2cbc490a6f3";
        window.sessionStorage.setItem("access-token", accessToken);
        ReactDOM.render(<Login/>, document.getElementById('root'));
    }


    render() {
        return (
            <div>
                <header className="app-header app-logo">
                  Image Viewer
                  {<Avatar className="avatar">
                                            <img aria-haspopup={true} aria-controls="simpleMenu" onClick={this.openMenuHandler} src={testData[0].profile_picture} alt={"logo"} /></Avatar>}
                                            <Menu id="simpleMenu"
                                            isOpen={this.state.menuIsOpen}
                                            onRequestClose={this.closeMenuHandler}
                                        
                                    >
                                        <MenuItem onClick={this.myAccountClickHandler}>My Account</MenuItem>
                                        <hr/>
                                        <MenuItem onClick={this.logOutClickHandler}>Log Out</MenuItem>
                                        </Menu>
                </header>
            </div>
        )
    }
}

export default Header;