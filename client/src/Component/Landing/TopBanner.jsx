import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const TopBanner = () => {
  const useStyle = makeStyles(() => ({
    btn: {
      margin: "1.2rem",
      color: "white",
      border: "solid 1px #97ebf4",
      backgroundColor: "black",

      "&:hover": {
        background: "#e2e7e9",
        color: "black",
        border: "solid 1px black",
      },
    },
    topDiv: {
      height: "90vh",
      backgroundColor: "#e2e7e9",
      marginTop: "5.5rem",
      display: "flex",
      width: "100%",
      flexDirection: "row",
      "@media (max-width:780px)": {
        flexDirection: "column",
        width: "100%",
        height: "68rem",
      },
    },
    bannerImage: {
      maxHeight: "100%",
      maxWidth: "100%",
      "@media (max-width:780px)": {
        objectFit: "cover",
        maxHeight: "90%",
        maxWidth: "90%",
      },
    },
  }));

  const classes = useStyle();
  const navigate = useNavigate();
  return (
    <div>
      <div className={classes.topDiv}>
        <div
          style={{
            flex: 4,
            padding: "4rem",
            paddingTop: "7rem",
            textAlign: "center",
          }}
        >
          <Typography
            style={{
              color: "black",
              fontFamily: "Montserrat",
              fontWeight: "500",
            }}
            variant="h1"
          >
            {" "}
            MoviesVerse
          </Typography>
          <Typography
            style={{
              color: "black",
              fontFamily: "Montserrat",
              fontWeight: "500",
              paddingBlock: "2rem",
            }}
            variant="h5"
          >
            We Uses Machine Learning Algorithm To Suggest You Best Movie On The
            Internet
          </Typography>
          <Button onClick={() => navigate(`/home`)} className={classes.btn}>
            Lets get Into MoviesVerse
          </Button>
        </div>

        <div
          style={{
            flex: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <div>
            <img
              className={classes.bannerImage}
              src="https://raw.githubusercontent.com/AnuragRoshan/images/75dea825db1a34bc094d4abcd32f0640762eab89/undraw_before_dawn_re_hp4m.svg"
              alt="pngMovie"
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
