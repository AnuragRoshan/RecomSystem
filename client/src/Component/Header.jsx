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

  //   *****************Provided On Scroll Effect*****************
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#19272ec2") : setnavColor("#f5f5f5");
    window.scrollY > 10 ? setnavSize("4.5rem") : setnavSize("5.5rem");
    window.scrollY > 10 ? setNavTextCol("white") : setNavTextCol("black");
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
    }
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
            Cryptracker
          </Typography>
          <Button   className={classes.btn} style={{ margin: "2rem" }}>Ranking</Button>
          <Button  className={classes.btn} style={{ marginRight: "2rem" }}>
            Watchlist
          </Button>
          <Button
           className={classes.btn}
            style={{ color: navTextCol, margin: "0rem" }}
            onClick={() => navigate("/login")}
          >
            Trending Today
          </Button>
          <TextField
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
          <Button
          className={classes.btn}
            style={{ marginLeft: "2rem", height: "3rem" }}
          >
            <AccountCircleIcon fontSize="large" />
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
