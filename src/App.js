import React from 'react';
import './App.css';


import './assets/css/onedark.css';

import komaquiz from './assets/img/komaquiz.png';
import monkey from './assets/img/monkey.jpg';


import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
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



  const useStyles = makeStyles((theme) => ({
  
 
    lightMode: {
      background: "white"
  },
    darkMode: {
      background: "gray",    
  },
    title: {
      color: '#e6e3e3',
       margin: 'auto',
      fontFamily: 'Montserrat',
      fontSize: '60px',
      textTransform: 'uppercase',
    },
  
  }));
  
  
  const classes = useStyles();


  return (
    <div >
      
      <div className="intro">
      
        <div className="introCards" onClick={handleOnClick}>
          <IntroCard count={0} curState={states[card1]}/>
          <ProjectCard count={1} curState={states[card2]}/>
          <SocialCard count={2} curState={states[card3]}/>
          <LangCard count={3} curState={states[card4]}/>
        </div>
      
        
      </div>






  
    </div>
    
  )
}

export default App;
