import { useTranslation } from "react-i18next";
import Container from '@material-ui/core/Container';
import secret from '../Images/stuff/secret.png'
import Grid from '@material-ui/core/Grid';
import {
    AwesomeButton,
  } from 'react-awesome-button';
  import "react-awesome-button/dist/styles.css";
  import 'react-awesome-button/dist/themes/theme-c137.css';
  import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import '../Styles/rotatedAnim.css'
import Countdown from 'react-countdown';
import {Helmet} from 'react-helmet'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import monkey from '../Images/stuff/monkey.webp'
import styles from '../Styles/animated-image.module.scss'
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  onSnapshot,
  doc
} from "firebase/firestore";
import { useState, useEffect } from "react";




const useStyles = makeStyles((theme) => ({
    table: {
        width: '100%',
        paddingBottom: '30px'
    }
  }));

export default function Settings() {

    const { t } = useTranslation();

    const classes = useStyles();

  
    const [wobble, setWobble] = React.useState(0)




    const [user, setUser] = useState({});
  
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
        
    });

    
    

    return(
        <Container maxWidth="md">
            
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
          <img src={monkey} />
        </div>
        <div class="card_title title-white">
          <p>KomaQuiz</p>
        </div>
      </a>


      </div>


      </div>
      
        </Container>
    )

}