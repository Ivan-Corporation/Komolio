import React from 'react';
import './App.css';


import './assets/css/onedark.css';

import profileImg from './assets/img/profile.png';



import PythonIcon from './assets/img/icons/python.png';
import JavaScriptIcon from './assets/img/icons/javaScript.png';
import ReactIcon from './assets/img/icons/react.png'; 
import NodeJsIcon from './assets/img/icons/nodejs.png';
import BlenderIcon from './assets/img/icons/blender.png';
import MongoDBIcon from './assets/img/icons/mongo.png';
import CSSIcon from './assets/img/icons/css.png';
import KomaIcon from './assets/img/icons/koma.png';

import {
  IntroCard,
  LangCard,
  SocialCard,
  ProjectCard
} from './cards.js';


function App() {

  const [card1, setCard1] = React.useState(1)
  const [card2, setCard2] = React.useState(-2)
  const [card3, setCard3] = React.useState(-1)
  const [card4, setCard4] = React.useState(0)


  const [isMobo, setMobo] =  React.useState(()=>{
    return window.outerWidth<=650;
  })

  window.addEventListener('resize',()=>{
    setMobo(window.outerWidth<=650);
  });

  document.body.dataset.page = "home"

  const handleOnClick = ()=>{
    if(card1==2){
      setCard1(-1);
    }else{
      setCard1(card1+1);
    }

    if(card2==2){
      setCard2(-1);
    }else{
      setCard2(card2+1);
    }

    if(card3==2){
      setCard3(-1);
    }else{
      setCard3(card3+1);
    }

    if(card4==2){
      setCard4(-1);
    }else{
      setCard4(card4+1);
    }

  }

  const states = {
    "-3": "",
    "-2": "",
    "-1": "",
    "0": " followed",
    "1": " front",
    "2": " fall"
  }

  const links = {
    "github" : "https://github.com/Ivan-Corporation",
    "twitter" : "https://twitter.com/KomaHuman"
  }

  const clicked = (altValue)=>{
    return;
    window.open(links[altValue], "_blank");
  }

  return (
    <div className="home">
      <div className="intro">
        <div className="introCards" onClick={handleOnClick}>
          <IntroCard count={0} curState={states[card1]}/>
          <ProjectCard count={1} curState={states[card2]}/>
          <SocialCard count={2} curState={states[card3]}/>
          <LangCard count={3} curState={states[card4]}/>
        </div>
        <div className="profileImage">
          <img className="introImage" src={profileImg} alt="profile"/>
          <div className="ringCircle innerCircle">
            <img onClick={()=>{
              clicked("twitter");
            }} className="planetCircle" src={PythonIcon} alt="twitter"/>
            <img onClick={()=>{
              clicked("github");
            }} className="planetCircle" src={JavaScriptIcon} alt="github"/>
          </div>
          <div className="ringCircle outerCircle">
            <img className="planetCircle" src={ReactIcon} alt=""/>
            <img className="planetCircle" src={BlenderIcon} alt=""/>
            <img className="planetCircle" src={KomaIcon} alt=""/>
            <img className="planetCircle" src={CSSIcon} alt=""/>
            <img className="planetCircle" src={MongoDBIcon} alt=""/>
            <img className="planetCircle" src={NodeJsIcon} alt=""/>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App;
