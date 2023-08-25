import { Divider } from '@material-ui/core'
import  axios, { Axios } from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Ad from '../../components/advertisement/Ad'
import AllContents from '../../components/allContents/AllContents'
import Card from '../../components/card/Card'
import ChipsArray from '../../components/chip/Chips'
import Content from '../../components/contents/Content'
import Footer from '../../components/footer/Footer'
import Topbar from '../../components/navbar/Topbar'
import Headline from '../../components/swiper/Headline'
import "./home.css"

const Home = () => {
    const [articles, setArticles]=useState([]);
    const[selectedCategory, setSelectedCategory]=useState("");
    const [query, setQuery]= useState("");
    useEffect(()=>{
        const fetchData= async()=>{
            if(selectedCategory){
                const res= await axios.get(` https://newsapi.org/v2/top-headlines?country=de&category=${selectedCategory}&apiKey=7818abbe479147708504699d35adb9ec`);
                setArticles(res.data.articles);
            }
            else{

                const res=await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=7818abbe479147708504699d35adb9ec`);
                setArticles(res.data.articles);
            }
            // console.log(res.data);
        };
        fetchData();
    },[setArticles, selectedCategory]);
    // console.log(`this is the Homepage data: ${JSON.stringify(articles)}`)
  return (
    <>
    <Topbar setQuery={setQuery} />
    <ChipsArray setSelectedCategory={setSelectedCategory} />
    <Headline/>
    <div className="container movies" style={{display:"flex", flexDirection:"row"}}>
        <div className="left">
        <h1 className='heading' style={{marginRight:"140px"}}>Headlines</h1>
        <div className="articles">

        <Content data={articles}/>
        </div>
        
        </div>
        <Divider/>
        <div className="right">
            <h1 className='heading' style={{marginLeft:"310px"}}>News</h1>
            <AllContents category={selectedCategory} query={query} />
        </div>
        <div className="ad" style={{position:"absolute", right:"20px", top:"560px"}}>
        <h1 className='heading' style={{marginRight:"110px"}}>Ads</h1>
            <Ad/>
        </div>
    </div>
    {/* <Footer/> */}
    </>
    
  )
}

export default Home