import { Button, Container, Typography } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { img_300 } from "../Config/Config";

const TrendingToday = () => {
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await Axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=b9e11d2c8939104a4a755544e4eb8847&language=en-US&page=2`
    );

    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, []);
  const navigate = useNavigate();
  return (
    <Container style={{ marginTop: "90px" }}>
      <Typography
        variant="h5"
        style={{
          fontFamily: "Montserrat",
          fontWeight: "700",
          color: "white",
          paddingBlock: "32px",
        }}
      >
        Upcoming Movies
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
          textAlign: "justify",
        }}
      >
        {content.map((c) => (
          < Button onClick={() => navigate(`/detail/${c.id}/${c.title}`)}>
          <div style={{ paddingRight: "0.5rem", paddingBlock: "1.5rem" ,color:"white"}}>
            <img
              src={`${img_300}/${c.poster_path}`}
              height="350"
              alt="hello"
            />
            <div>
              <Typography style={{ color: "white" ,width:"100%" }}>
                
                {`${c.title}`.length > 20 ? (
                  <div>{`${`${c.title}`.substring(0, 20)}...`}</div>
                ) : (
                  <p>{`${c.title}`}</p>
                )}
              </Typography>
            </div>
            <div>
                release date : {c.release_date}
            </div>
          </div>
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default TrendingToday;
