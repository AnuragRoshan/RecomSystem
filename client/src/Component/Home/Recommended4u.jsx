import { Container, Typography } from '@material-ui/core'
import React from 'react'
import Carousel2 from './Carousel3/Carousel3'

export const Recommended4u = () => {
  return (
    <Container style={{marginTop:"6.1rem"}}>
    <Typography 
    
    variant="h5"
    style={{  fontFamily: "Montserrat",fontWeight:"700" , color:"white",paddingTop:"32px"}}>
     Recommended for You
    </Typography>
      <Carousel2/>
   </Container>
  )
}
