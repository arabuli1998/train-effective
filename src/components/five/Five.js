import React from 'react';
import { Grid, makeStyles} from '@material-ui/core';
const useStyle = makeStyles({
    fiveBox: {
        minHeight: '35vh',
        backgroundColor: 'white',
        zIndex: '2',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      },
      fiveBoxOne: {
        marginTop:'50px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      },
      p: {
        fontSize: '25px',
        color: 'rgba(105, 105, 105, 1)',
      },
})

const Five = () => {
    const classes = useStyle();
    return (
        <Grid container className={classes.fiveBox}>
        <Grid item xs={12} sm={10} md={8} className={classes.fiveBoxOne}>
          <h1>About AltexSoft</h1>
          <p className={classes.p}>
            We are AltexSoft, an international consulting company. Every day we
            create solutions that solve our customers' problems. Thanks to this
            practice, we have real knowledge and proven expertise in Travel
            Tech, Data Science, UI/UX, Business Analysis and Software
            Engineering. Our portfolio includes more than 300 cases that we are
            proud of. Day by day, we strive to be more productive and help our
            customers implement business development strategies through
            technology.
          </p>
        </Grid>
      </Grid>
    )
}

export default Five
