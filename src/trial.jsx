import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  root: {
    color: '#00008B',
    height: '280px',
    minWidth: 250,
    fontStyle: 'thicker',
    boxShadow: ' 0 16px 70px -12.125px rgba(0,0,0,0.3)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 4,
  },
  gridContainer: {
    paddingLeft: "15%",
    paddingRight: "15%",
  },
  textAlign: {
    textAlign: 'center' ,
  },
  color: {
    textAlign: 'center' ,
    color: '#f9a825',
  },
  button: {
    marginLeft: '4.5rem',
    borderRadius: 30, 
    backgroundColor: 'blue',
    color: 'white',
    boxShadow: ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(2, 2, 2, 0.19)',
  },
  Box : {
    borderLeft: '6px solid #f9a825',
    backgroundColor: '#f9a825',
    color: 'White', 
    width: '190px',
    height: '303px', 
    m: '40px',
    font: '20px Arial, sans-serif', 
    borderRadius: '22px',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '1px', 
    marginBottom: '8vh'
  },
  Box1 : {
    borderLeft: '6px solid #00008B',
    backgroundColor: '#00008B',
    color: 'White', 
    width: '190px',
    height: '303px', 
    m: '40px',
    font: '20px Arial, sans-serif', 
    borderRadius: '22px',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '1px', 
    marginBottom: '8vh'
  }
});


export default function SimpleCard()  {
  const classes = useStyles();
  function MouseOver(event) {
  event.target.style.backgroundColor = '#F5FFFA';
  event.target.style.color = '#000000';
  }
  function MouseOut(event){
    event.target.style.backgroundColor="#4B0082";
    event.target.style.color = '#F5FFFA';
    }

  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
    <Grid item xs={12} sm={6} md={4}  >
    <Box className={classes.Box}> Machine Learning
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h5" component="h2"className={classes.textAlign} >
          <h3>RS 25000</h3>
        </Typography>
        <Typography  variant="h6" component="h2"  className={classes.textAlign}>
        Code machine learning algorithum
        </Typography>
        <Typography variant="body2" component="p" className={classes.color}>
        (20-24 hr lecture)
          <br />
          (Duration 6 months)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.button}><span onMouseOver={MouseOver} onMouseOut={MouseOut}>Learn More</span></Button>
      </CardActions>
    </Card>
    </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Box className={classes.Box1}> Machine Learning
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h5" component="h2"className={classes.textAlign} >
          <h3>RS 25000</h3>
        </Typography>
        <Typography  variant="h6" component="h2"  className={classes.textAlign}>
        Code machine learning algorithum
        </Typography>
        <Typography variant="body2" component="p" className={classes.color}>
        (20-24 hr lecture)
          <br />
          (Duration 6 months)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"  className={classes.button}><span onMouseOver={MouseOver} onMouseOut={MouseOut}>Learn More</span></Button>
      </CardActions>
    </Card>
    </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Box className={classes.Box}> Machine Learning
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h5" component="h2"className={classes.textAlign} >
          <h3>RS 25000</h3>
        </Typography>
        <Typography  variant="h6" component="h2"  className={classes.textAlign}>
        Code machine learning algorithum
        </Typography>
        <Typography variant="body2" component="p" className={classes.color}>
        (20-24 hr lecture)
          <br />
          (Duration 6 months)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"  className={classes.button}><span onMouseOver={MouseOver} onMouseOut={MouseOut}>Learn More</span></Button>
      </CardActions>
    </Card>
    </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Box className={classes.Box}> Machine Learning
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h5" component="h2"className={classes.textAlign} >
          <h3>RS 25000</h3>
        </Typography>
        <Typography  variant="h6" component="h2"  className={classes.textAlign}>
        Code machine learning algorithum
        </Typography>
        <Typography variant="body2" component="p" className={classes.color}>
        (20-24 hr lecture)
          <br />
          (Duration 6 months)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.button}><span onMouseOver={MouseOver} onMouseOut={MouseOut}>Learn More</span></Button>
      </CardActions>
    </Card>
    </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Box className={classes.Box1}> Machine Learning
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h5" component="h2"className={classes.textAlign} >
          <h3>RS 25000</h3>
        </Typography>
        <Typography  variant="h6" component="h2"  className={classes.textAlign}>
        Code machine learning algorithum
        </Typography>
        <Typography variant="body2" component="p" className={classes.color}>
        (20-24 hr lecture)
          <br />
          (Duration 6 months)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.button}><span onMouseOver={MouseOver} onMouseOut={MouseOut}>Learn More</span></Button>
      </CardActions>
    </Card>
    </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Box className={classes.Box}> Machine Learning
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h5" component="h2"className={classes.textAlign} >
          <h3>RS 25000</h3>
        </Typography>
        <Typography  variant="h6" component="h2"  className={classes.textAlign}>
        Code machine learning algorithum
        </Typography>
        <Typography variant="body2" component="p" className={classes.color}>
        (20-24 hr lecture)
          <br />
          (Duration 6 months)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.button}><span onMouseOver={MouseOver} onMouseOut={MouseOut}>Learn More</span></Button>
      </CardActions>
    </Card>
    </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Box className={classes.Box}> Machine Learning
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h5" component="h2"className={classes.textAlign} >
          <h3>RS 25000</h3>
        </Typography>
        <Typography  variant="h6" component="h2"  className={classes.textAlign}>
        Code machine learning algorithum
        </Typography>
        <Typography variant="body2" component="p" className={classes.color}>
        (20-24 hr lecture)
          <br />
          (Duration 6 months)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.button}><span onMouseOver={MouseOver} onMouseOut={MouseOut}>Learn More</span></Button>
      </CardActions>
    </Card>
    </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Box className={classes.Box1}> Machine Learning
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h5" component="h2"className={classes.textAlign} >
          <h3>RS 25000</h3>
        </Typography>
        <Typography  variant="h6" component="h2"  className={classes.textAlign}>
        Code machine learning algorithum
        </Typography>
        <Typography variant="body2" component="p" className={classes.color}>
        (20-24 hr lecture)
          <br />
          (Duration 6 months)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.button}><span onMouseOver={MouseOver} onMouseOut={MouseOut}>Learn More</span></Button>
      </CardActions>
    </Card>
    </Box>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
    <Box className={classes.Box}> Machine Learning
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h5" component="h2"className={classes.textAlign} >
          <h3>RS 25000</h3>
        </Typography>
        <Typography  variant="h6" component="h2"  className={classes.textAlign}>
        Code machine learning algorithum
        </Typography>
        <Typography variant="body2" component="p" className={classes.color}>
        (20-24 hr lecture)
          <br />
          (Duration 6 months)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.button}><span onMouseOver={MouseOver} onMouseOut={MouseOut}>Learn More</span></Button>
      </CardActions>
    </Card>
    </Box>
    </Grid>
    </Grid>
  );
}

