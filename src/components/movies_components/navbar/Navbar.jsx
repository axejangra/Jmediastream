import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.scss"

const Navbar = ({setType}) => {
    const [homepageactive, setHomepageActive] = useState({homepageactive: true, seriesactive: false, moviesactive: false});
    
    const [scroll, setScroll] = useState(false);
    useEffect(()=>{
        window.onscroll = () => {
        window.pageYOffset === 0 ? setScroll(false) : setScroll(true);
    };
    },[])

    const homepage = ()=>{
        setType("movie");
        setHomepageActive({homepageactive: true, seriesactive: false, moviesactive: false});
      
    }
    const series = ()=>{
        setType("tv");
        setHomepageActive({homepageactive: false, seriesactive: true, moviesactive: false});
    }
    const movies = ()=>{
        setType("movie");
        setHomepageActive({homepageactive: false, seriesactive: false, moviesactive: true});
    }
    
    return (
        <div className={scroll ? "navbar movies scroll": "navbar movies"}>
            <div className="container movie">
                <div className="left movie">
                

                    <div className="logo movie">
                        JMedia+
                    </div>
                    <span className={homepageactive.homepageactive? 'navlink-active': ''}  onClick={()=>homepage()}>Homepage</span>
                    <span className={homepageactive.seriesactive ? 'navlink-active': ''}  onClick={()=> series()}>Series</span>
                    <span className={homepageactive.moviesactive ? 'navlink-active': ""} onClick={()=>movies()}>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right movie">
                    <Search className='icon movie' />
                    <span>KID</span>
                    <Notifications className='icon movie' />
                    <img src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=2000" alt="" />
                    <div className="profile movie">
                        <ArrowDropDown className=' movie' />
                        <div className="options movie">
                            <span>Settings</span>
                            <span><Link className='link' to="/" >Logout</Link> </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar