import React from 'react';
import { Grid, makeStyles, Box, Button } from '@material-ui/core';
const useStyle = makeStyles({
  main: {
    minHeight: '700px',
    height: 'auto',
    backgroundColor: 'rgba(232, 255, 252, 1)',
    zIndex: '2',
    display: 'flex',
    justifyContent: 'center',
  },
  BoxOne: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    minHeight: '100px',
    justifyContent: 'space-evenly',
    textAlign: 'center',
  },
  BoxOneH4: {
    width: '100%',
    fontSize: '22px',
    fontWeight: 'normal',
  },
  BoxOneH1: {
    fontSize: '35px',
  },
  thirdBoxTwo: {
    marginTop: '20px',
    minHeight: '500px',

    height: 'auto',
  },
  thirdBoxGrid: {
    height: '499px',

    padding: '15px',
  },
  thirdGridBox: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  thirdUl: {
    width: '85%',
    fontSize: '18px',
    height: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    color: 'rgba(100, 100, 100, 1))',
  },
});

const Three = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.main} id="three">
      <Grid item xs={12} sm={12} md={8} className={classes.BoxOne}>
        <h1 className={classes.BoxOneH1}>Join our Boot Camp</h1>
        <h4 className={classes.BoxOneH4}>
          If you have the following skills and you are willing to gain the
          necessary experience, join our Boot Camp.
        </h4>
      </Grid>

      <Grid item xs={12} sm={12} md={8} className={classes.Boxne}>
        <Grid container className={classes.thirdBoxTwo}>
          <Grid item xs={12} sm={4} className={classes.thirdBoxGrid}>
            <Box className={classes.thirdGridBox}>
              <h1>React.js</h1>
              <ul className={classes.thirdUl}>
                <li>Experience working with HTML, CSS</li>
                <li>Experience working with React.js</li>
                <li>Experience working with Git</li>
                <li>Knowledge of SOLID, DRY and KISS principles</li>
                <li>Ability to communicate fluently in English</li>
              </ul>
              <Button variant="contained" color="primary">
                GET ONBOARD
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.thirdBoxGrid}>
            <Box className={classes.thirdGridBox}>
              <h1>React.js</h1>
              <ul className={classes.thirdUl}>
                <li>Experience working with HTML, CSS</li>
                <li>Experience working with React.js</li>
                <li>Experience working with Git</li>
                <li>Knowledge of SOLID, DRY and KISS principles</li>
                <li>Ability to communicate fluently in English</li>
              </ul>
              <Button variant="contained" color="primary">
                GET ONBOARD
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.thirdBoxGrid}>
            <Box className={classes.thirdGridBox}>
              <h1>React.js</h1>
              <ul className={classes.thirdUl}>
                <li>Experience working with HTML, CSS</li>
                <li>Experience working with React.js</li>
                <li>Experience working with Git</li>
                <li>Knowledge of SOLID, DRY and KISS principles</li>
                <li>Ability to communicate fluently in English</li>
              </ul>
              <Button variant="contained" color="primary">
                GET ONBOARD
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Three;
