/* Work In Progress on Profile Page */
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
//import tileData from './tileData';
//import Apionehardcodeddata from '../../common/Apionehardcodeddata';
import apiData2 from '../../common/Apitwo';
im

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
});

class Profile extends Component {

    constructor() {
        super();
        this.url1 = "https://api.instagram.com/v1/users/self/?access_token=13521022383.d5e23ae.c9785a17269b494eb996c2cbc490a6f3";
        this.url2 = "https://api.instagram.com/v1/users/self/media/recent/?access_token=13521022383.d5e23ae.c9785a17269b494eb996c2cbc490a6f3";
        this.state = {
            ownerInfo: [],
            mediaInfo: []
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

                    ownerInfo: JSON.parse(this.responseText).images
                });


            }

        })
        xhr.open("GET", this.url1);
        xhr.send(ownerData);

        // Get media info of owner of accessToken
        let mediaData = null;
        let xhrMediaData = new XMLHttpRequest();

        xhrMediaData.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText.images);
                that.setState({

                    mediaInfo: JSON.parse(this.responseText).images
                    
                });
                


            }

        })
        xhrMediaData.open("GET", this.url2);
        xhrMediaData.send(mediaData);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div>
                    <Header heading="Image Viewer"/>
                    <span className="spanStyle">Profile Page</span>
                    <h1>Test </h1>
                </div>
            
            <div className={classes.root}>
                <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
                    {apiData2.map(image => (
                        <GridListTile  key={"grid" + image.id}>
                            <img src={image.profile_picture}  alt={image.full_name} />
                            <GridListTileBar
                                title={image.full_name} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>
        )
    }
}


export default withStyles(styles)(Profile);