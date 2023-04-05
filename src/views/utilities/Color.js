import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import "./common.scss"
import AssignmentIcon from '@mui/icons-material/Assignment';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Color() {

 const Marks= {
    status: true,
    student_marks: [
      {subjectName:"Data Structure and Algorithm",marks:"76"},
      {subjectName:"OOPS",marks:"86"},
      {subjectName:"Design Anlaysis",marks:"46"},
      {subjectName:"Computer Networks",marks:"76"},
    ]
  }
  const baseURL = "http://127.0.0.1:5003/";
  const [marks,setMarks]=useState(null);
useEffect(() => {
    let usn = "USN001"
    let sem = 3
    axios.get(baseURL + "student/get/marks/sem", {
      params: {
        usn: usn,
        sem: sem
      }
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).
     then((response) => {
        console.log(response,"Details");
        if(response.data.status == true) {
          setMarks(response.data.student_marks)
        }
        else {
          // throw error
        }
      });
}, [])

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#EDE7F6",
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


  return (
    <div>
        <h2><AssignmentIcon sx={{color:'purple'}}/> &nbsp;View Marks</h2>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Subjects</StyledTableCell>
            <StyledTableCell align="right">Marks</StyledTableCell>
            <StyledTableCell align="right">Grade</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {Marks?.student_marks?.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row?.subjectName}
              </StyledTableCell>
              <StyledTableCell align="right">{row?.marks}</StyledTableCell>
              <StyledTableCell align="right">{row?.marks}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    </div>
  )
}

export default Color