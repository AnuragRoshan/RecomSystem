import { Button, Container, Typography } from '@material-ui/core'
import { Rating } from '@mui/material';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { img_300 } from '../Config/Config';

const TrendingToday = () => {
    const [content, setContent] = useState([]);
    const fetchTrending = async () => {
      const { data } = await Axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=b9e11d2c8939104a4a755544e4eb8847`
      );
      console.log(data);
    
      setContent(data.results);
    };
  
    useEffect(() => {
      // window.scroll(0, 0);
      fetchTrending();
      // eslint-disable-next-line
    }, []);

  return (
      <Container style={{marginTop:"90px"}}>
            <Typography
        variant="h5"
        style={{
          fontFamily: "Montserrat",
          fontWeight: "700",
          color: "white",
          paddingBlock: "32px",
        }}
      >
        Today's Hot Chart
      </Typography>
    <div style={{display:"flex",flexWrap:"wrap",alignItems: "center",justifyContent:"space-around",textAlign:"justify"}}>
        {
        content.map((c) => (
    <div style={{ paddingRight: "0.5rem",paddingBlock:"1.5rem" }}>
      <img
        src={`${img_300}/${c.poster_path}`}
        // onDragStart={handleDragStart}
        // role="presentation"
        width="100%"
        height="350"
        alt="hello"
      />
      <div>
          <Typography style={{color:"white"}}>
          {`${c.title}`.length > 20 ?
        (
          <div>
            {`${`${c.title}`.substring(0, 20)}...`}
          </div>
        ) :
        <p>{`${c.title}`}</p>
      }
          </Typography>
      </div>
      <div>
      <Rating name="read-only" value={c.vote_average/2} readOnly />
      </div>
    </div>
  ))}
    </div>
    </Container>
  )
}

export default TrendingToday