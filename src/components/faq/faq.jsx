import React from 'react'
import "./faq.css"

export const Faq = () => {
  return (
    <div>
      <div className='color_ball_1'></div>
      <div className='color_ball_2'></div>

      <div className='faq_section'>

      <details>
        <summary>How do i contact you?</summary>
        <p>If you have any questions or requests then please contact us at: <a href="mailto:Icons@Quickshop.com">Icons@Quickshop.com</a> </p>
      </details>

      <details>
        <summary>I cant find the icon i need, what do i do?</summary>
        <p>If you are in need of a specific icon that does not yet exist, please contact us and we will see what we can do.</p>
      </details>

      <details>
        <summary>Is it okey to modify the icon i download?</summary>
        <p>Feel free to change the color and size of the icon, we would however not recommend that you change the design or the use of the icon. This is because we want consistency between our system so that user can more quickly recognize an icon and know what it means.</p>
      </details>

      <details>
        <summary>How do i know how an icon is suppose to be used?</summary>
        <p>Hopefully the icon itself shows how its suppose to be used. For further clarification of an icon, please look at its name.</p>
      </details>

      <details>
        <summary>I have designed my own icon, can i use it in my system?</summary>
        <p>We would prefer that you only use icons found on this site. If you have designed your own icon then please contact us and send us the icon you have designed and we will try to include it on this site.</p>
      </details>

      <details>
        <summary>What format does the icons come in?</summary>
        <p>The icons are downloaded with the SVG extension.</p>
      </details>

      <details>
        <summary>Whats the file-size of each icon?</summary>
        <p>The icons range from 0.1 to 2 KB each.</p>
      </details>


       

      </div>

    </div>
  )
}
