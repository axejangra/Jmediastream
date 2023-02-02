import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import kgf from "../../../assets/kgf.mp4"
import "./video.scss"

const Video = () => {
  return (
    <div className='watch movie' style={{backgroundColor:"black"}}>
       <Link className='link'to="/JMedia/movie/home"> <div className="back">
            <ArrowBackOutlined/>
            Home
        </div></Link>
        <video autoPlay progress controls src={kgf}
        style={{width:"100vw", height:"60vh", backgroundColor:"black", paddingTop:"40px"}}  
        className="player"
        />
        <div className="logo">JMedia+</div>
    </div>
  )
}

export default Video