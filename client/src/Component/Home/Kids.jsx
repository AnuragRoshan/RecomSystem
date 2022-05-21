import { Container, Typography } from '@material-ui/core'
import React from 'react'
import Carousel3 from './Carousel3/Carousel3'

export const Kids = () => {
  return (
    <Container style={{marginTop:"22rem"}}>
    <Typography 
    
    variant="h5"
    style={{  fontFamily: "Montserrat",fontWeight:"700" , color:"white",paddingTop:"32px"}}>
kids    </Typography>
      <Carousel3/>
   </Container>
  )
}
