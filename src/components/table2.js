import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { formatDistance, subDays } from 'date-fns'

formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
//=> "3 days ago"

const moradores = [
  'Joao', 'Maria', 'Zequinha', 'Josefa', 'Emerson'
];
export default function DenseTable(props) {

  var aux = 0;

  var data = new Date();
  var dia = String(data.getDate()).padStart(2, '0');
  var mes = String(data.getMonth() + 1).padStart(2, '0');

  // const returnData=()=>{
  //   {props.rows.map((row, i) => {
  //     return (        
  //       <TableCell>titi</TableCell>
  //     );
  //   })}
  // }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {props.rows.map((row, i) => {

              console.log(row.tarefa)
              return (        
                <TableCell>{row.tarefa}</TableCell>
              );
              
            })}
            {/* <TableCell align="right">Aluguel</TableCell> */}
            <TableCell align="right">total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {moradores.map((row) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row}
              </TableCell>

              {props.rows.map((r, i) => {
                return (        
                  <TableCell>{}</TableCell>
                );
              })}

              {/* <TableCell align="right">ALUGUEL</TableCell> */}

              {props.rows.map((r, i) => {
                aux += parseFloat(r.valor)/moradores.length
                console.log(parseFloat(r.valor)/moradores.length )
              })}

            <TableCell align="right">{aux}</TableCell>
            
            <div style={{display: "none"}}>{aux = 0}</div>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}