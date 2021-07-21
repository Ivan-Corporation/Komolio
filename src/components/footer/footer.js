import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// "@fortawesome/free-regular-svg-icons": "^5.15.1",

import {
  faGithub,
  faTwitter,
  faBehanceSquare,
  faCodepen} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

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
          <a href="mailto:hammer.99.ivan@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

        </div>
      </div>
    </div>
  )
}
