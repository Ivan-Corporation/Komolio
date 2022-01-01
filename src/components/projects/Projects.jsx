import { useTranslation } from "react-i18next";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';

import EventAvailableIcon from '@material-ui/icons/EventAvailable';

import Tooltip from '@mui/material/Tooltip';

import { BrowserRouter as Router, Link } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';
import React from 'react';




const useStyles = makeStyles((theme) => ({ 
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  cardsTopPadding: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(12),
  },
  card: {
    height: '20rem',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '62.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default function Projects() {

    const { t } = useTranslation();

    const classes = useStyles();

    

    return(
        <Container maxWidth="md">
            
      
            <Typography variant="h4" align="center" paragraph>
                <b>{t('trophies')}</b>
                </Typography>
                <hr/>
  
            <Grid align="center" className={classes.cardsTopPadding} container spacing={4} >
  
            
            
           
              
                <Grid item  xs={6} sm={6} md={3}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                <CardActionArea>
                  <Card className={classes.card}>
                    <CardMedia     
                      className={classes.cardMedia}
                      image='../../../final.png'
                      title={'name'}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography align="center" gutterBottom variant="h5" component="h2">
                      <b>{t('name')}</b>
                      </Typography>
                      <Typography align="center" variant="subtitle2">
                      {t('description')}
                      </Typography>
                    </CardContent>                  
                    <CardActions>
                    <Tooltip title={t('created')} arrow>
                    <Container align="center">
                     <EventAvailableIcon />  <Typography variant="subtitle2">{'date'}</Typography>
                   </Container>
                   </Tooltip>
                    </CardActions>               
                  </Card>
                  </CardActionArea>  
                  </Link>     
                </Grid>
            
              <Grid item  xs={12} sm={6} md={4}>
                <Skeleton variant="rectangular" width={280} height={318} />
                </Grid>
              
            
            
  
        </Grid>
      
        </Container>
    )

}