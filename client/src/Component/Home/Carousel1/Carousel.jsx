import { makeStyles } from "@material-ui/core";
import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
// import imag from "./items";
const handleDragStart = (e) => e.preventDefault();
const items = [
  <img
    src="https://cdn.wallpapersafari.com/69/85/TW7oM9.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    width="100%"
    height="648"
    alt="hello"
  />,
  <img
    src="https://images7.alphacoders.com/111/1117602.jpg"
    onDragStart={handleDragStart}
    role="presentation"
    width="100%"
    height="648"
    alt="hello"
  />,
  <img
    src="https://cdn.99images.com/photos/wallpapers/games/4k-gta-5%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-lnvjs.jpg"
    alt="hello"
    onDragStart={handleDragStart}
    role="presentation"
    width="100%"
    height="648"
  />,
];
// console.log(imag);

const Carousel = () => {
  const useStyles = makeStyles(() => ({
    carousel: {
      height: "220px",
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
  }));

  const classes = useStyles();

  const responsive = {
    0: {
      items: 1,
    },
    512: {
      items: 1,
    },
  };

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={3000}
        animationDuration={2000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
        keyboardNavigation={true}
      />
    </div>
  );
};

export default Carousel;
