import {Link} from "react-router-dom";
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Paper className={classes.paper} >
                <Link to="/about">創立房間</Link>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper} >
                <Link to="/about2">加入房間</Link>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}
