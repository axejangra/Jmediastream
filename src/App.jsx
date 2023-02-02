import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Card from "./components/card/Card";
import Chips from "./components/chip/Chips";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Video from "./components/movies_components/video/Video";
import Topbar from "./components/navbar/Topbar";
import CryptoHomePage from "./pages/cryptoPage/CryptoHomePage";
import Home from "./pages/home/Home";
import MovieHome from "./pages/movies/homePage/MovieHome";

import Login from "./pages/movies/login/Login";
import MainPage from "./pages/movies/mainPage/MainPage";
import Partners from "./pages/partners/Partners";

function App() {
  console.log(`${process.env.REACT_APP_NEWS_API}`)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/partners" element={<Partners/>}/>
      <Route path="/JMedia" element={<MainPage/>}/>
      <Route path="/JMedia/login" element={<Login/>}/>
      <Route path="/JMedia/crypto" element={<CryptoHomePage/>} />
      <Route path="/JMedia/movie/home" element={<MovieHome/>}/>
      <Route path="/JMedia/movie/video" element={<Video/>} />
    </Routes>
    </BrowserRouter>
    // <div className="App" style={{display:"flex", flexDirection:"column", alignItems:"center", width:"100vw"}}>
    //   {/* <h1>Welccome to JMedia.com</h1> */}
    //   {/* <Topbar/> */}
    //   {/* <Menu/> */}
    //   {/* <Chips/> */}
    //   {/* <Card/> */}
    //   <Home/>
    //   <Footer/>
    // </div>
  );
}

export default App;
