import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    fourthBox: {
        height: '40vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: '2',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      },
      fourthBoxOne: {
        
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        color: 'white',
      },
      fourthBoxOneH2: {
        fontSize: '2vw',
        ['@media (max-width:780px)']: {
          fontSize: '5vw',
        },
        textAlign: 'center',
      },
      fourthBoxOneH1: {
        fontSize: '45px',
        textAlign: 'center',
      },
});

const Fourth = () => {
    const classes = useStyle();
    return (
        <Grid container className={classes.fourthBox}>
        <Grid item xs={12} sm={10} md={8} className={classes.fourthBoxOne}>
          <h2 className={classes.fourthBoxOneH2}>
            Here, you’ll do more than join something.
          </h2>
          <h1 className={classes.fourthBoxOneH1}>You’ll add something.</h1>
        </Grid>
      </Grid>
    )
}

export default Fourth
