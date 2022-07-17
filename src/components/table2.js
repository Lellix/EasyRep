import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './table.css'


const moradores = [
  'Joao', 'Maria', 'Zequinha', 'Josefa', 'Emerson'
];

export default function DenseTable(props) {
  var aux = 0;
  var auxDay = props.day;
  var auxMonth = props.month;

  const days = [];

  for(var i=0; i<10; i++){
    days[i] = auxDay+"\/"+auxMonth;
    auxDay += 7;
    if(auxDay > 30 && auxDay != 30 && (auxDay != 31 && (auxMonth == 1 | auxMonth == 3 | auxMonth == 5 | auxMonth == 7 | auxMonth == 8 | auxMonth == 10 | auxMonth == 12))){
      auxMonth += 1;
      if (auxDay > 31 && (auxMonth == 1 | auxMonth == 3 | auxMonth == 5 | auxMonth == 7 | auxMonth == 8 | auxMonth == 10 | auxMonth == 12) ) {
        auxDay -= 31;
      // } else if (auxDay == 31 && (auxMonth == 1 | auxMonth == 3 | auxMonth == 5 | auxMonth == 7 | auxMonth == 8 | auxMonth == 10 | auxMonth == 12) ) {
      //   auxDay = 31;
      } else {
        auxDay -= 30;
      }
    } else if (auxDay > 28 && auxMonth == 2){
      auxDay -= 28;
    }
  }

  return (
    <TableContainer component={Paper}>
      
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {props.rows.map((row, i) => {
              return (        
                <TableCell>{row.tarefa}</TableCell>
              );

            })}

            <TableCell align="right"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {days.map((row) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            <TableCell component="th" scope="row">
              {row}
            </TableCell>

            { props.rows.map((row, i)=>{
              return(
                <TableCell> {moradores[Math.floor(Math.random() * moradores.length)]}</TableCell>
              )
            })} 
              
              {/* {props.rows.map((r, i) => {
                return (        
                  <TableCell>{moradores[Math.random() * moradores.length-- | 0]}</TableCell>
                );
              })} */}

            
            <div style={{display: "none"}}>{aux = 0}</div>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}