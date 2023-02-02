import { Add, PlayArrow, ThumbDownAltOutlined, ThumbsUpDownOutlined, ThumbUpAltOutlined, ThumbUpAltSharp } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./listItem.scss"
import kgf from "../../../assets/kgf.mp4"
import { img_300, unavailable } from '../../../config/config';
import { Badge } from '@material-ui/core';



const ListItem = ({ index , data}) => {
    const [hovered, setHovered] = useState(false);
    const [trailer, setTrailer] = useState(false);
    return (
        <Link to="/JMedia/movie/video" style={{textDecoration:"none"}}>
        <div className='listItem'
            // style={{ left: hovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* <img src="https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/KGF-chapter2.jpg" alt="" /> */}
            <img src={data.poster_path ? `${img_300}/${data.poster_path}`: `${unavailable}`} alt="" />
            <Badge className='badge' badgeContent={data.vote_average.toFixed(2)} color={data.vote_average>6 ? 'primary' : 'secondary'}  />
            {hovered && (
                <>
                    <video src={kgf} autoPlay={true} loop />
                    <div className="info">
                        <div className="icons">
                            <PlayArrow className='icon' />
                            <Add className='icon' />
                            <ThumbUpAltOutlined className='icon' />
                            <ThumbDownAltOutlined className='icon' />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className='limit'>+16</span>
                            <span>{data.release_date} </span>
                        </div>
                        <div className="desc">
                            {data.overview}
                            
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
        </Link>
    )
}

export default ListItem