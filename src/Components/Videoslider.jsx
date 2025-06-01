import React from 'react';

const Videoslider = () => {
  return (
   <>
   <h1 style={{textAlign:"center",color:"black",fontFamily:"cursive",fontWeight:"bold",marginTop:"30px",justifyContent:"center"}}>OUR SWEETEST MOMENTS</h1>
     <div className="box-row">
      <div className="box">
        <video src="/v7.mp4" autoPlay loop muted playsInline className="video" />
      </div>
      <div className="box">
        <video src="/v2.mp4" autoPlay loop muted playsInline className="video" />
      </div>
      <div className="box">
        <video src="/v6.mp4" autoPlay loop muted playsInline className="video" />
      </div>
      <div className="box">
        <video src="/v4.mp4" autoPlay loop muted playsInline className="video" />
      </div>
      <div className="box">
        <video src="/v5.mp4" autoPlay loop muted playsInline className="video" />
      </div>
    </div>
   </>  );
};

export default Videoslider;
