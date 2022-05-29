import {
  AppBar,
  Button,
  makeStyles,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";

export default function Header({ user }) {
  const [navSize, setnavSize] = useState("5.5rem");
  const [navColor, setnavColor] = useState("#e2e7e9");
  const [navTextCol, setNavTextCol] = useState("black");
  const [loginpadding, setLoginpadding] = useState("2.5rem");

  //   *****************Provided On Scroll Effect*****************
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#19272ec2") : setnavColor("#e2e7e9");
    window.scrollY > 10 ? setnavSize("4.5rem") : setnavSize("5.5rem");
    window.scrollY > 10 ? setNavTextCol("white") : setNavTextCol("black");
    window.scrollY > 10 ? setLoginpadding("1rem") : setLoginpadding("1.9rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  //   ***************** On Scroll Effect Ended*****************

  // ****************************logout functionality starts**********************************

  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  // ****************************logout functionality end**********************************

  //**************************Search Part Start***************************************/

  const [searchText, setSearchText] = useState("");
  // const str=searchText

  //**************************Search Part End***************************************/

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
    btn: {
      color: navTextCol,
    },
    cssLabel: {
      color: navTextCol,
      "&.Mui-focused": {
        color: navTextCol,
      },
    },
    multilineColor: {
      color: navTextCol,
      "&.Mui-focused": {
        color: navTextCol,
      },
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
        elevation={0}
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
            onClick={() => navigate("/home")}
            variant="h6"
            style={{ color: navTextCol }}
          >
            MoviesVerse
          </Typography>

          <Button
            className={classes.btn}
            style={{ color: navTextCol, marginInline: "2rem" }}
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
              classes: { root: classes.cssLabel, focused: classes.cssFocused },
            }}
            InputProps={{
              className: classes.multilineColor,
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
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            style={{ marginBottom: 15, color: setNavTextCol, height: "50px" }}
            onClick={() => navigate(`/search/${searchText}`)}
          >
            <SearchIcon />
          </Button>
          {user ? (
            <>
              <Button
                className={classes.btn}
                style={{
                  marginLeft: "1rem",
                  paddingBlock: loginpadding,
                }}
              >
                <Tooltip title={user.displayName} style={{ fontSize: "300px" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                      <AccountCircleIcon fontSize="large" />
                    </div>
                    <div>
                      <Typography style={{ fontSize: "12px" }}>
                        {user.name.givenName}
                      </Typography>
                    </div>
                  </div>
                </Tooltip>
              </Button>
              <Button
                onClick={logout}
                className={classes.btn}
                style={{
                  paddingBlock: loginpadding,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <LogoutIcon fontSize="small" />
                  </div>
                  <div>
                    <Typography style={{ fontSize: "8px" }}>Logout</Typography>
                  </div>
                </div>
              </Button>
            </>
          ) : (
            <Button
              onClick={() => navigate("/login")}
              className={classes.btn}
              style={{
                height: "3rem",
                paddingBlock: loginpadding,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <AccountCircleIcon fontSize="small" />
                </div>
                <div>
                  <Typography>Login</Typography>
                </div>
              </div>
            </Button>
          )}
          {/* </Link> */}
        </Toolbar>
      </AppBar>
    </>
  );
}
