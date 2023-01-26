import React from 'react'
import { Main } from './components/main/main';
import { Navbar } from './components/nav/nav';
import { Search } from './components/search/search';
import { Burger_menu } from './components/nav/burger_menu';
import { Contact } from "./components/contact/contact"
import { Comingsoon } from "./components/comingsoon/comingsoon";
import { Faq } from "./components/faq/faq"
import { useState } from 'react';
import { UserContext } from "./components/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  
  const [showaction, setshowaction] = useState(true)
  const [shownavigation, setshownavigation] = useState(true)
  const [showsocial, setshowsocial] = useState(true)
  const [showcontent,setshowcontent] = useState(true)
  const [showimage, setshowimage] = useState(true)
  const [showcommunication, setshowcommunication] = useState(true)
  const [showdropdown,setshowdropdown] = useState(false)

  const [input, setinput] = useState("")

  return (
    
    <>
      <UserContext.Provider value={{ showaction, setshowaction, shownavigation, setshownavigation, showsocial, setshowsocial, showcontent, setshowcontent, showimage, setshowimage, showcommunication, setshowcommunication, showdropdown, setshowdropdown, input, setinput }}>
        
        <Burger_menu />

        <BrowserRouter basename={process.env.PUBLIC_URL}>          
          <Routes>
            <Route path='/' element={<><Navbar/><Search/><Main/></>}/>
            <Route path='/contact' element={<><Navbar/><Contact/></>}/>
            <Route path='/comingsoon' element={<><Navbar/><Comingsoon/></>}/>
            <Route path='/faq' element={<><Navbar/><Faq/></>}/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>      
    </>
    
  )
}

export default App