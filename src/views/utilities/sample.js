import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';
import "./common.scss"

function Typography() {
    const baseURL = "http://127.0.0.1:5003/";

    // 1. Get Role and USN from Wallet Address
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


    // 3. Get Student Marks for a particular semester
    const [marks,setMarks]=useState(null);
    useEffect(() => {
        let usn = ""
        let sem = ""
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


    // 4. Get All subjects for a particular branch and sem
    const [subjects,setSubjects]=useState(null);
    useEffect(() => {
        let branch = "CSE"
        let sem = 3
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
              setMarks(response.data.subject_details_array)
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


    // 6. Generate Certificates
    const [certificate,setCertificate]=useState(null);
    useEffect(() => {
        let branch = ""
        let sem = ""
        axios.post(baseURL + "student/generate/certificate", {
            params: {
              branch: branch,
              sem: sem,
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
              setCertificate(response.data.url)
            }
            else {
              // throw error
            }
          });
    }, [])


    // 7. Get All Certificates
    const [allCertificates,setAllCertificates]=useState(null);
    useEffect(() => {
        let branch = ""
        axios.get(baseURL + "student/get/cert", {
              params : {
                usn: usn
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
<h1>Enrol in Subject</h1>
Call API to get list of All Subjects available
for sem and branch in which the student is ( get from the dashboard) 
Blur the subjects in which student is already enrolled in 
Display all subjects as checkbox Submit and send to API

    </div>
  )
}

export default Typography