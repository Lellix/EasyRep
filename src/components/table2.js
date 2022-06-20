import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { lastDayOfWeek, nextSunday, getMonth, format} from 'date-fns'


const moradores = [
  'Joao', 'Maria', 'Zequinha', 'Josefa', 'Emerson'
];

const days = [
  '26/06', '03/07', '10/07', '17/07', '24/07'
];

export default function DenseTable(props) {
  var aux = 0;

  // const day = new Date();
  // const next = nextSunday(day);
  // const month = getMonth(day);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
        <TableRow>
            <TableCell></TableCell>
            {props.rows.map((row, i) => {

              return (        
                <TableCell align="right">{row.tarefa}</TableCell>
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