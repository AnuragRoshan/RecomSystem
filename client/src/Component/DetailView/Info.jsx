import { Container, Typography } from '@material-ui/core'
import React from 'react'

const Info = () => {
  return (
    <Container style={{marginTop:"22rem"}}>
    <Typography 
    
    variant="h5"
    style={{  fontFamily: "Montserrat",fontWeight:"700" , color:"white",paddingTop:"32px"}}>
     <i>Details</i>
    </Typography>
      {/* <Carousel2/> */}
   </Container>
  )
}

export default Info