import { Button, makeStyles } from '@material-ui/core';
import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AliceCarousel from "react-alice-carousel"
const handleDragStart = (e) => e.preventDefault();
const items = [
   <img src="https://cdn.wallpapersafari.com/69/85/TW7oM9.jpg" 
    onDragStart={handleDragStart} role="presentation"
     width="100%" height="250" 
      alt='hello'
      />
      ,
    <img src="https://images7.alphacoders.com/111/1117602.jpg" onDragStart={handleDragStart} role="presentation" width="100%" height="250"    alt='hello'/>,
    <img src="https://cdn.99images.com/photos/wallpapers/games/4k-gta-5%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-lnvjs.jpg" alt='hello' onDragStart={handleDragStart} role="presentation" width="100%" height="250"  />,
  ];

const Carousel = () => {
      const useStyles = makeStyles(() => ({
              carousel:{
                  marginTop:"32px",
                  height:"220px",
                  width:"100%",
                  display:"flex",
                  alignItems:"center",
              }
          }));
      
      const classes=useStyles();

      const responsive={
          0:{
              items:1,
          },
          512:{
              items:2
          },
          1000:{
              items:3
          }
          }

      

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
         keyboardNavigation={true}
         renderPrevButton={() => {
           return <Button className="p-4 absolute left-0 top-0" style={{marginInline:"20px",color:"white"}}><KeyboardDoubleArrowLeftIcon  fontSize='large'/></Button>
         }}
         renderNextButton={() => {
           return <Button className="p-4 absolute right-0 top-0" style={{marginInline:"20px",color:"white"}}><KeyboardDoubleArrowRightIcon fontSize='large'/></Button>
         }}
        />
    </div>
  )
}

export default Carousel