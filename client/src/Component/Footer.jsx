import {
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";


const Footer = ({ user }) => {
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

  const [searchText, setSearchText] = useState("");
  const navigate=useNavigate()
  return (
    <Container
      style={{
        backgroundColor: "#e2e7e9",
        alignItems: "center",
        marginTop: "9.1rem",
        height: "40vh",
        paddingBlock: "40px",
        display: "flex",
        bottom: "0px",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          paddingLeft: "10px",
        }}
      >
        {
        user?(<><Typography style={{ color: "black" }}>
          <Button>

          Hey Wassup  {user.name.givenName}
          </Button>
        </Typography>
          </>
        ):(<Typography style={{ color: "black" }}>
          <Button>Login</Button>
        </Typography>
        )
        }
        <a style={{textDecoration:"none"}} href="https://anuragroshan.github.io/mycv/">
        
        <Typography style={{ color: "black" }}>
          <Button>About Developer</Button>
        </Typography>
        </a>
        <Typography style={{ color: "black" }}>
          <Link to={'/trending'} style={{textDecoration:"none"}}><Button >Trendings</Button></Link>
        </Typography>
        <div style={{display:"flex",flexDirection:"row"}}>
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
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
            style={{ marginBottom: 15 , height: "50px" }}
            onClick={() => navigate(`/search/${searchText}`)} 
          >
            <SearchIcon />
          </Button>
          </div>
      </div>

      <div
        style={{
          flex: 3,
          display: "flex",
          flexDirection: "column",
          paddingLeft: "1px",
          width: "60%",
        }}
      >
        {" "}
        <div>
          <Typography
            className={classes.title}
            onClick={() => Navigate("/")}
            variant="h6"
            padding="10px"
            style={{ color: "black" }}
            align="center"
          >
            MoviesVerse
          </Typography>
        </div>
        <Typography style={{ marginBlock: "20px" }} align="center">
          Connect With Us
        </Typography>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button style={{ flex: "1" }} align="center">
            <InstagramIcon fontSize="large" />
          </Button>
          <Button style={{ flex: "1" }} align="center">
            <MailOutlineIcon fontSize="large" />
          </Button>
          <Button style={{ flex: "1" }} align="center">
            <TwitterIcon fontSize="large" />
          </Button>
          <Button style={{ flex: "1" }} align="center">
            <LinkedInIcon fontSize="large" />
          </Button>
          <Button style={{ flex: "1" }} align="center">
            <GitHubIcon fontSize="large" />
          </Button>
        </div>
        <div>
          <Typography
            style={{ fontWeight: "600", paddingTop: 10 }}
            align="center"
          >
            © 2022 MoviesVerse
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
