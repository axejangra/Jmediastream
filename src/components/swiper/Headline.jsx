import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { useEffect } from "react";
import axios from "axios";

export default function Headline() {
  const [data, setData]= useState([]);
  useEffect(()=>{
    const fetchData= async()=>{
      const res= await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=7818abbe479147708504699d35adb9ec`);
      setData(res.data.articles);
    }
    fetchData();
  },[setData]);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        >

        {data.map((data)=>(
          <SwiperSlide className="swiperItem">
          <img src={data.urlToImage} alt="" />
          <p className="headerTitle">{data.title} </p>
          <span className="badgeHeader">-{data.source.name} </span>
        </SwiperSlide>
        ))}
        {/* <SwiperSlide className="swiperItem">
        <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperItem">
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperItem">
        <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperItem">
        <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperItem">
        <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperItem">
        <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperItem">
        <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiperItem">
        <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
      </SwiperSlide> */}
      </Swiper>
    </>
  );
}
