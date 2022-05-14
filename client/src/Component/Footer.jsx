import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Navigate } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const useStyles = makeStyles(() => ({
    body: {
      fontFamily: "Montserrat",
    },
    title: {
      color: "#123d6e",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));
  const classes = useStyles();
  return (
    <Container
      style={{
        backgroundColor: "#e2e7e9",
        alignItems: "center",
        marginTop: "9.1rem",
        height: "40vh",
        paddingBlock: "40px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* <div style={{ flex: 1, display: "flex", flexDirection: "column" }}> */}
        {/* <div style={{ flex: 1 }}>
          <Typography
            className={classes.title}
            onClick={() => Navigate("/")}
            variant="h6"
            style={{ color: "black" }}
          >
            G-Tracker
          </Typography>
          <Typography style={{ fontWeight: "600" }}>
            We uses Machine Learning Algorithms to Recommend You Best Movies On
            the Basis Of your Interest and Watch History
          </Typography>
          <Typography style={{ fontWeight: "600", paddingTop: 10 }}>
            © 2022 G-Tracker
          </Typography> */}
        {/* </div> */}
      {/* </div> */}
      
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          paddingLeft: "10px",
        }}
      >
        <Typography style={{ color: "black" }}>
          <Button>Login</Button>
        </Typography>
        <Typography style={{ color: "black" }}>
          <Button>About US</Button>
        </Typography>
        <Typography style={{ color: "black" }}>
          <Button>Trendings</Button>
        </Typography>
        <TextField
          InputLabelProps={{}}
          id="outlined-search"
          label="Search Movies Here"
          type="search"
          style={{
            width: "100%",
            color: "black",
            marginLeft: "9px",
          }}
        />
      </div>

      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          paddingLeft: "1px",
        }}
      >
          <Typography style={{marginBlock:"20px"}} align="center">
              Connect With Us
              </Typography>
          <div style={{display:"flex",flexDirection:"row"}}>
       <Button style={{flex:"1"}} align="center"><InstagramIcon fontSize="large" /></Button>
       <Button style={{flex:"1"}}align="center"><MailOutlineIcon fontSize="large" /></Button>
       <Button style={{flex:"1"}}align="center"><TwitterIcon fontSize="large" /></Button>
       <Button style={{flex:"1"}}align="center"><LinkedInIcon fontSize="large" /></Button>
       <Button style={{flex:"1"}}align="center"><GitHubIcon fontSize="large" /></Button>
        </div>
        <div>
        <Typography
            className={classes.title}
            onClick={() => Navigate("/")}
            variant="h6"
            padding="10px"
            style={{ color: "black" }}
            align="center"
          >
            G-Tracker
          </Typography>
        </div>
        <div>
        <Typography style={{ fontWeight: "600", paddingTop: 10 }} align="center">
            © 2022 G-Tracker
          </Typography> 
        </div>
      </div>
    </Container>
  );
};

export default Footer;
