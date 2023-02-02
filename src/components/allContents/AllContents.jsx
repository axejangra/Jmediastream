import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from '../card/Card'
import "./allContents.css"
const AllContents = ({category, query}) => {
    const [articles, setArticles]= useState([]);
    useEffect(()=>{
        const fetchData= async()=>{

            if(query){
                const res= await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=7818abbe479147708504699d35adb9ec`);
                setArticles(res.data.articles);
            }
            else{
                const res= await axios.get(` https://newsapi.org/v2/everything?q=bitcoin&apiKey=7818abbe479147708504699d35adb9ec `);
                setArticles(res.data.articles);
            }
        };
        fetchData();
    },[setArticles,query]);
  return (
    <div className='allContainer'>
    {articles.map((data)=>(
        <Card data={data} />
        ))}
        </div>
  )
}

export default AllContents