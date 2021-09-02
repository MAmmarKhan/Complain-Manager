import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {complains} from './ComplainData';

const StyledTableCell = withStyles((theme) => ({
    head: {
        fontWeight:'bold',
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function UserProfile() {
    const classes = useStyles();
    const [complainList, setComplainList] = useState(complains);
    return (
        <div>
            <Paper elevation={3} className="userProfile">
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Complain ID</StyledTableCell>
                    <StyledTableCell align="right">Receive Date</StyledTableCell>
                    <StyledTableCell align="right">Category</StyledTableCell>
                    <StyledTableCell align="right">Subject</StyledTableCell>
                    <StyledTableCell align="right">Description</StyledTableCell>
                    <StyledTableCell align="right">Status</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                  {
                    complainList.map((item,index) =>{
                      return(
                        <TableRow>
                          <TableCell>{index+1}</TableCell>
                          <TableCell align="right">{item.RecieveDate}</TableCell>
                          <TableCell align="right">{item.category}</TableCell>
                          <TableCell align="right">{item.subject}</TableCell>
                          <TableCell align="right">{item.detail}</TableCell>
                          <TableCell align="right">{item.status}</TableCell>
                        </TableRow>
                      );
                    })
                  }
                </TableBody>
            </Table>
            </Paper>
        </div>
    )
}
