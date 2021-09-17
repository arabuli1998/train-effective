import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-scroll';

const useStyle = makeStyles({
    main: {
        height: '80vh',
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        justifyContent: 'center',
        zIndex:'2'
      },
      firstBoxMain: {
        color: 'white',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginTop:'50px'
      },
      firstBoxH2: {
        width: '60%',
        ['@media (max-width:780px)']: {
          width: '100%',
        },
        
      },
      firstBoxH1: {
        fontSize: '60px',
        ['@media (max-width:780px)']: {
          fontSize: '35px',
        },
      },
})

const First = () => {
    const classes = useStyle();
    return (
        <Grid container className={classes.main} id="main">
        <Grid item xs={12} sm={10} md={8} className={classes.firstBoxMain}>
          <h3 className={classes.firstBoxH2}>
            ALTEXSOFT IS LAUNCHING AN INTERNATIONAL BOOT CAMP IN GEORGIA
            REACT.JS, NODE.JS, .NET WANTED
          </h3>
          <h1 className={classes.firstBoxH1}>
            Hey there! AltexSoft Boot Camp is looking for ambitious engineers in
            Georgia
          </h1>
          
          <Link to="contact"  smooth={true} duration={1000} className="firstBoxOne">
            <h4>JOIN</h4>
            <ExpandMore />
            </Link>
          
        </Grid>
      </Grid>
    )
}

export default First
