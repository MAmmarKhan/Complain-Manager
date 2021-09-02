import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import {complains} from './ComplainData';
import $ from "jquery";

function addComplain(){
    console.log($('#detail').val() + $('#subject').val()+ $('#category').text())
    if($('#subject').val() === '' || $('#category').text() === '' || $('#detail').val() === '' )
    {
        return;
    }
    var d = new Date();
    var date = d.getFullYear() + "-" + ("0" + d.getMonth()).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
    var complain = {
        RecieveDate: date,
        category: $('#category').text(),
        subject:$('#subject').val(),
        detail: $('#detail').val(),
        status: "pending"
    }
    complains.push(complain);
    console.log(complains);
}
export default function UserProfile() {
    return (
        <div>
            <Paper elevation={3} className="userProfile">
                <div>
                    <h3>Log New Complain</h3>
                </div>            
                <form noValidate autoComplete="off">
                    <TextField id="subject" label="Subject" required />                    
                    <Select id="category">
                        <InputLabel >Category</InputLabel>
                        <MenuItem value='1'>Internet</MenuItem>
                        <MenuItem value='2'>Hardware</MenuItem>
                        <MenuItem value='3'>Software</MenuItem>
                    </Select>
                    <textarea type="textarea" id="detail" placeholder="Detail" rows="3"></textarea>
                    <div className="pictureButtons">
                        <Button variant="contained" color="primary">
                            + Add Photos
                        </Button>
                        <Button variant="contained" color="primary">
                            x CLEAR ALL
                        </Button>
                    </div>
                    <Button className="submitButton" variant="contained" color="primary" onClick={addComplain}>
                        SUBMIT
                    </Button>
                </form>
            </Paper>
        </div>
    )
}
