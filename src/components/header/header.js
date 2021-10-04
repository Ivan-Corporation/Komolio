import React, {useState} from 'react';
import './header.css';
import DehazeIcon from '@material-ui/icons/Dehaze';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

export default function Header(){
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logo">
          <span>
            <Link to="/">Koma Corporation</Link>
          </span>
        </div>
        <div className="headNav">
          <div className="navList">
            
    
            <span className="navText">
              <a href="https://github.com/Ivan-Corporation" target="_blank" rel="noreferrer">Github</a>
            </span>
            <span className="navText"><a href="mailto:hammer.99.ivan@gmail.com" target="_blank" rel="noreferrer">Contact</a></span>
          </div>
          <div className="sideBar">
            <DehazeIcon className="sideIcon" onClick={handleClick}/>
          </div>
          <Menu
            id="simple-menu"
            className="sideMenu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            
            <MenuItem>
              <a href="https://github.com/Ivan-Corporation">Github</a>
            </MenuItem>
            <MenuItem><a href="mailto:hammer.99.ivan@gmail.com">Contact</a></MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}
