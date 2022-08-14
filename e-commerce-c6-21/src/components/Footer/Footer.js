import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSlack } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer__col1">
        <div className='hat-icon-footer'><FontAwesomeIcon icon={faMountain}></FontAwesomeIcon></div>
        <div className='description-footer'>
          <h2>nombreProyecto</h2>
          <p>Proyecto cohorte 6 - No Country</p>
        </div>
      </div>
      <div className="footer__col3">
        <h4 style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>@No Country</h4>
        <div className='contact__icons-2 d-flex justify-content-evenly'>
          <a className='link' href='https://github.com/No-Country' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
          <a className='link' href='https://linkedin.com/company/nocountryforjuniordevs/' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
          <a className='link' href='https://no-country.slack.com/archives/C02KW0N1BS9' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faSlack}></FontAwesomeIcon></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer