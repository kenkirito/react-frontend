import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import  {withStyles} from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import call from './img/call.png';



const useStyles = makeStyles({
Outerbox: {
  backgroundColor: '#F0F8FF',
  marginRight: '5rem',
  marginLeft: '5rem', 
  paddingTop: '2rem', 
  boxShadow: ' 0 16px 70px -12.125px rgba(0,0,0,0.3)'
},
Typography:{
  color: "#00008B", 
  paddingLeft: '15rem',
  fontSize: '30px',
  marginBottom: '30px'
},
Container : {
  backgroundColor: '#F0F8FF',
  width: '90%'
},
image: {
  backgroundImage: 'url('+call+')',
  display: 'block',
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
},
boxes: {
  backgroundColor: 'White', 
  borderRadius: '7px', 
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1)',
},
spacing: {
  paddingRight: '15rem',
  paddingLeft: '5rem'
}

});


const ColorButton = withStyles((theme) => ({
  root: {
  marginTop: '20px',
  marginLeft: '20px',
  width: '18vh',
  boxShadow: '10px 10px 5px 0px grey',
  borderRadius: 30,
  style: { width: '5rem', height: '5rem' },
    color: theme.palette.getContrastText(yellow[300]),
    backgroundColor: yellow[300],
    "&:hover" :{
      backgroundColor: yellow[700]
    }
  }
}))(Button);

export default function AddressForm() {
  const classes = useStyles();
    return (   
      <React.Fragment>
        <Box
             /*boxShadow={3}
             bgcolor="background.paper"*/
             m={3}
             p={5}
             className={classes.Outerbox}
             >
      <Grid container>
      <Typography className={classes.Typography}>
        For any kind of quory please write to us below.....
        </Typography>
      <Container className={classes.Container} >
      <div class="center" className={classes.image}>
        <Grid container spacing={4} className={classes.spacing} >
          <Grid item xs={12} sm={6}  >
            <TextField
              required
              id="outlined-basic"
              variant="outlined" 
              name="Fullname"
              fullWidth
              label="Fullname" 
              autoComplete="given-name"
              className={classes.boxes}
            />
          </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="outlined-basic"
            name="E-mail"
            label="E-mail"
            variant="outlined" 
            fullWidth
            autoComplete="family-name"
            className={classes.boxes}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="phonenumber"
            name="phonenumber"
            label="phonenumber"
            variant="outlined" 
            fullWidth
            autoComplete="shipping number"
            className={classes.boxes}
          />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField
            required
            id="subject"
            name="subject"
            label="subject"
            variant="outlined" 
            fullWidth
            autoComplete="shipping country"
            className={classes.boxes}
          />
        </Grid>
        <Grid item xs={12} > 
          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            className={classes.boxes}
          />
        </Grid>
        <div >
      <ColorButton
        variant="contained"
        color="primary"
      >
        Send
      </ColorButton>
    </div>
    </Grid>
        </div>
        </Container>
        </Grid>
        </Box>
        </React.Fragment>
  );
    }


