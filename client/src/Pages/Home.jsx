import React from 'react'
import Banner from '../Component/Home/Banner'
import Carousel from '../Component/Home/Carousel1/Carousel'
import Todaystop from '../Component/Home/Todaystop'
// import React from 'react'
// import Axios from 'axios';
// import { useState } from 'react';
// import Carousel from '../Component/Home/Carousel/Carousel';
// import Todaystop from '../Component/Home/Todaystop';

// function UserInfo() {
    // const [data, setData] = useState(null);
  
  
    // const getUser = () => {
    //   Axios({
    //     method: "GET",
    //     withCredentials: true,
    //     url: "http://localhost:4000/user",
    //   }).then((res) => {
    //     setData(res.data);
    //     console.log(res.data);
    //   });
    // };
  // return (
    // <div>
    //   {getUser}
    //     <h1>Get User</h1>
    //     <button onClick={getUser}>Submit</button>
    //     {data ? <h1>Welcome Back  {data.username}</h1> : null}
    //   </div>

    // <div style={{marginTop:"88px",width:"100%" ,height:"648", display:"flex", flexDirection:"column",backgroundColor:"yellow"}}>
      {/* call carousel */}
    //  <div> <Carousel/></div>
      {/* <Todaystop/> */} 
  
      // </div>
    // </div>
//   )
// }

// export default UserInfo



const Home = () => {
  return (
    <div>
      <Banner/>
      <Todaystop/>
    </div>
  )
}

export default Home