import React from 'react'
import '../styles/education.css'
import uni_logo from '../assets/vnsgu.png'
import board_logo from '../assets/guj_board.png'

const Education = () => {
  return (
    <div className='edu_container'>
        <h1 className='e_title'>Eduction</h1>
        <div className='con'>
        <div className='con_1'>
          <img src={uni_logo} className='img_uni'/>
          <div>
          <p>Bachelor of Computer Applications</p>
          <p>Year:2022-2025</p>
          </div>
        </div>
        <div className='con_1'>
        <img src={board_logo} className='img_uni'/>
          <div>
          <p>Gujarat Secondary and Higher Secondary Education Board</p>
          <p>Year:2010-2022</p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Education