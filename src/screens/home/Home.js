import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
//import InputBase from '@material-ui/core/InputBase';
//import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
//import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import './Home.css';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import subheader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Picture from '../../common/Picture';





const styles = theme => ({
    root: {
        width: '100%',
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
      },
    grow: {
        flexGrow: 1,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
    search: {
        position: 'relative',
        borderRadius: '4px',
        backgroundColor: '#c0c0c0',
        marginLeft: 0,
        width: '300px',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit,
            width: 'auto',
        },
    },
    searchIcon: {
        color: 'black',
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
});

class Home extends Component {

    constructor() {
        super();
        this.url1 = "https://api.instagram.com/v1/users/self/?access_token=13521022383.d5e23ae.c9785a17269b494eb996c2cbc490a6f3";
        this.url2 = "https://api.instagram.com/v1/users/self/media/recent/?access_token=13521022383.d5e23ae.c9785a17269b494eb996c2cbc490a6f3";
        this.state = {
            ownerInfo: [],
            mediaInfo:[]
        }
    }

    /* movieNameChangeHandler = event => {
          this.setState({ movieName: event.target.value });
      }
  
      genreSelectHandler = event => {
          this.setState({ genres: event.target.value });
      }
  
      artistSelectHandler = event => {
          this.setState({ artists: event.target.value });
      }   Sample code written */


    componentWillMount() {
        // Get owner info by accessToken
        let ownerData = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
               // console.log(this.responseText);
                that.setState({
                    ownerInfo: JSON.parse(this.responseText).data
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
             console.log(this.responseText);
             that.setState({
                 
                    mediaInfo: JSON.parse(this.responseText).user
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
            <div className="app-header">
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>

                            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                                Image Viewer
                                    </Typography>
                            <div className={classes.grow} />
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon />
                                </div>
                                <Input id="search-input" onChange={this.searchInputChangeHandler} />
                            </div>
                            <div>
                            <IconButton>
                        
                        </IconButton></div>
                            </Toolbar>
                            
                    </AppBar>
                </div>
            </div>
            <div className="cardStyle">
                <Card>
                    <CardHeader>
                    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src="./src/common/Picture.js" className={classes.bigAvatar} />
    </Grid>
                        
                        <subheader>

                        </subheader>
                    </CardHeader>
                    <CardContent>
                    

                        

                    </CardContent>
                </Card>

            </div>
            </div>

        )
    }


}



export default withStyles(styles)(Home);