import { Button,  Tooltip, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CastCarousel from "./CastCarousel";
import Axios from "axios";
import { img_300 } from "../../Config/Config";
import RecomCarousel from "./RecomCarousel";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const DetailBanner = () => {
  const { id } = useParams();
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await Axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b9e11d2c8939104a4a755544e4eb8847&language=en-US`
    );
    // console.log(data.results.poster_path);
    setContent(data);
  };

  useEffect(() => {
    // window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, []);


  


  return (
    <div style={{ width: "100%" }}>
      <div style={{ margin: "50px", display: "flex", flexDirection: "row" }}>
        <div style={{ width: "50%" }}>
          <img
          alt={content.title}
            src={`${img_300}/${content.poster_path}`}
            height="500px"
            width="100%"
          ></img>
        </div>
        {/* <div
          style={{
            border: "0.01px solid white",
            height: "500px",
            marginLeft: "10px",
          }}
        ></div> */}
        <div
          style={{
            marginLeft: "38px",
            display: "flex",
            width: "100%",
            flexDirection: "column",
            fontFamily: "montserrat",
            lineHeight: "40px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <Typography style={{ fontSize: "40px", fontWeight: "700" }}>
              {content.original_title}
            </Typography>
            
          </div>
          <div style={{ fontSize: "20px",}}>
          Release Date :  {content.release_date}
            </div>
          <div><b>Runtime :  </b>{Math.floor(content.runtime/60)}h {content.runtime%60}m
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Tooltip title="User Rating">
               <div style={{ alignSelf: "center" }}><b>Rating :</b> {content.vote_average} / 10</div>
            </Tooltip>

            <div style={{ marginTop: "5px" }}>
              <Button>
                <Tooltip title="Add to Watchlist">
                  <PlaylistAddIcon
                    style={{ color: "white", marginLeft: "3px" }}
                    fontSize="large"
                  ></PlaylistAddIcon>
                </Tooltip>
              </Button>
            </div>
          </div>
          <div><b> Budget : </b>$ {numberWithCommas (`${content.budget}`)}</div>
          <div> <b> Gross Collection :</b> $ {numberWithCommas (`${content.revenue}`)}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <b> <div >Overview:</div></b>
            <div>
            {content.overview}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Typography
          variant="h5"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "700",
            color: "white",

            paddingLeft: "30px",
          }}
        >
          Cast
        </Typography>
        <CastCarousel />
      </div>
      <div style={{marginTop:"102px"}}>
        <Typography
          variant="h5"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "700",
            color: "white",
            paddingTop: "102px",
            paddingLeft: "30px",
          }}
        >
          More Like This
        </Typography> 
        <RecomCarousel  />
      </div>
    </div>
  );
};

export default DetailBanner;
