/* Work In Progress on Profile Page */

import React, { Component } from 'react';
import './Profile.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
//import apiData2 from '../../common/Apidata2';
import testData from '../../common/Test';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import pencil from '../../assets/icon/pencil.png';

/* DO NOT FORGET to Delete commented and unnecessary imports at the end */

//import apiData2 from '../../common/Apitwo';
//import { Link } from 'react-router-dom';
//import tileData from './tileData';
//import Apionehardcodeddata from '../../common/Apionehardcodeddata';

/*Imported all necessary files and components */

/* Defined classes styles for all relevant imported components */

const styles = theme => ({
    
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper
        },
        bigAvatar: {
            margin: '20px',
            width: '60px',
            height: '60px',
            float: 'center',
            display:'flex'

        },
        gridListMain: {
            transform: 'translateZ(0)',
            cursor: 'pointer'
        }
    });
    


/*Class component Profile defined with constructor & it's states */

class Profile extends Component {

    constructor() {
        super();
        this.state = {
            ownerInfo: [],
            mediaInfo: []
        }
    }


/* Event  Handler Functions Definitions (Commented as of now , Uncomment/Delete section at the end of this file development)
    
      movieNameChangeHandler = event => {
          this.setState({ movieName: event.target.value });
      }
  
      genreSelectHandler = event => {
          this.setState({ genres: event.target.value });
      }
  
      artistSelectHandler = event => {
          this.setState({ artists: event.target.value });
      }   Sample code written */


    /*Code written to make two API calls as per the definitions provided in problem statement */


    componentWillMount() {
        
        // Get owner info after authenticating the  accessToken generated 
        let ownerData = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                //console.log(this.responseText);
                that.setState({
                    ownerInfo: JSON.parse(this.responseText).data
                });
            }
        })
        xhr.open("GET", this.url1);
        xhr.send(ownerData);

        // Get media info of owner after authenticated by accessToken
        let mediaData = null;
        let xhrMediaData = new XMLHttpRequest();

        xhrMediaData.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
                that.setState({
                    mediaInfo: JSON.parse(this.responseText).data
                });
            }
        })
        xhrMediaData.open("GET", this.url2);
        xhrMediaData.send(mediaData);
    }

    /* Rendering JSX elements on the Profile Page as per the design requirements */

    render() {

        const { classes } = this.props;

        return (
            <div>
                <div>
                    <Header heading="Image Viewer"/>
                    
                </div>

                <div className="infoSection">

                <div className="row">

                    <div className="column-left">
                    </div>

                    <div className="column-center">

                       <div className="row1">
                        <div className="col-left">
                        {<Avatar  className={classes.bigAvatar}>
                        <img src={testData[0].profile_picture} alt={"logo"} />
                       </Avatar>}
                        </div>

                        <div className="col-center">
                        <span><div className="row-one">{testData[0].username}</div></span>
                        <span><div className="row-two">
                            
                            
                    <div className="col-l">Posts : {testData[0].posts}</div>        
                    <div className="col-c">Follows : {testData[0].follows}</div>
                    <div className="col-r">Followed By : {testData[0].followed_by}</div>
                    </div></span>

                        <div className="row-three">
                        {testData[0].full_name}
                        <Button variant="fab" color="secondary" className="edit-icon-button"><img src={pencil} alt={"pencil-logo"}/></Button> </div>
                        </div>

                        <div className="col-right">
                        </div>
                        </div>


                    </div>

                    <div class="column-right">                        
                    </div>
                                           
                </div>

                </div>

                <div className="flex-container">
                    <div className="left">
                        <GridList cellHeight={350} cols={4} className={classes.gridListMain}>
                            {testData.map(image => (
                                <GridListTile className="released-movie-grid-item" key={"grid" + image.id}>
                                    <img src={image.url} className="movie-poster" alt={image.text} />
                                    <GridListTileBar
                                        title={image.text}
                                        subtitle={<span>Created  Time: {(image.created_time)}</span>}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    <div className="right">

                    </div>
                </div>
            </div>
                 
                
            
        
        )
    }
}


export default withStyles(styles)(Profile);