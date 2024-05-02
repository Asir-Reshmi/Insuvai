import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Home.css'
import homeimg from "../assets/homeimg.jpg"
// import About from "../Pages/Aboutus"


function Home() {
  return (
    <div className='home' >
      <div className='headerContainer'>
        <h2>ALL TIME FAVOURITE</h2>
        <p>Where Tradition Meets <br />
          Passion In Every Bite</p>
        <Link to="/shop">
          <button> SHOP NOW </button>
        </Link>
      </div>
      <div className="leftSide"
        style={{ backgroundImage: `url(${homeimg})` }}>
      </div>
    
    

    </div>
    
  );
}
export default Home;