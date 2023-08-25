import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./video.scss";

const Video = () => {
  return (
    <div className="watch movie" style={{ backgroundColor: "black" }}>
      <Link className="link" to="/JMedia/movie/home">
        {" "}
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <div className="videoplayer">

      <iframe className="ytvideo" width="600" height="340" src="https://www.youtube.com/embed/omWxiZDaIhs?si=mqko_zKbXXPUlbUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      {/* <video autoPlay progress controls src="https://youtu.be/omWxiZDaIhs?si=SdkqHHNBt-sNbtQy"
        style={{width:"100vw", height:"70vh", backgroundColor:"black", paddingTop:"40px"}}  
        className="player"
        /> */}
      <div className="logo">JMedia+</div>
    </div>
  );
};

export default Video;
