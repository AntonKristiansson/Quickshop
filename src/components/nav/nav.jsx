import React from 'react'
import "./nav.css"
import {useState} from "react"
import { BrowserRouter, NavLink, Link } from 'react-router-dom';


export const Navbar = () => {
  
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
