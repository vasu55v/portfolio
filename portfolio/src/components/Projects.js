import React from 'react'
import '../styles/projects.css'
import project1 from '../assets/project1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFerry,faCartShopping,faCloud,faRobot,faThumbsUp,faList} from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <div className='project_container'>
               <h1 className='p_title'>Projects</h1>
        <div className='row-projects'>
            <div className='col-1'>
                <div className='img'>
                <FontAwesomeIcon icon={faFerry} size='8x' style={{color:'lightblue'}}/>
                </div>
                <div className='project_title'>
                    <h1>Import Export website</h1>
                </div>
                <div className='project_desc'>
                   <p>This project is one of my client.
                     <br />
                    and this website is made in react and django rest framework.
                    with token authentication.
                   </p>
                </div>
                <div className='btn_div'>
                <button id="btn">view</button>
                </div>
            </div>
            <div className='col-1'>
                <div className='img'>
                <FontAwesomeIcon icon={faCartShopping} size='8x' style={{color:'lightblue'}}/>
                </div>
                <div className='project_title'>
                    <h1>E-commerce website</h1>
                </div>
                <div className='project_desc'>
                   <p> it is multi vendor e-commerce website. this website is made in react and django rest framework.
                    with authentication and it has various functionality.
                   </p>
                </div>
                <div className='btn_div'>
                <button id="btn">view</button>
                </div>
            </div>
            <div className='col-1'>
                <div className='img'>
                <FontAwesomeIcon icon={faCloud}  size='8x' style={{color:'lightblue'}}/>
                </div>
                <div className='project_title'>
                    <h1>Weather website</h1>
                </div>
                <div className='project_desc'>
                   <p> this website is made in react js and Weather api  it shows us Weather of various city.
                    along with wind,humidity etc.
                    </p>
                </div>
                <div className='btn_div'>
                <button id="btn">view</button>
                </div>
            </div>
            <div className='col-1'>
                <div className='img'>
                <FontAwesomeIcon icon={faRobot}  size='8x' style={{color:'lightblue'}}/>
                </div>
                <div className='project_title'>
                    <h1>Gemini clone</h1>
                </div>
                <div className='project_desc'>
                   <p>this website is made in react js and free Gemini api it give us answer of our various questions.
                    it also has a responsive design
                   </p>
                </div>
                <div className='btn_div'>
                <button id="btn">view</button>
                </div>
            </div>
            <div className='col-1'>
                <div className='img'>
                <FontAwesomeIcon icon={faThumbsUp} size='8x' style={{color:'lightblue'}}/>
                </div>
                <div className='project_title'>
                    <h1>Basic Social media website</h1>
                </div>
                <div className='project_desc'>
                   <p>this website is made in  django and other technologies like html,css etc.
                   </p>
                </div>
                <div className='btn_div'>
                <button id="btn">view</button>
                </div>
            </div>
            <div className='col-1'>
                <div className='img'>
                <FontAwesomeIcon icon={faList} size='8x' style={{color:'lightblue'}}/>
                </div>
                <div className='project_title'>
                    <h1>Dynamic table web application</h1>
                </div>
                <div className='project_desc'>
                   <p>
                    this website is made in react and along with  other technologies like html,css etc.
                   </p>
                </div>
                <div className='btn_div'>
                <button id="btn">view</button>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Projects