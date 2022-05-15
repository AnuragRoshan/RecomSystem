import { Container, makeStyles } from '@material-ui/core'
import React from 'react'
// import Carousel from './Carousel1/Carousel'

const useStyle=makeStyles(()=>({

    bannerContent: {
        height: 395,
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
        {/* <Carousel className={classes.Carousel}/> */}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, saepe voluptatibus voluptas voluptatum nam minima cumque, dolor dicta voluptates minus et quod excepturi. Deleniti quas et temporibus perferendis nemo rerum!
        Necessitatibus cum, adipisci expedita nobis suscipit iste facilis dicta atque sed modi totam, quam illo facere pariatur quae placeat eos voluptate neque corrupti similique debitis dignissimos tenetur nemo error. Consequuntur!
        Dolorem, eligendi consequatur laudantium culpa officiis sint veniam maiores nemo aliquid nobis ea debitis, cupiditate laboriosam, alias facere nostrum eius dolores aspernatur. Incidunt rem nisi ullam saepe esse laboriosam illo?
    </Container>
  )
}

export default Banner