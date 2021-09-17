import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyle = makeStyles({
  sixBox: {
    height: '60vh',
    backgroundColor: 'white',
    zIndex: '2',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sixBoxOne: {
    height: '90%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage:
      'url(https://thumbs.dreamstime.com/b/collage-popular-tourist-destinations-laos-travel-background-southeast-asia-collage-popular-tourist-destinations-laos-177739921.jpg)',
  },
});

const Six = () => {
  const classes = useStyle();
  return (
    <Grid container className={classes.sixBox}>
      <Grid item xs={12} sm={10} md={7} className={classes.sixBoxOne}></Grid>
    </Grid>
  );
};

export default Six;
