'use client'

import axios from 'axios';
import React from 'react';


interface Subject {
  subjectid:number
  
}
export default function DeleteASubject(props: Subject) {
 
  const handleDelete = async () => {
      await axios.delete(`http://localhost:3000/api/subject/subject/${props.subjectid}`);
  
  };
  return(
    <>
      <button onClick={() => handleDelete()}>Delete</button> 
    </>
    )
}
