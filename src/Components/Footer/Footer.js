import React from 'react'
import './Footer.css'
import {
    AiOutlineCopyrightCircle,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillLinkedin,
} from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

function Footer() {
  return (
      <div className='Footer'>
          <div className='footer-container'>
              <div className='content' >
                  <h3>
                      BALACLAVA

                  </h3>
                  <div  >
                      <p><AiOutlineCopyrightCircle /> 2022
                          BALACLAVA
                      </p>
                  </div>
                  
              </div>
             

              <div>
                  
                  <p style={{ paddingTop:'10px'}}>
                      <BsFacebook />
                      <AiOutlineInstagram />
                      <AiOutlineTwitter />
                      <AiFillLinkedin />
                  </p>
              </div>

          </div>
          
    </div>
  )
}

export default Footer