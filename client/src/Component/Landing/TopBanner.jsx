import { Button, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core'
import React from "react";
import { useNavigate } from "react-router-dom";

const TopBanner = () => {
    
    const useStyle = makeStyles(()=>({
        btn:{
            margin:"1.2rem",
            color:"white",
            border:"solid 1px #97ebf4",
            backgroundColor:"black",

            '&:hover': {
                background: "#e2e7e9",
                color:"black",
                border:"solid 1px black",
                // boxShadow: "5px 5px 42px 24px rgba(158,158,158,0.95)"
             },
        }


}))

const classes=useStyle();
const navigate=useNavigate()
  return (
    <div>
      <div
        style={{
          height: "34rem",
          backgroundColor: "#e2e7e9",
          marginTop: "5.5rem",
          display: "flex",
          flexDirection: "row",
        }}
      >
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
            variant="h2"
          >
            {" "}
            MoviesVerse
          </Typography>
          <Typography
            style={{
              color: "black",
              fontFamily: "Montserrat",
              fontWeight: "500",
              paddingBlock:"2rem"
            }}
            variant="h5"
          >
              We Uses Machine Learning Algorithm To Suggest You Best Movie On The Internet
          </Typography>
          <Button onClick={() => navigate(`/home`)}  className={classes.btn}>Lets get Into MoviesVerse</Button>
        </div>
       
          
        <div style={{ flex: 3, display: "inlineblock" }}>
          <img
            style={{ objectFit: "cover", maxHeight: "100%", maxWidth: "100%" }}
            src="https://www.linkpicture.com/q/mPngtreemfamily-friends-gathering-to-watch_6447078.png"
            alt="image"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
