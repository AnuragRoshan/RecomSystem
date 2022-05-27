import React, { useEffect } from 'react'
import DetailBanner from '../Component/DetailView/DetailBanner';


function Detailview() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <div style={{color:"white",marginTop:"88px"}}>
      {/* <Banner/> */}
      <DetailBanner/>
      {/* <Info/> */}
    </div>
  )
}

export default Detailview