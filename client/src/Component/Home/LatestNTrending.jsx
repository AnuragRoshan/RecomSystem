import { Container, Typography } from '@material-ui/core'
import React from 'react'
import Carousel2 from './Carousel2/Carousel2'

const LatestNTrending = () => {
  return (
   <>
   
   <Container style={{marginTop:"6.1rem"}}>
    <Typography 
    
    variant="h5"
    style={{  fontFamily: "Montserrat",fontWeight:"700" , color:"white",paddingTop:"32px"}}>
     Latest and Trending
    </Typography>
      <Carousel2/>
   </Container>
   
   </>

      
        )
}

export default LatestNTrending