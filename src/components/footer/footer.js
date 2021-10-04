import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// "@fortawesome/free-regular-svg-icons": "^5.15.1",

import {
  faGithub,
  faTwitter,
  faTelegram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import './footer.css';

const Data = new Date();
const Year = Data.getFullYear();


export default function Footer(){
  return (
    <div className="footer">
      <div className="footCont">
        <span className="copyrightText">
          Copyright © {Year}. Koma Corporation. All rights reserved
        </span>
 
        <div className="socialinks">
          <span>Links:</span>
          <a href="https://github.com/Ivan-Corporation" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com/KomaHuman" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://t.me/KomarIvan" target="_blank">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="https://www.youtube.com/c/KomarCorporation" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>

        </div>
      </div>
    </div>
  )
}
