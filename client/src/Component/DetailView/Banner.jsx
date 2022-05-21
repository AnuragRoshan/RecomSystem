import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Carousel from '../Home/Carousel1/Carousel' 


const useStyle=makeStyles(()=>({

    bannerContent: {
        height: 395,
        opacity:0.7,
        display: "flex",
        width:"100%",
        flexDirection: "column",
        justifyContent: "space-around",
      }

}))

const Banner = () => {
    const classes=useStyle();

  return (
    <Container className={classes.bannerContent}>
        {/* <Carousel className={classes.Carousel}/> */}
         <div style={{height:"220px"}}>
           <img src="https://cdn.wallpapersafari.com/69/85/TW7oM9.jpg"
    role="presentation"
    width="55%"
    height="458"
    alt="hello"/>

           {/* </img> */}
         </div>
         
         </Container>
  )
}

export default Banner