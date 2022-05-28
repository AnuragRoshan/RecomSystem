import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AliceCarousel from "react-alice-carousel";
import Axios from "axios";
import { img_300 } from "../../Config/Config";
import { useNavigate, useParams } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const RecmCarousel = () => {
  const useStyles = makeStyles(() => ({
    carousel: {
      marginTop: "42px",
      height: "270px",
      width: "100%",
      alignItems: "center",
    },
  }));
  const { id ,title } = useParams();
  let navigate = useNavigate();
  const classes = useStyles();

  const [content, setContent] = useState([]);
  const [Mov1, setMov1] = useState([]);

  console.log(id);
  console.log(title);
  // const it="Hulk"
  // console.log(it);

  const fetchTrending = async () => {
    const { data } = await Axios.get(`http://localhost:5000/recomm/` + title);
    setContent(data);
    // console.log(data);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  const [movie1, setMovie1] = useState([]);
  const fetchMovie = async () => {
    const { data } = await Axios.get(
      `https://api.themoviedb.org/3/movie/${content.movie_name1}?api_key=b9e11d2c8939104a4a755544e4eb8847&language=en-US`
    );
   setMovie1(data);
    console.log(data);
  };

  useEffect(() => {
    fetchMovie();
  }, [content]);


  const [movie2, setMovie2] = useState([]);
  const fetchMovie2 = async () => {
    const { data } = await Axios.get(
      `https://api.themoviedb.org/3/movie/${content.movie_name2}?api_key=b9e11d2c8939104a4a755544e4eb8847&language=en-US`
    );
   setMovie2(data);
    console.log(data);
  };

  useEffect(() => {
    fetchMovie2();
  }, [content]);

  // const fetchTrending2 = async () => {
  //   const { data } = await Axios.get(
  //     `https://api.themoviedb.org/3/movie/${content.movie_name1}?api_key=b9e11d2c8939104a4a755544e4eb8847&language=en-US`
  //   );
  //   // console.log(data.results);
  //   // console.log(data.results.poster_path);
  //   setMov1(data.results);
  // };
  // useEffect(() => {
  //   fetchTrending2();
  // }, []);

  const items =  
 [
     <div style={{ paddingInline: "0.5rem" }}>

      <img
         src={`${img_300}/${movie1.poster_path}`}
         onDragStart={handleDragStart}
         role="presentation"
         width="100%"
         height="290"
         alt={`${movie1.title}`}
      />
    </div>,
    <div style={{ paddingInline: "0.5rem" }}>

    <img
       src={`${img_300}/${movie2.poster_path}`}
       onDragStart={handleDragStart}
       role="presentation"
       width="100%"
       height="290"
       alt={`${movie2.title}`}
    />
  </div>,

 ]

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
    900: {
      items: 5,
    },
  };

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
          return (
            <Button
              className="p-4 absolute left-0 top-0"
              style={{ marginInline: "20px", color: "white" }}
            >
              <KeyboardDoubleArrowLeftIcon fontSize="large" />
            </Button>
          );
        }}
        renderNextButton={() => {
          return (
            <Button
              className="p-4 absolute right-0 top-0"
              style={{ marginInline: "20px", color: "white" }}
            >
              <KeyboardDoubleArrowRightIcon fontSize="large" />
            </Button>
          );
        }}
      />
    </div>
  );
};

export default RecmCarousel;
