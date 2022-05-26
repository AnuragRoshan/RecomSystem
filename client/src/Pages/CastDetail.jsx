import React from 'react'
import { useParams } from 'react-router-dom';
import CastDetailBanner from "../Component/CastDetail/CastDetailBanner"


function CastDetail() {
  const { id } = useParams();
  return (
    <div style={{color:"white",marginTop:"88px"}}>
      <CastDetailBanner/>
    </div>
  )
}

export default CastDetail