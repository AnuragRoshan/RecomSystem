import { Button, makeStyles } from '@material-ui/core';
import React from 'react'
import 'react-alice-carousel/lib/alice-carousel.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AliceCarousel from "react-alice-carousel"
const handleDragStart = (e) => e.preventDefault();
const items = [
   <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7d4cc70b-f7c4-499a-a91a-f3e86b8b39f0/de1t7ve-07f84e57-aaac-4117-bdf1-397cdc029805.jpg/v1/fill/w_1280,h_720,q_75,strp/halo_infinite___wallpaper_by_halomika_de1t7ve-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvN2Q0Y2M3MGItZjdjNC00OTlhLWE5MWEtZjNlODZiOGIzOWYwXC9kZTF0N3ZlLTA3Zjg0ZTU3LWFhYWMtNDExNy1iZGYxLTM5N2NkYzAyOTgwNS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.V-gHMMRWiMjRCebXbXGxS-GkkJtbi1aF56KJTshk7j8" 
    onDragStart={handleDragStart} role="presentation"
     width="100%" height="250" 
      alt='hello'
      />
      ,
    <img src="https://wallpaperaccess.com/full/27583.jpg" onDragStart={handleDragStart} role="presentation" width="100%" height="250"    alt='hello'/>,
    <img src="https://3.bp.blogspot.com/-Za5sFBOi82U/Xq5WJwM9ahI/AAAAAAAAX9Y/tYYZ5dnoNaMUrNBXe8CWSu2xNc45j0sUgCLcBGAsYHQ/w919/eivor-assassins-creed-valhalla-logo-uhdpaper.com-4K-3.1686-wp.thumbnail.jpg" alt='hello' onDragStart={handleDragStart} role="presentation" width="100%" height="250"  />,
    <img src="https://wallpapers-hub.art/wallpaper-images/38280.jpg" alt='hello' onDragStart={handleDragStart} role="presentation" width="100%" height="250"  />,
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