import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid,Box} from '@material-ui/core';

const useStyle = makeStyles({
    eightBox: {
        height: '60vh',
        zIndex: '2',
        width: '100%',
        backgroundImage:
          'url(https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      eightBoxMain: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(39, 78, 125,0.7)',
        display: 'flex',
        
        justifyContent: 'center',
      },
      eightBoxOne: {
       
        borderBottom: '1px solid white',
        minHeight: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        textAlign: 'center',
      },
      eightH1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '75px',
        ['@media (max-width:780px)']: {
          fontSize: '55px',
        },
      },
      eightH5: {
        color: 'white',
        fontSize: '25px',
      },
    
      eightBoxButtons: {
        width: '60%',
        ['@media (max-width:780px)']: {
          width: '100%',
        },
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      },
      eightButtonOne: {
        lineHeight: '45px',
        width: '100%',
        maxWidth: '230px',
        letterSpacing: '1px',
        borderRadius: '4px',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
        flex: '1 2 200px',
        marginBottom: '15px',
        marginTop: '15px',
        transition:'0.5s',
        '&:hover': {
          background: "none",
          border:'1px solid'
       },
      },
      eightButtonTwo: {
        width: '100%',
        maxWidth: '180px',
        letterSpacing: '1px',
        borderRadius: '4px',
        outline: 'none',
        border: '1px solid white',
        cursor: 'pointer',
        background: 'none',
        color: 'white',
        flex: '1 2 170px',
        lineHeight: '45px',
        marginBottom: '15px',
        marginTop: '15px',
        transition:'0.5s',
        '&:hover': {
          background: "white",
          color: 'black',
        },
      },
      eightBoxTwo: {
        display: 'flex',
       
        justifyContent: 'space-between',
        color: 'white',
        alignItems: 'center',
        marginTop: '50px',
      },
})
const Eight = () => {
    const classes = useStyle();
    return (
        <Grid container className={classes.eightBox} id="contact">

            <Grid container className={classes.eightBoxMain}>
                
          <Grid item xs={12} sm={10} md={8} className={classes.eightBoxOne}>
            <h1 className={classes.eightH1}>Challenge yourself</h1>
            <h5 className={classes.eightH5}>
              Take a step forward in your career path with Altexsoft
            </h5>
            <Box className={classes.eightBoxButtons}>
              <button className={classes.eightButtonOne}>
                JOIN OUR BOOT CAMP
              </button>
              <button className={classes.eightButtonTwo}>LET'S DISCUSS</button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={10} md={8} className={classes.eightBoxTwo}>
            <h1>alexsoft</h1>
            <h5>
              ©2021 <br />
              AltexSoft.com
            </h5>
          </Grid>
        </Grid>
      </Grid>
    )
}

export default Eight
