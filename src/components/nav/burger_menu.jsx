import React from 'react'
import { useState } from 'react';
import "./burger_menu.css"
import { Link } from "react-scroll"

export const Burger_menu = () => {

    const [Menu_box_open, setMenu_box_open] = useState(false);

    const toggleHamburger = () => {
      setMenu_box_open(!Menu_box_open)
        console.log(Menu_box_open)
    }
/* sök upp react onclick function för å veta om man kan ändra div namnet för å
få animation när man trycker på burgern */
  return (
    <div className='nav_mobile'>
      <div className={`hamburger-${Menu_box_open ? "open" : "closed"}`} onClick={toggleHamburger}>
          <div className="patty" />
          <div className="patty" />
          <div className="patty" />
      </div>
      
      {
      Menu_box_open?<div className='menu_box'>
        <Link className="burger_link" activeClass="burger_link_active" spy to="info_text" offset={-100} onClick={toggleHamburger}><p>Home</p></Link>
        <Link className="burger_link" activeClass="burger_link_active" spy to="Monsters" offset={-100} onClick={toggleHamburger}><p>Monsters</p></Link>
        <Link className="burger_link" activeClass="burger_link_active" spy to="Fem_Bodies" offset={-100} onClick={toggleHamburger}><p>Fem Bodies</p></Link>
        <Link className="burger_link" activeClass="burger_link_active" spy to="Tattoo_Designs" offset={-100} onClick={toggleHamburger}><p>Tattoo Designs</p></Link>
        <Link className="burger_link" activeClass="burger_link_active" spy to="Color" offset={-100} onClick={toggleHamburger}><p>Color</p></Link>
        <Link className="burger_link" activeClass="burger_link_active" spy to="Realism" offset={-100} onClick={toggleHamburger}><p>Realism</p></Link>
        <Link className="burger_link_contact" activeClass="burger_link_contact_active" spy to="form" offset={-320} onClick={toggleHamburger}><p>Contact</p></Link>
      </div>:null
      }
      {
      Menu_box_open?<div className='bg_overlay' onClick={toggleHamburger}></div>:null
      }

    </div>
  )
}

