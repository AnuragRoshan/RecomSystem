import React from 'react'
import { useParams } from 'react-router-dom';
import DetailBanner from '../Component/DetailView/DetailBanner';


function Detailview() {
  const { id } = useParams();
  return (
    <div style={{color:"white",marginTop:"88px"}}>
      {/* <Banner/> */}
      <DetailBanner/>
      {/* <Info/> */}
    </div>
  )
}

export default Detailview