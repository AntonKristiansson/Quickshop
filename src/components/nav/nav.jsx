import React from 'react'
import "./nav.css"
import {useState} from "react"
import { BrowserRouter, NavLink, Link } from 'react-router-dom';


export const Navbar = () => {
  
  {/* const [navbar,setnavbar] = useState(false)
  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setnavbar(true)
    } else {
      setnavbar(false)
    }
  };
  window.addEventListener("scroll", changeBackground)
*/}

  const move_to_top = () => {
    window.scrollTo(0, 0);
  }


  return (
    <div>
      <ul>
        <li><NavLink to="/faq" activeClassName="active">FAQ</NavLink></li> 
        <li><NavLink to="/comingsoon" activeClassName="active">Coming Soon</NavLink></li>
        <li><NavLink to="/" activeClassName="active">Icons</NavLink></li>

      </ul>
      <button className='move_to_top' onClick={move_to_top}>
        <span class="material-icons-outlined">arrow_upward</span>
      </button>   

    </div>
    
  )
}

// <a href='#Landscape' onClick={() => setActiveNav("#Landscape")} className={activeNav === "#Landscape" ? "active" : ""}>Landscape</a>
//<a href='#Texture' onClick={() => setActiveNav("#Texture")} className={activeNav === "#Texture" ? "active" : ""}>Texture</a>
//<a href='#Space' activeClass="active" smooth spy to="Space" onClick={() => setActiveNav("#Space")} className={activeNav === "#Space" ? "active" : ""}>Space</a>
//<a href='#Animals' onClick={() => setActiveNav("#Animals")} className={activeNav === "#Animals" ? "active" : ""}>Animals</a>