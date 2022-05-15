import { Button, makeStyles } from '@material-ui/core';
import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AliceCarousel from "react-alice-carousel"
const handleDragStart = (e) => e.preventDefault();
const items = [
   <img src="https://images.hdqwalls.com/download/raze-valorant-3t-1366x768.jpg" 
    onDragStart={handleDragStart} role="presentation"
     width="100%" height="250" 
      alt='hello'
      />
      ,
    <img src="https://img.wallpapersafari.com/desktop/1440/900/45/14/P2Djro.jpg" onDragStart={handleDragStart} role="presentation" width="100%" height="250"    alt='hello'/>,
    <img src="https://3.bp.blogspot.com/-Za5sFBOi82U/Xq5WJwM9ahI/AAAAAAAAX9Y/tYYZ5dnoNaMUrNBXe8CWSu2xNc45j0sUgCLcBGAsYHQ/w919/eivor-assassins-creed-valhalla-logo-uhdpaper.com-4K-3.1686-wp.thumbnail.jpg" alt='hello' onDragStart={handleDragStart} role="presentation" width="100%" height="250"  />,
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
        //  keyboardNavigation={true}
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