import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import "./common.scss"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import AddHomeIcon from '@mui/icons-material/AddHome';

function Typography() {
    const baseURL = "http://127.0.0.1:5003/";


    const [usn,setUsn]=useState(null);
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
              setUsn(response.data.usn);
            }
            else {
              // throw error
            }
          });
    }, [])



    const Subjects={
      status: true,
      subject_details_array: [
        "Database Management System",
        "Data Analysis and Algorithm",
        "Data Structure and Alogrithm",
        "Electronics and Communication"
    ]
    }
    
    // 4. Get All subjects for a particular branch and sem
    const [subjects,setSubjects]=useState(null);
    useEffect(() => {
        let branch = "CSE"
        let sem = 1
        axios.get(baseURL + "student/get/subjects", {
          params: {
            branch: branch,
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
              setSubjects(response.data.subject_details_array)
            }
            else {
              // throw error
            }
          });
    }, [])

      // 2. Get Student Details From Usn
      const [details,setDetails]=useState(null);
      useEffect(() => {
          let usn = "USN001"
          axios.get(baseURL + "student/get/details", {
            params: {
              usn: usn
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
                setDetails(response.data.student_details)
              }
              else {
                // throw error
              }
            });
      }, [])
  

    // 5. Student Enrol in a subject
    const [enrolStatus,setEnrolStatus]=useState(null);
    useEffect(() => {
        let branch = ""
        let sem = ""
        let subject_codes = []
        axios.post(baseURL + "student/enroll", {
            branch: branch,
            sem: sem,
            subject_code: subject_codes
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
              setEnrolStatus(true)
            }
            else {
              setEnrolStatus(false)
            }
          });
    }, [])

  const [state,setState]=useState(null);
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  console.log(subjects,"subjec")
   
  
  return (
    <div className='common-wrapper'>
<h2><AddHomeIcon sx={{color:'purple'}}/> &nbsp;Enroll in Subject</h2>
<FormGroup>
{subjects?.map((item)=>(
  
  <FormControlLabel control={
    <Checkbox 
    onChange={handleChange}
    name={item?.subject_name}
    />} label={item?.subject_name} />

))}
  
  <FormControlLabel disabled control={<Checkbox 
  onChange={handleChange}
  name="Object Oriented Programming"
  />} label="Object Oriented Programming" />
</FormGroup>

<Button sx={{
  marginTop:"20px"
}}variant="contained">Submit</Button>
    </div>
  )
}

export default Typography