import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText,
Button, ButtonGroup } from '@material-ui/core';
import Card from './components/Card';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1)
  },
  heading: {
    margin: 0,
    padding: 'inherit'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  list: {
    backgroundColor: theme.palette.background.paper,
  },
  rating: {

  }
}));
const options = ['season', 'rating'];

export default function FullWidthGrid(props) {
  const classes = useStyles();
  const { data } = props;
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  function sort(a, b, sort) {
    return a[sort] < b[sort] ? 1 : -1;
  }
  function chooseSorting(event, index) {
    setSelectedIndex(index);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4" component="h1" className={classes.heading}>
            {data.heading}
          </Typography>
          <Paper className={classes.paper}>{data.description}</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          {data["gallery"].map((key, index) => (
            <Card key={index} data={key}/>
          ))}
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.heading}>
            Episode List
          </Typography>
          <ButtonGroup fullWidth aria-label="full width outlined button group">
            {options.map((option, index) => (
              <Button key={index} onClick={event => chooseSorting(event, index)}>{option}</Button>
            ))}
          </ButtonGroup>
          <List component="nav" className={classes.list} aria-label="contacts">
            {data["episode-list"].sort((a, b) => sort(a, b, options[selectedIndex])).map((key, index) => (
              <ListItem key={index} button>
                <ListItemText primary={key.name} secondary={`Season ${key.season}`}/>
                <ListItemIcon>
                  <StarIcon />{key.rating}/10
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
