/* Work In Progress on Home Page */

import React, { Component } from 'react';
import './Home.css';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import hearticon from '../../assets/icon/hearticon.svg';
import Header from '../../common/header/Header';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import apiData1 from '../../common/Apidata1';
import apiData2 from '../../common/Apidata2';
import testData from '../../common/Test';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
//import SearchBox from '../../common/SearchBox';
//import CardList from '../../common/CardList';



/* DO NOT FORGET to Delete commented and unnecessary imports at the end */

//import Apione from '../../common/Apione';
//import GridList from '@material-ui/core/GridList';
//import GridListTile from '@material-ui/core/GridListTile';
//import tileData from './tileData';
//import MenuIcon from '@material-ui/icons/Menu';
//import SearchIcon from '@material-ui/icons/Search';
//import IconButton from '@material-ui/core/IconButton';

//import first from '../../assets/images/first.jpg';
//import second from '../../assets/images/second.jpg';
//import fifth from '../../assets/images/fifth.jpg';

//import Input from '@material-ui/core/Input';
//import PropTypes from 'prop-types';
//import FormHelperText from '@material-ui/core/FormHelperText';

//import apiData2 from '../../common/Apitwo';
//import profilepic from '../../assets/images/profilepic.jpg';

/*Imported all necessary files and components */

/* Defined classes styles for all relevant imported components */

const styles = theme => ({
    root: {
        width: '100%',
    },
    
    grow: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 550,

    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    }
    
});


    

/*Class component Home defined with constructor & it's states */

class Home extends Component {

    constructor() {
        super();
        this.state = {
            ownerInfo: [],
            mediaInfo: [],
            searchfield: ''
        }
    }

    /* Event  Handler Functions Definitions 
    
      

      onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
    */


    /*Code written to make two API calls as per the definitions provided in problem statement */

    componentWillMount() {

        // Get owner info after authenticating the  accessToken generated 
        let ownerData = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
                that.setState({
                    ownerInfo: JSON.parse(this.responseText).data
                });
            }
        })
        xhr.open("GET", this.props.baseUrl + "?access_token=13521022383.d5e23ae.c9785a17269b494eb996c2cbc490a6f3");
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
        xhrMediaData.open("GET", this.props.baseUrl + "media/recent/?access_token=13521022383.d5e23ae.c9785a17269b494eb996c2cbc490a6f3");
        xhrMediaData.send(mediaData);
    }

    /* Rendering JSX elements on the Home Page as per the design requirements */

    render() {

        const { classes } = this.props;
        
        return (
            <div>
                <div className="app-header app-logo">
                    <Header >
                    
                    <div className="search-box">SearchBox</div>
                    <div classname="profile_icon">ProfileIcon</div>
                    </Header>
                </div>
                
                

                <div className="card-style">
                    <br/><br/>
                    {testData.map(image => (
                    <Grid container spacing={24}>
                        <Grid  item xs={12} sm={6}>
                            <Card className={classes.card}>
                                <CardHeader
                                    avatar={
                                        <Avatar  className={classes.bigAvatar}>
                                            <img src={image.profile_picture} alt={"logo"} /></Avatar>
                                            }
                                            title={image.username}
                                            subheader={image.created_time} />
                                <CardContent>
                                    <img src={image.url} alt={"uploadedpic1"} className="image-properties" />
                                    <hr />
                                    <Typography variant="caption">{image.text}</Typography>
                                    <Typography>{image.text}</Typography>
                                    <img src={hearticon} alt={"heartlogo"} onClick={() => this.iconClickHandler()} className="iconColor" />
                                    <br /><br />
                                    <FormControl >
                                        <InputLabel htmlFor="imagecomment">Add a Comment</InputLabel>
                                        <Input id="imagecomment" type="text"  onChange={this.imageCommentChangeHandler} />
                                    </FormControl>
                                    <Button variant="contained" color="primary" onClick={this.addCommentOnClickHandler}>ADD</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid  item xs={12} sm={6}>
                        
                            <Card className={classes.card}>
                                <CardHeader
                                    avatar={
                                        <Avatar  className={classes.bigAvatar}>
                                            <img src={image.profile_picture} alt={"logo"} /></Avatar>
                                            }
                                            title={image.username}
                                            subheader={image.created_time} />
                                <CardContent>
                                    <img src={image.url} alt={"uploadedpic1"} className="image-properties" />
                                    <hr />
                                    <Typography variant="caption">{image.text}</Typography>
                                    <Typography>{image.text}</Typography>
                                    <img src={hearticon} alt={"heartlogo"} onClick={() => this.iconClickHandler()} className="iconColor" />
                                    <br /><br />
                                    <FormControl >
                                        <InputLabel htmlFor="imagecomment">Add a Comment</InputLabel>
                                        <Input id="imagecomment" type="text"  onChange={this.imageCommentChangeHandler} />
                                    </FormControl>
                                    <Button variant="contained" color="primary" onClick={this.addCommentOnClickHandler}>ADD</Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    
                    </Grid>
                     ))}
                  
           </div>                        
                    

            </div>
            
            
		)
    }
}


    export default withStyles(styles)(Home);


