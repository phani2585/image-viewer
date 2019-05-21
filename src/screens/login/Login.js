import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './Login.css';
//import Home from '../../screens/home/Home';
//import Profile from '../../screens/profile/Profile';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Link } from 'react-router-dom';




class Login extends Component {

    constructor() {
        super();
        this.state = {
            usernamePasswordIncorrect:"dispNone",
            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            username: "",
            password: "",
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true
        }
        
    }



    loginClickHandler = () => {

        let mockUsernameInstagram = "PGDSD_107";
        let mockPasswordInstagram = "PGDSD@107";
        let accessToken="13521022383.d5e23ae.c9785a17269b494eb996c2cbc490a6f3";
        
    
        if (this.state.username === mockUsernameInstagram && this.state.password === mockPasswordInstagram) {
            window.sessionStorage.setItem("access-token", accessToken);
        }

            this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
            this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
            this.state.username !== mockUsernameInstagram || this.state.password !== mockPasswordInstagram  ? this.setState({ usernamePasswordIncorrect:"dispBlock" }) :
        this.setState({ usernamePasswordIncorrect:"dispNone" });
    }
            
            
            

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value })
    }
    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }
    render() {
        return (


            <div>
                
                
                <Header />
                <div className="cardStyle">

                    <Card >
                        <CardContent>

                            <Typography variant="title">LOGIN</Typography>
                            <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br />
                            <FormControl required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler} />
                                <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                                <br/>
                                <FormHelperText className={this.state.usernamePasswordIncorrect}><span className="red">Incorrect username and/or password</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <Link to={"/home/"}><Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button></Link>

                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;