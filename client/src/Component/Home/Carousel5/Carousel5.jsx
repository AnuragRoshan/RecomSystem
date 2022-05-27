import { Button, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AliceCarousel from "react-alice-carousel";
// import imag from "./items";
import Axios from "axios";
import { img_300 } from "../../../Config/Config";
import { useNavigate } from "react-router-dom";

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

const Carousel5 = () => {
  const useStyles = makeStyles(() => ({
    carousel: {
      marginTop: "42px",
      height: "270px",
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
  }));

  const classes = useStyles();
  const navigate = useNavigate();
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await Axios.get(
      `https://api.themoviedb.org/3/discover/movie?with_genres=878&primary_release_year=2016&api_key=b9e11d2c8939104a4a755544e4eb8847`
    );
    setContent(data.results);
  };

  useEffect(() => {
    // window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, []);
  const items = content.map((c) => (
    // return(
    <Button onClick={() => navigate(`/detail/${c.id}`)}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ paddingInline: "0.5rem" }}>
          <img
            src={`${img_300}/${c.poster_path}`}
            onDragStart={handleDragStart}
            role="presentation"
            width="100%"
            height="290"
            alt={`${c.title}`}
          />
        </div>
        <div>
          <Typography style={{ color: "white", marginTop: "1rem" }}>
            {`${c.title}`.length > 20 ? (
              <div>{`${`${c.title}`.substring(0, 20)}...`}</div>
            ) : (
              <p>{`${c.title}`}</p>
            )}
          </Typography>
        </div>
      </div>
    </Button>
    // );
  ));
  const responsive = {
    0: {
      items: 5,
    },
    512: {
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

export default Carousel5;
