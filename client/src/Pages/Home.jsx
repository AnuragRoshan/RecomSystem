import React from "react";
import Banner from "../Component/Home/Banner";
import { Kids} from "../Component/Home/Kids";
import Todaystop from "../Component/Home/LatestNTrending";
import Action from "../Component/Home/Action";
import ScienceFiction from "../Component/Home/ScienceFiction";


const Home = () => {

  return (
    <div>
      <Banner />
      <Kids />
      
      <ScienceFiction />
      <Todaystop />
      <Action />
    </div>
  );
};

export default Home;
