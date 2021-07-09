
import { Grid } from '@material-ui/core';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import {Nav} from '../components/Nav'

const useStyles = makeStyles({
  homepage: { 
    flexGrow: 1,
    rowGap: '8rem',
    columnGap: '4rem',
    margin: '6rem 6rem 6rem 6rem '
    
  },
  nav: { 
    backgroundColor: "blue",
    color: 'red',
    order: '1',
    justifySelf: 'flex-end',
    height: "100%",
    textAlign: 'center',
    width: '20% vw'

  },
  main: { 
    justifyContent: 'center',
    textAlign: "center",
    order: '0',
    backgroundColor: 'yellow'
    

  },
  footer: { 
    alignContent: 'flex-end',
    backgroundColor: "purple",
    order: '2',
    textAlign: 'center',
  }
})

export const HomePage = () => { 
  const classes = useStyles();

  return ( 

<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  className={classes.homepage}
>

<Grid item xs= {2} className={classes.nav}> 

<Nav />

</Grid>

<Grid className={classes.main} item xs={8}> 
main content
</Grid>


<Grid className={classes.footer} item xs={12}> 
footer
</Grid>

</Grid>


    
  )
  
}