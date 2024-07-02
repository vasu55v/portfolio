import React from 'react'
import '../styles/header.css'
import img from '../assets/man.png'
import Typewriter from 'typewriter-effect';


const Header = () => {
  return (
    <div className='header_container'>
        <div className='intro_container'>
            <h1>
            Professional Full Stack
            <br />
                <Typewriter
                    options={{
                        strings: ['Web Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
              </h1>
            <h4>Django & React js enthusiast</h4>
            <p>I like to craft solid and scalable Full stack product <br />with grate user experience</p>
        </div>
          <section className='section_container'>
            <img className='img_profile_pic' src={img} alt=''/>
          </section>
    </div>
  ) 
}

export default Header