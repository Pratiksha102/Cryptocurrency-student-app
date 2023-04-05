import React from 'react'
import axios from "axios";
import { useState,useEffect } from 'react';

function Typography() {
    const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

    const [post,setPost]=useState(null);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response,"Data from API");
            setPost(response.data);
          });
    }, [])
    
  return (
    <div>Typography</div>
  )
}

export default Typography