import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';

function TablerIcons() {
  const baseURL = "http://127.0.0.1:5003/";
  const [certificate,setCertificate]=useState(null);
  useEffect(() => {
      let branch = ""
      axios.get(baseURL + "student/get/cert", {
            params : {
              usn: "USN001"
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
            setCertificate(response.data.cert_url)
          }
          else {
            // throw error
          }
        });
  }, [])
  return (
    <div>
        <h2><AssignmentIcon sx={{color:'purple'}}/> &nbsp;View Certificate</h2>
    </div>
  )
}

export default TablerIcons