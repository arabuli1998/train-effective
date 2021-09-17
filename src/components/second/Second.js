import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
const useStyle = makeStyles({
  main: {
    minHeight: '50vh',

    backgroundColor: 'white',
    zIndex: '2',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  secondBoxOne: {
    marginTop: '50px',
    width: '60%',
    ['@media (max-width:780px)']: {
      width: '99%',
      marginBottom: '20px',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  secondUl: {
    minHeight: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontSize: '27px',
    color: 'rgba(118, 118, 118, 1)',
  },
});

const Second = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.main} id="second">
      <Grid item xs={12} sm={10} md={8} className={classes.secondBoxOne}>
        <h1>What is a Boot Camp?</h1>
        <ul className={classes.secondUl}>
          <li>
            Three months of work on a training project under the guidance of an
            experienced mentor
          </li>
          <li>
            Employment in an international company with expertise in Travel
            Tech, Data Science, UI/UX, Business Analysis and Software
            Engineering
          </li>
          <li>
            Be a part of the big team and get acquainted with the existing
            developing processes
          </li>
          <li>
            A perfect opportunity to grow, develop your career and work on our
            clients` projects
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default Second;
