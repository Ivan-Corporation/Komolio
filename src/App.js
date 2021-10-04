import React from 'react';
import './App.css';


import './assets/css/onedark.css';
import './assets/css/projects.css';

import profileImg from './assets/img/profile.png';
import komaquiz from './assets/img/komaquiz.png';
import monkey from './assets/img/monkey.jpg';




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
            <img className="planetCircle" src={PythonIcon} alt="twitter"/>
            <img className="planetCircle" src={JavaScriptIcon} alt="github"/>
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
      <div className="projectsHeader">
      <h1 className="projectsHeaderText">Projects</h1>
      

          <div class="cards-list">

      <a href='https://reverent-shirley-b86f3e.netlify.app/' class="card 1">
        <div class="card_image"> <img src="https://raw.githubusercontent.com/Ivan-Corporation/Komagram/main/3.png" /> </div>
        <div class="card_title title-white">
          <p>Komagram</p>
        </div>
      </a>

        <a href='https://komaroad.com' class="card 2">
        <div class="card_image">
          <img src={monkey} />
          </div>
        <div class="card_title title-white">
          <p>Komaroad</p>
        </div>
      </a>

      <a href="https://play.google.com/store/apps/details?id=komar.corporation.Quiz&hl=en" class="card 3">
        <div class="card_image">
          <img src={komaquiz} />
        </div>
        <div class="card_title title-white">
          <p>KomaQuiz</p>
        </div>
      </a>


      </div>


      </div>
      
    </div>
    
  )
}

export default App;
