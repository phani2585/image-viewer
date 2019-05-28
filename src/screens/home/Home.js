/* Work In Progress on Home Page : Retrieve info from backend response JSON, Like & Comment functionalities, Display cards as LIST */

import React, { Component } from 'react';
import './Home.css';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Header from '../../common/header/Header';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import testData from '../../common/Test';
import hearticon from '../../assets/icon/hearticon.svg';
//import hearticon_black from '../../assets/icon/hearticon_black.svg';

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
        maxWidth: '100%',
        margin: '8px',
        shadow: '20px',
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
        cursor: 'pointer',
        
        },
    
});

/*Class component Home defined with constructor & it's states */

class Home extends Component {

    constructor() {
        super();
        this.state = {
            unixDateTimestamp: [],
            ownerInfo: [],
            mediaInfo: [],
            isHeartIconSelected :false
            

        }
    }



    /* Event  Handler Functions Definitions */
    /* Functions for iconClickHandler(),
                     imageCommentChangehandler() &          
                     addCommentonClickHandler() 
                                needs to be working */

    

    /*Code written to make two API calls as per the definitions provided in problem statement */

    componentWillMount() {

        // Get owner info after authenticating the  accessToken generated 
        let ownerData = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
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
                that.setState({
                    mediaInfo: JSON.parse(this.responseText).data,
                    //unixDateTimestamp :JSON.parse(this.responseText).data.created_time
                });
            }
        })
        xhrMediaData.open("GET", this.props.baseUrl + "media/recent/?access_token=13521022383.d5e23ae.c9785a17269b494eb996c2cbc490a6f3");
        xhrMediaData.send(mediaData);
    }

    /* Rendering JSX elements on the Login Page as per the design requirements */

    /* Header needs to be edited */
    /* Various data items have to be accessed from API response as this.state.ownerInfo/mediaInfo in place of testData[0].variable */
    /* hash Tags have to be in proper format and in Blue colour */


    render() {
        const { classes } = this.props;

        return (
            <div>
                <Header />

                <div className= "cardStyle">
                    <br />
                    <GridList cellHeight={"auto"} className={classes.gridListMain} cols={2}>
                        {testData.map(image => (

                            <GridListTile key={"image" + image.id} cols={image.cols || 1}>
                                <Grid container className={classes.root} spacing={16}>
                                    <Grid item>
                                    <Card className={classes.card}>

                                        <CardHeader 
                                            avatar={
                                                <Avatar className={classes.bigAvatar}>
                                                    <img src={image.profile_picture} alt={"logo"} /></Avatar>
                                            }
                                            title={image.username}
                                            subheader={image.created_time} />


                                        <CardContent>
                                            <img src={image.url} alt={image.text} className="image-properties" />
                                            <hr />
                                            <Typography variant="caption">{image.text}</Typography>
                                            <Typography>{image.tags}</Typography>
                                            <div className="likesFont">
                                            <Typography variant="h5" >
                                            <img src={hearticon} alt={"heartlogoTransparent"}   onClick={() => this.iconClickHandler()} />
                                              {image.likes.count} Likes</Typography></div>
                                            <br /><br />
                                            <FormControl >
                                                <InputLabel htmlFor="imagecomment">Add a Comment</InputLabel>
                                                <Input id="imagecomment" type="text" onChange={this.imageCommentChangeHandler} />
                                            </FormControl>
                                            <Button variant="contained" color="primary" onClick={this.addCommentOnClickHandler}>ADD</Button>
                                        </CardContent>

                                    </Card>
                                    
                                    </Grid>
                                    </Grid>
                        </GridListTile>
                         ))};
                         
                    </GridList>

                </div>

            </div>

        )
    }
}

export default withStyles(styles)(Home);


