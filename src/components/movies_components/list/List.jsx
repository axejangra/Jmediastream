import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
// import { api } from '../../env/api'
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = ({ name, type, genre }) => {
    console.log(name , type, genre);
    const initialdata = [{
        "adult": false,
        "backdrop_path": "/dWvDlTkt9VEGCDww6IzNRgm8fRQ.jpg",
        "id": 457332,
        "title": "Hidden Strike",
        "original_language": "en",
        "original_title": "Hidden Strike",
        "overview": "Two elite soldiers must escort civilians through a gauntlet of gunfire and explosions.",
        "poster_path": "/zsbolOkw8RhTU4DKOrpf4M7KCmi.jpg",
        "media_type": "movie",
        "genre_ids": [
          28,
          12,
          53
        ],
        "popularity": 410.817,
        "release_date": "2023-07-06",
        "video": false,
        "vote_average": 7.326,
        "vote_count": 164
      },
      {
        "adult": false,
        "backdrop_path": "/nHf61UzkfFno5X1ofIhugCPus2R.jpg",
        "id": 346698,
        "title": "Barbie",
        "original_language": "en",
        "original_title": "Barbie",
        "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
        "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        "media_type": "movie",
        "genre_ids": [
          35,
          12,
          14
        ],
        "popularity": 4848.299,
        "release_date": "2023-07-19",
        "video": false,
        "vote_average": 7.557,
        "vote_count": 1792
      },
      {
        "adult": false,
        "backdrop_path": "/iEFuHjqrE059SmflBva1JzDJutE.jpg",
        "id": 496450,
        "title": "Miraculous: Ladybug & Cat Noir, The Movie",
        "original_language": "fr",
        "original_title": "Miraculous - le film",
        "overview": "A life of an ordinary Parisian teenager Marinette goes superhuman when she becomes Ladybug. Bestowed with magical powers of creation, Ladybug must unite with her opposite, Cat Noir, to save Paris as a new villain unleashes chaos unto the city.",
        "poster_path": "/dQNJ8SdCMn3zWwHzzQD2xrphR1X.jpg",
        "media_type": "movie",
        "genre_ids": [
          16,
          10751,
          28,
          14,
          10749
        ],
        "popularity": 746.27,
        "release_date": "2023-07-05",
        "video": false,
        "vote_average": 8.393,
        "vote_count": 178
      },
      {
        "adult": false,
        "backdrop_path": "/znUYFf0Sez5lUmxPr3Cby7TVJ6c.jpg",
        "id": 447277,
        "title": "The Little Mermaid",
        "original_language": "en",
        "original_title": "The Little Mermaid",
        "overview": "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
        "poster_path": "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
        "media_type": "movie",
        "genre_ids": [
          12,
          10751,
          14,
          10749
        ],
        "popularity": 4119.643,
        "release_date": "2023-05-18",
        "video": false,
        "vote_average": 6.451,
        "vote_count": 1263
      }]
  const [slideNumber, setSlideNumber] = useState(0);
  const [data, setData] = useState(initialdata);
  // const api= process.env.REACT_APP_MOVIE_API_KEY;
  const api = "62d9f5ff67f9b5aa795779f64411aaa9";

  const [apiKey, setApiKey] = useState("");


  useEffect(() => {
    const fetchData = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=${api}`)
        setData(res.data.results)
      try {
        if (name === "Popular on JMedia") {
          setApiKey(
            `https://api.themoviedb.org/3/trending/${type}/day?api_key=${api}`
          );
          const res = await axios.get(`${apiKey}`);
          setData(res.data.results);
          
        } else if (name === "Continue to Watch") {
          setApiKey(
            `https://api.themoviedb.org/3/trending/${type}/day?api_key=${api}`
          );
          const res = await axios.get(`${apiKey}`);
          setData(res.data.results);
          
        } else {
          setApiKey(
            `https://api.themoviedb.org/3/trending/${type}/week?api_key=${api}`
          );
          const res = await axios.get(`${apiKey}`);
          setData(res.data.results);
         
        }
        
      } catch (err) {
        console.log(`list page error : ${err}`);
      }
    };
    fetchData();
  }, [type, apiKey, name]);
  const listRef = useRef();
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      listRef.current.style.transition = `all 0.5s ease`;
      setSlideNumber((prev) => prev - 1);
    }
    if (direction === "right" && slideNumber < 10) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSlideNumber((prev) => prev + 1);
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{name} </span>
      <div className="wrapper">
        {slideNumber > 0 && (
          <ArrowBackIosOutlined
            className="arrow left"
            onClick={() => handleClick("left")}
          />
        )}
        <div className="container" ref={listRef}>
          {data.map((d, index) => {
            return <ListItem key={index} data={d} />;
          })}
          {/* { data.filter((d) => { return d.media_type === type && d.genre_ids.some((e) => { return e === parseInt(genre) }) }).map((d,index) => (
                        <ListItem key={index} data={d} />
                    ))} */}
        </div>
        {slideNumber < 5 && (
          <ArrowForwardIosOutlined
            className="arrow right"
            onClick={() => handleClick("right")}
          />
        )}
      </div>
    </div>
  );
};

export default List;
