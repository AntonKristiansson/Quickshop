import React from 'react'
import {useState} from "react"
import "./main.css"

import { iconDataAction, iconDataContent, iconDataNavigation, iconDataSocial, iconDataImage, iconDataCommunication } from "./data.js";


import { render } from '@testing-library/react'
import {useRef, useEffect} from 'react';
import { useContext } from 'react' 
import { UserContext } from "../UserContext"

    

export const Main = () => {

  const { showaction, setshowaction } = useContext(UserContext)
  const { shownavigation, setshownavigation } = useContext(UserContext)
  const { showsocial, setshowsocial } = useContext(UserContext)
  const { showcontent, setshowcontent } = useContext(UserContext)
  const { showimage, setshowimage } = useContext(UserContext)
  const { showcommunication, setshowcommunication } = useContext(UserContext)

  const { input, setinput } = useContext(UserContext)

  const test = [...(showaction ? iconDataAction : []), ...(shownavigation ? iconDataNavigation : []), ...(showsocial ? iconDataSocial : []), ...(showcontent ? iconDataContent : []), ...(showimage ? iconDataImage : []), ...(showcommunication ? iconDataCommunication : [])]

  {/* 
      - Change like google, show no categories when you have searched, only when search
        is empty? // måste kunna filtrera på categori även när man har sökt på något
      - create a search function
      - clean up code / remove all extra documents

       */}    

       
  return (  
    
    <div className="Main" id="Icons">

      <div className='color_ball_1'></div>
      <div className='color_ball_2'></div>

      <div className="info_text">        
        <h1 className='my_name'>Icons approved by Quickshop</h1>
        <h5 className='Designer'>This icon library has been approved by Marketing, Legal and the Design teams.
        They can be used on both internal and customer-facing systems. We urge you to use each icon for its intended purpose as can be seen in its name. 
        </h5>
      </div>


      
      
      {showaction === true && input.length === 0 ?
      <div>             
      <h2 className='section_title_icons'>Action</h2>            
      <div class="section">   
      {iconDataAction.map((data) => (
                   
        <div class="img-wrapper">
          <img src={data.imgPath} />
          <p>{data.name}</p>
          <a href={data.imgPath} download={data.name}>
            <button>
              <span class="material-icons-outlined">file_download</span>
            </button>
          </a>            
        </div>

        ))}
        </div>
        </div>:null
      }

      {shownavigation === true && input.length === 0 ?
      <div>        
      <h2 className='section_title_icons'>Navigation</h2>
      <div class="section">   
      {iconDataNavigation.map((data) => (
                   
        <div class="img-wrapper">
          <img src={data.imgPath} />
          <p>{data.name}</p>
          <a href={data.imgPath} download={data.name}>
            <button>
              <span class="material-icons-outlined">file_download</span>
            </button>
          </a>            
        </div>

        ))}
        </div>
        </div>:null
        }  

      {showcontent === true && input.length === 0 ?
      <div>    
      <h2 className='section_title_icons'>Content</h2>  
      <div class="section">   
      {iconDataContent.map((data) => (
                   
        <div class="img-wrapper">
          <img src={data.imgPath} />
          <p>{data.name}</p>
          <a href={data.imgPath} download={data.name}>
            <button>
              <span class="material-icons-outlined">file_download</span>
            </button>
          </a>            
        </div>

        ))}
        </div>
        </div>:null
        }

      {showsocial === true && input.length === 0 ?
      <div>
      <h2 className='section_title_icons'>Social</h2>
      <div class="section">   
      {iconDataSocial.map((data) => (
                   
        <div class="img-wrapper">
          <img src={data.imgPath} />
          <p>{data.name}</p>
          <a href={data.imgPath} download={data.name}>
            <button>
              <span class="material-icons-outlined">file_download</span>
            </button>
          </a>            
        </div>

        ))}
        </div>
        </div>:null
        }

      {showimage === true && input.length === 0 ?
      <div> 
      <h2 className='section_title_icons'>Image</h2>
      <div class="section">   
      {iconDataImage.map((data) => (
                   
        <div class="img-wrapper">
          <img src={data.imgPath} />
          <p>{data.name}</p>
          <a href={data.imgPath} download={data.name}>
            <button>
              <span class="material-icons-outlined">file_download</span>
            </button>
          </a>            
        </div>

        ))}
        </div>
        </div>:null
        }

        {showcommunication === true && input.length === 0 ?
        <div>   
        <h2 className='section_title_icons'>Communication</h2>
        <div class="section">   
        {iconDataCommunication.map((data) => (
                    
          <div class="img-wrapper">
            <img src={data.imgPath} />
            <p>{data.name}</p>
            <a href={data.imgPath} download={data.name}>
              <button>
                <span class="material-icons-outlined">file_download</span>
              </button>
            </a>            
          </div>
        

          ))}
          </div>
          </div>:null
          }
          
{/* This runs when user has started typing in the search -> */}
        {input.length > 0 ?
        <div>
        <div class="section">
          {test.filter(data=>data.name.toLowerCase().includes(input)).map((data) => (
                   
                   <div class="img-wrapper">
                     <img src={data.imgPath} />
                     <p>{data.name}</p>
                     <a href={data.imgPath} download={data.name}>
                       <button>
                         <span class="material-icons-outlined">file_download</span>
                       </button>
                     </a>            
                   </div>
           
                   ))}
        </div>
        </div>:null
        }
      
         

      



       
      



{/* Add new picture by adding the div "img-wrapper" and all of its content inside*/}

{/* kan ändra i download till vilket format jag vill, jpg, png .. etc */}
      
      
             
    
    
      
      <div class="modal">
        <img class="modal-img" src="#" alt=""/>
        <p class="caption"></p>
      </div>




    </div>

    
  );

  

}

