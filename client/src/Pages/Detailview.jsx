import React, { useEffect } from 'react'
import DetailBanner2 from '../Component/DetailView/DetailBanner';
import RecomCarousel from '../Component/DetailView/RecomCarousel';


function Detailview() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <div style={{color:"white",marginTop:"88px"}}>
      {/* <Banner/> */}
      <DetailBanner2/>
      {/* <RecomCarousel  /> */}
      {/* <Info/> */}
    </div>
  )
}

export default Detailview