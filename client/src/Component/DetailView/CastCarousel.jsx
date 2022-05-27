import { Button,  makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AliceCarousel from "react-alice-carousel";
// import imag from "./items";
import Axios from "axios";
import { img_300 } from "../../Config/Config";
import { useNavigate, useParams } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

// console.log(imag);
// const items = imag.map((coin) => {
//   // let profit = coin?.price_change_percentage_24h >= 0;
//   return (
//     <Link className={classes.carouselItem} to={`/`}>
//       <img src={coin.src} alt={coin.alt} height="648" width="100%" />
//     </Link>
//   );

// });

const RecmCarousel = () => {
  const useStyles = makeStyles(() => ({
    carousel: {
      marginTop: "42px",
      height: "270px",
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
  }));
  const {id}=useParams()
  const navigate=useNavigate()
  const classes = useStyles();

  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await Axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=b9e11d2c8939104a4a755544e4eb8847&language=en-US`
    );
    // console.log(data.cast);
    // console.log(data.results.poster_path);
    setContent(data.cast);
  };

  useEffect(() => {
    // window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, []);
  const items = content.map((c) => (
    // return(
      <Button onClick={() => navigate(`/casts/${c.id}`)} width="119%" >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ paddingInline: "0.5rem" }}>
          <img
          alt={c.name}
            src={`${img_300}/${c.profile_path}`}
            onDragStart={handleDragStart}
            role="presentation"
            width="100%"
            height="290"
            // alt={`${c.title}`}
          />
        </div>
        <div >
              <Typography style={{ color: "white",marginTop:"1rem",fontSize:"25px"  }}>
                {`${c.name}`.length > 13 ? (
                  <div>{`${`${c.name}`.substring(0, 13)}...`}</div>
                ) : (
                  <p>{`${c.name}`}</p>
                )}
              </Typography>
              <div style={{ color: "white" , fontSize:"10px" }}>
              as
              
                {`${c.character}`.length > 25 ? (
                  <div>{`${`${c.character}`.substring(0, 25)}...`}</div>
                ) : (
                  <p>{`${c.character}`}</p>
                )}
              </div>
            </div>
      </div>
    </Button>
    // );
  ));
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
    900: {
      items: 5,
    },
  };

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        disableDotsControls
        // disableButtonsControls  // ---> also remove this
        // activeIndex={activeIndex}  // ---> no need to this anymore
        items={items}
        responsive={responsive}
        controlsStrategy="responsive"
        autoPlay={true}
        autoPlayInterval={5000}
        infinite={true}
        //  keyboardNavigation={true}
        renderPrevButton={() => {
          return (
            <Button
              className="p-4 absolute left-0 top-0"
              style={{ marginInline: "20px", color: "white" }}
            >
              <KeyboardDoubleArrowLeftIcon fontSize="large" />
            </Button>
          );
        }}
        renderNextButton={() => {
          return (
            <Button
              className="p-4 absolute right-0 top-0"
              style={{ marginInline: "20px", color: "white" }}
            >
              <KeyboardDoubleArrowRightIcon fontSize="large" />
            </Button>
          );
        }}
      />
    </div>
  );
};

export default RecmCarousel;