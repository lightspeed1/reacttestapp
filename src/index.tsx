import React, {Component, CSSProperties, useState, useLayoutEffect} from 'react';
import ReactDOM from "react-dom";
import "./styles.css"
import { start } from 'repl';
import Button from '@material-ui/core/Button';
import { Box, Input, SwipeableDrawer, Tab, IconButton, Avatar } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import Drawer from '@material-ui/core/Drawer';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import DehazeRoundedIcon from '@material-ui/icons/DehazeRounded';
import { positions } from '@material-ui/system';
import { createMuiTheme, ThemeProvider, makeStyles, createStyles } from '@material-ui/core/styles';
import {BreakpointOverrides} from "@material-ui/core/styles/createBreakpoints"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { orange } from '@material-ui/core/colors';
declare module "@material-ui/core/styles/createBreakpoints" {
    interface BreakpointOverrides {
      xs: true; // removes the `xs` breakpoint
      sm: true;
      md: true;
      lg: true;
      xl: true;
      tablet: false; // adds the `tablet` breakpoint
      laptop: false;
      desktop: false;
    }
  }
const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs:300,
        sm: 640,
        md: 1024,
        lg: 1280,
        xl: 1000
      },
    },
  });

const useStyles = makeStyles(
    {awesome: {
          color: "#FFFFFF"
      }
    }
  );
  const useStyles2 = makeStyles(
    {awesome: {
        color : "#000000"
      }
    }
  );
  const useStyles3 = makeStyles(
    {drawerPaper: {
      [theme.breakpoints.down("md")]:
      {
        width: "100%",
        height: 300
      },
      [theme.breakpoints.up("md")]:
      {
        width: 200,
        height: "100%"
      }
      }
    }
  );
  const useStylesCloseButton = makeStyles(
    {
      yo:
      {
        [theme.breakpoints.up("md")]:
        {
          display:"none"
        }
      }
    }
  );
  function SimpleMenu(props:any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <>
        <Button className = {props.className} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <img src = "smiley.jpg" className = "avatarThingy"></img>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </>
    );
  }
  
  function CustomCheckbox(props:any) {
    const me = props.this;
    const classes = useStyles();
    return (
        <>
        <Box position = "fixed" top = "0" left = "0">
            <IconButton classes={{root: classes.awesome}} onClick = {() => me.toggleDrawer()}>
                <DehazeRoundedIcon/>
            </IconButton>
        </Box>
        </>
    );
  }
  function CustomCheckboxA(props:any) {
    const [width, height] = useWindowSize();
    const me = props.this;
    if(width < 1024)
    {
      me.drawerType = "persistent";
      me.drawerLocation = "top";
    }
    else
    {
      me.drawerType = "permanent";
      me.drawerLocation = "left";
    }
    const classes = useStyles3();
    const closeButtonClass = useStylesCloseButton();
    return (
        <>
        <Drawer classes = {{paper:classes.drawerPaper}} open={me.state.drawerOpen} variant={me.drawerType} anchor={me.drawerLocation}>
            <IconButton classes = {{root:closeButtonClass.yo}} onClick = {()=> me.toggleDrawer()}> 
                <ArrowBackIosIcon/> 
            </IconButton>
            <Button startIcon={<HomeRoundedIcon />}  size = "large" variant="contained" color="primary" className = "unstyled-button">HOME</Button>
            <Button startIcon={<PeopleAltRoundedIcon />}  size = "large" variant="contained" color="primary" className = "cool-button">STUFF</Button>
            <Button startIcon={<SettingsApplicationsRoundedIcon />}  size = "large" variant="contained" color="primary" className = "cool-button">HI</Button>
            <Button size = "large" variant="contained" color="primary" className = "cool-button">ME</Button>
        </Drawer>
        </>
    );
  }
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

class Counter extends Component
{
    state : {count:number; allText :JSX.Element[]; messageText:string; drawerOpen: boolean}= 
    {
        count : 0,
        allText  : [],
        messageText : "",
        drawerOpen : false
    }
    drawerType = "persistent"
    drawerLocation = "left"
    style = () =>
    {
        return 1;
    }
    inputRef = React.createRef<HTMLInputElement>();
    render()
    {
      var {count} = this.state;
      return (
      <>
        <Box className = "topbar" display="flex" flexDirection="row" justifyContent="flex-end" alignItems="center"  flexWrap="wrap">
            <img src = "smiley.jpg"  className = "centered" alt = "smile"></img>
            <SimpleMenu></SimpleMenu>
        </Box>
        <CustomCheckbox this = {this}/>
        <CustomCheckboxA this = {this}/>

          <Box padding = "5px" className = "input chatContainer">
            <>
              {this.state.allText}              
            </>
          </Box>
          <Box className = "hi hi2"   display="flex" flexDirection="row" flexWrap="nowrap" justifyContent="flex-start" alignItems="center" >
            <input className = "myInput" name = "messageText" onChange = {(e) => this.onChangeValue(e)} value = {this.state.messageText} ref = {this.inputRef} type="text" placeholder = "Your Message here"></input>
            <Button variant="contained" color = "primary" className = "sendButton" onClick = {()=>this.myFunction()}>SEND</Button>
          </Box>
      </>);
    }
    toggleDrawer()
    {
        console.log(window.innerWidth);
        console.log("wow");
        this.setState({drawerOpen:!this.state.drawerOpen});
    }
    onChangeValue(e :any)
    {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    myFunction()
    {
        let res :string = this.state.messageText;
        let empty:boolean = true;
        for(let x = 0; x < res.length; x++)
        {
	        if (res[x] !== " ")
            {
                empty = false;
                break;
            }
        }
        if (empty === false && res !== "")
        {
            this.setState({count: (this.state.count)+1});
        this.setState({allText : this.state.allText.concat(<Box fontFamily= "Roboto" bgcolor = "primary.main" padding = "10px" boxShadow = {2} borderRadius = {16} color="secondary.main" className = "chatBubble">{"\n"+this.inputRef.current?.value}</Box>)})
        }
        this.setState({messageText:""});
    }
}
ReactDOM.render(<Counter/>, document.getElementById("root"));
