import React from "react";

import img1 from './error.gif'
function Cityerror() {
  return (
    <div>
      {/* <video
        style={{
          display: "block",
          margin: "auto",
          height:"50px",
          width:"50px",
        }}
        autoPlay
        loop
        muted
      >
        <source src={vid} type="video/mp4" />
      </video> */}
      <img src={img1} style={{marginTop:'-1px'}} height={350} width={300}/>
    </div>
  );
}

export default Cityerror;