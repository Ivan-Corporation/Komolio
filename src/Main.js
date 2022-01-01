import React, { Suspense } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import DarkModeToggle from "react-dark-mode-toggle";

// import './assets/css/background/cloud.scss'
import './assets/css/background/stars.css'



import { BrowserRouter as Router } from "react-router-dom";

import { useTranslation } from "react-i18next";
import LanguageFlags from './components/flags/LanguageFlags';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import App from './App';
import Typography from '@material-ui/core/Typography';
import SendIcon from '@material-ui/icons/Send';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Button from '@material-ui/core/Button';
import Tooltip from '@mui/material/Tooltip';
import Projects from './components/projects/Projects';
import "react-tiger-transition/styles/main.min.css";
import { Navigation, Route, Screen, Link, glide, cube } from "react-tiger-transition";

// inject glide styles
glide({
  name: 'glide-left'
});
glide({
  name: 'glide-right',
  direction: 'right'
});

cube({
  name: 'cube-left',
  direction: 'left'
});
cube({
  name: 'cube-right',
  direction: 'right'
});


// you will need to set the height of  <Navigation /> wrapper,
// in this case, it is the root node,
// better to do this on your stylesheet
document.getElementById("root").style.height = "100vh";


export default function Main() {

  //Translation
  const { t } = useTranslation();

  // Hook for darkMode
  function useStickyState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    React.useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  const [darkMode, setDarkMode] = useStickyState(true, 'DarkMode?');
 
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  })

  const useStyles = makeStyles((theme) => ({
  
toggler: {
  position: 'absolute',
  left: '0',
  paddingLeft: '10px',
  paddingTop: '20px',
  zIndex: '5'
},


}));


const classes = useStyles();





  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>

      <CssBaseline />   

                        <Container className={darkMode ? 'stars' : ''} maxWidth="sm">
                          <div className={darkMode ? 'shooting-star' : 'height2px'}></div>
                         
                     
                        <Grid container spacing={3}>


                        
                        <LanguageFlags theme={theme}/>
                          <div className={classes.toggler}>
                            <Tooltip title={t('click_to_change')} arrow>
                            <DarkModeToggle
                            onChange={setDarkMode}
                            checked={darkMode}
                            size={80}
                          />
                            </Tooltip>
                            </div>    
                      </Grid>                                                       
        
          </Container> 
   
        
         <Router>

    <Navigation>

      <Route exact path="/">
 
        <Screen>
                <App/>

          <Button>
          <Link to="/projects" transition='cube-left'>
            Check out the page A
          </Link>
          </Button>

        </Screen>
      </Route>

      <Route
        exact path="/projects"
        screen // shorthand to wrap children with screen
     >
       <Projects/>
       <Button>
        <Link to="/" transition='cube-right'>
          Back to home page
        </Link>
        </Button>
      </Route>
    </Navigation>
  </Router>
             {/* 
              
              <Route exact path='/history' component={History}/> */}

      
 
     
       
      </ThemeProvider>
    </React.Fragment>   
  );
}