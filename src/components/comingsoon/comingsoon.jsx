import React from 'react'
import "./comingsoon.css"

export const Comingsoon = () => {
  return (
    <div>
      <div className='color_ball_1'></div>
      <div className='color_ball_2'></div>
      
      <div className='comingsoon_info'>
        The following types of Icons are being worked on in sprints
        and will soon be released. Please note that the set release date may change.  
      </div>
      <div className="comingsoon_component">
        <h2 className='releasedate_title'>Release date: 2022-12-01</h2>        
          <div className='p_container'>
            <span className='icon_comingsoon'>Play icon</span>
            <span className='icon_comingsoon_description'> - for users to start playing a video</span>
          </div>
          <div className='p_container'>
            <span className='icon_comingsoon'>Sell icon</span>
            <span className='icon_comingsoon_description'> - for users to sell a product</span>
          </div>
          <div className='p_container'>
            <span className='icon_comingsoon'>Date/Time icon</span>
            <span className='icon_comingsoon_description'> - for users to set a date and time</span>
          </div>
          <div className='p_container'>
            <span className='icon_comingsoon'>Review icon</span>
            <span className='icon_comingsoon_description'> - to show something is under review</span>
          </div>
        


        <h2 className='releasedate_title'>Release date: 2022-12-22</h2>        
          <div className='p_container'>
            <span className='icon_comingsoon'>Pencil icon</span>
            <span className='icon_comingsoon_description'> - for users to draw</span>
          </div>
          <div className='p_container'>
            <span className='icon_comingsoon'>Eraser icon</span>
            <span className='icon_comingsoon_description'> - for users to erase what has been drawn</span>
          </div>
          <div className='p_container'>
            <span className='icon_comingsoon'>Wheelchair icon</span>
            <span className='icon_comingsoon_description'> - to show accessibility</span>
          </div>
        

        <h2 className='releasedate_title'>Release date: 2023-01-12</h2>        
          <div className='p_container'>
            <span className='icon_comingsoon'>Cat icon</span>
            <span className='icon_comingsoon_description'> - to indicate a cat</span>
          </div>
          <div className='p_container'>
            <span className='icon_comingsoon'>Dog icon</span>
            <span className='icon_comingsoon_description'> - to indicate a dog</span>
          </div>
        


      </div>
    </div>
  )
}
