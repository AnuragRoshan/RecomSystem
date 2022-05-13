import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel1/Carousel'

const useStyle=makeStyles(()=>({

    bannerContent: {
        height: 400,
        opacity:0.7,
        display: "flex",
        width:"100%",
        flexDirection: "column",
        // paddingTop: 25,
        justifyContent: "space-around",
      }

}))

const Banner = () => {
    const classes=useStyle();
  return (
    <Container className={classes.bannerContent}>
        <Carousel className={classes.Carousel}/>
    </Container>
  )
}

export default Banner