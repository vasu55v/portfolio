import React from 'react'
import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='footer_container'>
        <h1>Virani Vasu</h1>
        <ul>
           <li title='linked in'><a href='https://www.linkedin.com/in/virani-vasu-9a0a6224a/'><FontAwesomeIcon icon={faLinkedin} size='2x' /></a></li>
           <li title='instagram'><a href='https://www.instagram.com/_vasu_555/'><FontAwesomeIcon icon={faInstagram} size='2x' /></a></li>
           <li title='email'><a href='mailto:vasuvirani54@gmail.com'><FontAwesomeIcon icon={faEnvelope}  size='2x'/></a></li>
=        </ul>
    </div>
  )
}

export default Footer