import { Badge, Divider } from '@material-ui/core';
import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons';
import React from 'react'
import "./card.css";
const Card = ({data}) => {
  return (
      
      <div className='card'>
        <Badge badgeContent={data.source.name} color="primary">
        <div className="cardWrapper">
           <div className="cardTop">
            {/* <img src="https://i.pinimg.com/736x/4c/e9/c4/4ce9c48dfc7e0164a0a4b708e755f6de.jpg" alt="" className='cardProfileImg'/> */}
            {/* <input type="text" 
            className='cardInput'
        placeholder={`what's in your mind Schuzzy?`} /> */}
            <img src={data.urlToImage} alt="" className='cardBodyImg'/>
            </div> 
            <hr className="cardHr" />
            <div className="cardBottom">
                <div className="heading">
                    {data.author && (

                    <span className='author'>Author: <h1>{data.author}</h1> </span>
                    )}
                    <span className='time'>{data.publishedAt} </span>
                </div>
                <Divider style={{marginTop:"24px"}}/>
                <div className="cardHeading">
                    <h2>{data.title} </h2>
                </div>
                <Divider/>
                <div className="cardDesc">
                    <h3>{data.description} </h3>
                </div>
               
                {/* <button className="cardButton">card</button> */}
            </div>
        </div>
        </Badge>
    </div>
  )
}

export default Card