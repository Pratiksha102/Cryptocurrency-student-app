import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useSelector } from 'react-redux';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

function TablerIcons() {
  const customization = useSelector((state) => state.customization);
  console.log(customization,"customization");
  const baseURL = "http://127.0.0.1:5003/";


  const [studentDetails,setStudentDetails]=useState(null);
 useEffect(() => {
     let wallet_address = ""
     axios.get(baseURL + "admin/get/role", {
       params: {
         wallet_address: "0xdfDa1e966F26E93FFdEfb589fdf66A30f953a0aC"
       }
     },
     {
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
       }
     }).
      then((response) => {
         console.log(response,"Role and Code");
         if(response.data.role == "student") {
           console.log(response,"resppppp");
           setStudentDetails(response.data);
         }
         else {
           // throw error
         }
       });

       
 }, [])



  const [allcertificate,setallCertificate]=useState(null);
  useEffect(() => {
    if(studentDetails)
    {
      let branch = ""
      axios.get(baseURL + "student/get/cert/all", {
            params : {
              usn: studentDetails?.code
            }
          },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      ).
       then((response) => {
          console.log(response,"Details");
          if(response.data.status == true) {
            console.log(response?.data);
            setallCertificate(response?.data);
          }
          else {
            // throw error
          }
        });
      }
  }, [studentDetails])

  return (
    <div>
        <h2><AssignmentIcon sx={{color:'purple'}}/> &nbsp;View Certificate</h2>
        {allcertificate?.cert_url?.map((item,index)=>(  
        <Accordion sx={{backgroundColor:'#EBE8FC',marginTop:'10px'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight:'800'}}>Semester {index+1}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'white'}}>
          <Typography>
          <Button variant="contained" sx={{backgroundColor:'purple'}}>View Certificate</Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      )         
      )}
    </div>
  )
}

export default TablerIcons