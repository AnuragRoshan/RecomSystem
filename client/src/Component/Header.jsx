import {
  AppBar,
  Button,
  makeStyles,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  const [navSize, setnavSize] = useState("5.5rem");
  const [navColor, setnavColor] = useState("white");
  const [navTextCol, setNavTextCol] = useState("black");
  const [loginpadding, setLoginpadding] = useState("2.5rem");

  //   *****************Provided On Scroll Effect*****************
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#19272ec2") : setnavColor("#e2e7e9");
    window.scrollY > 10 ? setnavSize("4.5rem") : setnavSize("5.5rem");
    window.scrollY > 10 ? setNavTextCol("white") : setNavTextCol("black");
    window.scrollY > 10 ? setLoginpadding("2rem") : setLoginpadding("2.5rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  //   ***************** On Scroll Effect Ended*****************

  const useStyles = makeStyles(() => ({

    body: {
      color: "pink",
    },
    title: {
      //   flex: 1,
      color: "#123d6e",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
      paddingLeft: "10px",
    },
    btn:{
      color: navTextCol,
    },
    cssLabel: {
      color: navTextCol,
      "&.Mui-focused": {
        color: navTextCol
      }
    },
  }));
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <AppBar
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 0.5s",
        }}
      >
        <Toolbar
          style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 0.5s",
          }}
        >
          <Typography
            className={classes.title}
            onClick={() => navigate("/")}
            variant="h6"
            style={{color:navTextCol}}
          >
            G-Tracker
          </Typography>
          <Button   className={classes.btn} style={{ margin: "2rem" }}>Ranking</Button>
          {/* <Button  className={classes.btn} style={{ marginRight: "2rem" }}>
            Watchlist
          </Button> */}
          <Button
           className={classes.btn}
            style={{ color: navTextCol, marginRight: "2rem" }}
            onClick={() => navigate("/trending")}
          >
            Trending Today
          </Button>
          <Button
           className={classes.btn}
            style={{ color: navTextCol, margin: "0rem" }}
            onClick={() => navigate("/upcoming")}
          >
             Upcoming
          </Button>
          <TextField
           InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused
            }
          }}
            id="outlined-search"
            label="Search Movies Here"
            type="search"
            
            style={{
              marginLeft: "2rem",
              marginBottom: 15,
              flex: "1",
              color: setNavTextCol,
            }}
          />
          {/* <Link to="/login"> */}
          <Button onClick={() => navigate("/login")}
          className={classes.btn}
            style={{ marginLeft: "2rem", height: "3rem" ,paddingBlock:loginpadding }}
            >
              <div style={{display:"flex",flexDirection:"column"}}>
            <div><AccountCircleIcon fontSize="large" /></div>
            <div><Typography>Login</Typography></div>
            </div>
          </Button>
          {/* </Link> */}
        </Toolbar>
      </AppBar>
    </>
  );
}
