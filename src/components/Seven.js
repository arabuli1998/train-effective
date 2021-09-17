import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    height: '190px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-around',
  },
 
  li: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: '70%',
  },
  h5: {
    maxWidth: '190px',
    fontSize: '17px',
    color:'rgba(101, 101, 101, 1)'
  },
  media: {
    width: '120px',
    height: '120px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    cursor:'pointer'
  },
});
const Seven = () => {
  const classes = useStyles();
  const lists = [
    {
      image:
        'https://bootcamp-georgia.altexsoft.com/wp-content/themes/altexlab/img/icn-salary.svg',
      title: 'Competitive salary with possibility of increasing',
    },
    {
      image:
        'https://bootcamp-georgia.altexsoft.com/wp-content/themes/altexlab/img/icn-team.svg',
      title: 'Challenging projects in friendly teams',
    },
    {
      image:
        'https://bootcamp-georgia.altexsoft.com/wp-content/themes/altexlab/img/icn-office.svg',
      title: 'Office in the modern coworking space',
    },
    {
      image:
        'https://bootcamp-georgia.altexsoft.com/wp-content/themes/altexlab/img/icn-dev-opportunities.svg',
      title: 'Career development opportunities',
    },
    {
      image:
        'https://bootcamp-georgia.altexsoft.com/wp-content/themes/altexlab/img/icn-english.svg',
      title: 'English speaking clubs',
    },
    {
      image:
        'https://bootcamp-georgia.altexsoft.com/wp-content/themes/altexlab/img/icn-certification.svg',
      title: 'Partial compensation of education & certification',
    },
    {
      image:
        'https://bootcamp-georgia.altexsoft.com/wp-content/themes/altexlab/img/icn-pluralsight.svg',
      title: 'Free access to the Pluralsight knowledge base',
    },
    {
      image:
        'https://bootcamp-georgia.altexsoft.com/wp-content/themes/altexlab/img/icn-library.svg',
      title: "Use of the library's materials which are constantly updated",
    },
  ];
  const renderList = (card, index) => {
    return (
      <Grid item sm={4} md={3} xs={6} className={classes.root} key={index}>
        <Box
          className={classes.media}
          style={{ backgroundImage: `url(${card.image})` }}
        ></Box>
        <h5 className={classes.h5}>{card.title}</h5>
      </Grid>
    );
  };

  return (
    <Grid container className={classes.li}>
      {lists.map(renderList)}
    </Grid>
  );
};
export default Seven;
