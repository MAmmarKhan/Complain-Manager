import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import $ from "jquery";
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
    root: {
      
    },
    paper: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    }
  }));
function showUserProfile(){
  if($('#name').val() === '' || $('#email').val() === '' || $('#contact').val() === ''|| $('#address').val() === ''|| $('#Date').val() === '' || $('#country').val() === '' || $('#state').val() === '') 
  {
      return;
  }
  var json = '{"FullName":"'+ $('#name').val() + '" "Email":"'+ $('#email').val() + '" "Contact": "' + $('#contact').val() +
  '" "Address": "' + $('#address').val() + '" "State": "' + $('#state').val() + '" "country": "' + $('#country').val() + '" "Date": "' + $('#Date').val() + 
  '"}'; 
  alert(json);
  console.log();
  $('#username').text($('#name').val() + " Profile");
}
export default function UserProfile() {
    const classes = useStyles();
    
    return (
        <div>
            <Paper elevation={3} className="userProfile">
            <div style={{display:'flex', alignItems: 'center'}}>
              <PersonIcon></PersonIcon>
              <h3 id="username" >SurgentFoxy's Profile</h3>
            </div>
            <p><b>Last Updated at:</b> 23/08/2021, 01:06:05</p>              
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="name" label="FullName" required/>
                <TextField id="email" label="UserEmail" required/>
                <TextField id="contact" type="number" label="Contact" required/>				  
                <TextField id="address" label="Address" required/>
                <TextField id="state" label="State" required/>
                <TextField id="country" label="country" required/>
                <TextField style={{verticalAlign: 'bottom', marginTop:'20px'}} id="Date" type="Date" required/>
                <br></br>
                <div></div>
                <Button variant="contained" color="primary"  className="submitButton" onClick={showUserProfile}>
                    SUBMIT
                </Button>
            </form>
          </Paper>
        </div>
    )
}
