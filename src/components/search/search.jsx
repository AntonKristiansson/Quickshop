import React, { useRef, useContext } from 'react';
import { useState } from 'react';
import "./search.css"
import { Main } from '../main/main';
import { UserContext } from "../UserContext"
import { useEffect } from 'react';


export const Search = () => {
  const { showaction, setshowaction } = useContext(UserContext)
  const { shownavigation, setshownavigation } = useContext(UserContext)
  const { showsocial, setshowsocial } = useContext(UserContext)
  const { showcontent, setshowcontent } = useContext(UserContext)
  const { showimage, setshowimage } = useContext(UserContext)
  const { showcommunication, setshowcommunication } = useContext(UserContext)
  const { showdropdown, setshowdropdown } = useContext(UserContext)

  const { input, setinput } = useContext(UserContext)

  const show_all = () => {  
      setshowaction(true)
      setshownavigation(true)
      setshowsocial(true)
      setshowcontent(true)
      setshowimage(true)
      setshowcommunication(true)
      setshowdropdown(!showdropdown)
      document.getElementById("test").innerHTML = "Show all"
  }

  const show_action = () => {
      setshowaction(true)
      setshownavigation(false)
      setshowsocial(false)
      setshowcontent(false)
      setshowimage(false)
      setshowcommunication(false)
      setshowdropdown(!showdropdown)
      document.getElementById("test").innerHTML = "Action"
  }
  

  const show_navigation = () => {
      setshowaction(false)
      setshownavigation(true)
      setshowsocial(false)
      setshowcontent(false)
      setshowimage(false)
      setshowcommunication(false)
      setshowdropdown(!showdropdown)
      document.getElementById("test").innerHTML = "Navigation" 
  }

  const show_social = () => {
      setshowaction(false)
      setshownavigation(false)
      setshowsocial(true)
      setshowcontent(false)
      setshowimage(false)
      setshowcommunication(false)
      setshowdropdown(!showdropdown)
      document.getElementById("test").innerHTML = "Social" 
  }

  const show_content = () => {  
      setshowaction(false)      
      setshownavigation(false)
      setshowsocial(false)
      setshowcontent(true)
      setshowimage(false)
      setshowcommunication(false)
      setshowdropdown(!showdropdown)
      document.getElementById("test").innerHTML = "Content";  
  }

  const show_image = () => {  
    setshowaction(false)      
    setshownavigation(false)
    setshowsocial(false)
    setshowcontent(false)
    setshowimage(true)
    setshowcommunication(false)
    setshowdropdown(!showdropdown)
    document.getElementById("test").innerHTML = "Image";  
  }

  const show_communication = () => {  
    setshowaction(false)      
    setshownavigation(false)
    setshowsocial(false)
    setshowcontent(false)
    setshowimage(false)
    setshowcommunication(true)
    setshowdropdown(!showdropdown)
    document.getElementById("test").innerHTML = "Communication";  
  }

  const show_dropdown = () => {  
    setshowdropdown(!showdropdown)    
}
/*
React.useEffect(() => {
const stickyElem = document.querySelector(".search_container")
const currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;
kolla https://github.com/murtazaSha/reactScrollTopuse/blob/main/src/App.js
och se om du kan använda hans "change class" men mina if else och min uträkning
av y-position som beräknas ovan 
window.onscroll = function() {
if(window.pageYOffset > currStickyPos) {
  stickyElem.style.position = "fixed";
  stickyElem.style.top = "0px";
} else {
  stickyElem.style.position = "relative";
  stickyElem.style.top = "initial";
}
    }
  })*/

  const filterMenu = useRef()

  useEffect(() => {
    const handler = (event) => {    
      if (!filterMenu.current.contains(event.target)) {
        setshowdropdown(false)
      }
    }
    document.addEventListener("click", handler)

    return () => {
      document.removeEventListener("click", handler)
    }
  })

  return (
    <div className='search_container'>
      <div ref={filterMenu} className='filter_container'>   
        <button className='toggle_dropdown' onClick={show_dropdown}>
          <p id="test">Show All</p>
          <span class="material-icons-outlined">arrow_drop_down</span>
        </button>
        
        { /*kolla om man kan köra en nth-child på btn classerna instället för
        ge dem olika classer för första å sista. Kolla även material color för
        effekten på btn å allt annat.. blå*/
        
        showdropdown?<div  className="myBtnContainer">
          <button class="btn_first" onClick={show_all}>Show All</button>
          <button class="btn" onClick={show_action}>Action</button>
          <button class="btn" onClick={show_navigation}>Navigation</button>
          <button class="btn" onClick={show_social}>Social</button>
          <button class="btn" onClick={show_content}>Content</button>
          <button class="btn" onClick={show_image}>Image</button>
          <button class="btn_last" onClick={show_communication}>Communication</button>          
        </div>:null}
      </div>

      <input type="search" placeholder='Search...' className='search_barxx' onChange={(e) => setinput(e.target.value.toLowerCase())} />

    </div>

  )
}