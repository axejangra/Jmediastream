import { Add, PlayArrow, ThumbDownAltOutlined, ThumbsUpDownOutlined, ThumbUpAltOutlined, ThumbUpAltSharp } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./listItem.module.scss"
import kgf from "../../../assets/kgf.mp4"
import { img_300, unavailable } from '../../../config/config';
import { Badge } from '@material-ui/core';


const ListItem = ({ data }) => {
    const [hovered, setHovered] = useState(false);
    const [trailer, setTrailer] = useState(false);
    return (
        <Link to="/JMedia/movie/video" style={{textDecoration:"none"}}>
        <div key={data.id} className={styles.listItem}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* <img src="https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/KGF-chapter2.jpg" alt="" /> */}
            <img src={data.poster_path ? `${img_300}/${data.poster_path}`: `${unavailable}`} alt="" />
            <Badge className={styles.badge} badgeContent={data.vote_average.toFixed(2)} color={data.vote_average>6 ? 'primary' : 'secondary'}  />
            {hovered && (
                <>
                    <video src={kgf} autoPlay={false} loop />
                    <div key={data.id} className={styles.info}>
                        <div className={styles.icons}>
                            <PlayArrow className={styles.icon} />
                            <Add className={styles.icon} />
                            <ThumbUpAltOutlined className={styles.icon} />
                            <ThumbDownAltOutlined className={styles.icon} />
                        </div>
                        <div className={styles.itemInfoTop}>
                            <span>1 hour 14 mins</span>
                            <span className={styles.limit}>+16</span>
                            <span>{data.release_date} </span>
                        </div>
                        <div className={styles.desc}>
                            {data.overview}
                            
                        </div>
                        <div className={styles.genre}>Action</div>
                    </div>
                </>
            )}
        </div>
        </Link>
    )
}

export default ListItem