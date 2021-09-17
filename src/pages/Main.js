import React from 'react';
import { Grid, makeStyles, Box} from '@material-ui/core';
import First from '../components/first/First';
import Second from '../components/second/Second';
import Three from '../components/three/Three';
import Fourth from '../components/fourth/Fourth';
import Five from '../components/five/Five';
import Six from '../components/six/Six'
import Seven from '../components/Seven';
import Eight from '../components/eight/Eight'
import Barmenu from '../components/Barmenu';



const useStyles = makeStyles({
  mainContainer: {
    height: '100vh',
    backgroundColor: 'red',
    position: 'fixed',
    backgroundImage:
      'url(https://www.pharoscontrols.com/wp-content/uploads/2016/07/IMG_7258-1-scaled.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },

  
  
  /**************************seven row styles  */
  sevenBox: {
    minHeight: '80vh',
    backgroundColor: 'white',
    zIndex: '2',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  sevenContainer: {
    width: '60%',
    ['@media (max-width:920px)']: {
      width: '100%',
    },
    marginBottom: '50px',
  },
  sevenTextGrid: {
    width: '100%',
    fontSize: '35px',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '50px',
  },

  /**************************seven row styles end */
  
});

const Main = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid container className={classes.mainContainer}></Grid>
      <Barmenu />
      <First />
      <Second />
      <Three />
      <Fourth />
      <Five />
      <Six />
      <Box className={classes.sevenBox} id="seven">
        <Grid contaner className={classes.sevenContainer}>
          <Grid item xs={12} className={classes.sevenTextGrid}>
            We offer
          </Grid>
          <Seven />
        </Grid>
      </Box>
     <Eight />
    </Grid>
  );
};

export default Main;
