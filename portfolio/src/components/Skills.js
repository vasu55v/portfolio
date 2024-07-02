import React from 'react'
import '../styles/skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5,faCss3Alt,faBootstrap,faJs,faPython,faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';



const Skills = () => {
  return (
    <div className='skills_container'>
        <h1 className='skills_title'>Skills</h1>
        <center>
        <div className='row'>
            <div className='col html'><FontAwesomeIcon icon={faHtml5} size='5x'/></div>
            <div className='col css'><FontAwesomeIcon icon={faCss3Alt} size='5x'/></div>
            <div className='col boot'><FontAwesomeIcon icon={faBootstrap} size='5x'/></div>
            <div className='col js'><FontAwesomeIcon icon={faJs} size='5x'/></div>
            <div className='col py'><FontAwesomeIcon icon={faPython} size='5x'/></div>
            <div className='col django_icon'>Django</div>
            <div className='col react'><FontAwesomeIcon icon={faReact} size='5x' /></div>
            <div className='col django_r_icon'>Django <br />Rest Framework</div>
            <div className='col data_base'><FontAwesomeIcon icon={faDatabase} size='5x' /></div>
            <div className='col c_plus_plus'>C++</div>
            <div className='col json'>Json</div>
            <div className='col-1 jwt_token'>JWT Token</div>
        </div>
        </center>
       
    </div>
  )
}

export default Skills