/* Work In Progress on Profile Page */
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../../common/header/Header';



class Profile extends Component {

    constructor() {
        super();
        this.url1 = "https://api.instagram.com/v1/users/self/?access_token=13521022383.d5e23ae.c9785a17269b494eb996c2cbc490a6f3";
        this.url2 = "https://api.instagram.com/v1/users/self/media/recent/?access_token=13521022383.d5e23ae.c9785a17269b494eb996c2cbc490a6f3";
        this.state ={
            ownerInfo: [],
            mediaInfo:[]
        }
    }

    componentWillMount() {
        // Get owner info of accessToken
        let ownerData = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
                that.setState({
                    
                       ownerInfo: JSON.parse(this.responseText)
                });
                
                
            }
            
        })
        xhr.open("GET", this.url1 );
        xhr.send(ownerData);
    
        // Get media info of owner of accessToken
        let mediaData = null;
        let xhrMediaData = new XMLHttpRequest();
      
        xhrMediaData.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
                that.setState({
                    
                       mediaInfo: JSON.parse(this.responseText)
                });
                
                
            }
            
        })
        xhrMediaData.open("GET", this.url2 );
        xhrMediaData.send(mediaData);
    }


        render() {
            
                
            return (
                <div>
                    <Header />
                    <span className="spanStyle">Profile Page</span>
                    
                </div>
            )
        }
    }


    export default Profile;