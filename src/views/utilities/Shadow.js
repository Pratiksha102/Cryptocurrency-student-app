import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Shadow() {
  return (
    <div><h2><CardMembershipIcon sx={{color:'purple'}}/> &nbsp;Generate Certificate</h2>
     <Box
      component="form"
      sx={{
        display:'flex',
        flexDirection:"column",
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="USN"
        />
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Sem"
        />

        
       <Button sx={{
  marginTop:"20px"
}}variant="contained">Submit</Button>
      </div>
    </Box>
    </div>
  )
}

export default Shadow