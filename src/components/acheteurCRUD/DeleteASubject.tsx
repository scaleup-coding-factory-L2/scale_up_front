'use client'

import axios from 'axios';
import React from 'react';
import { Button } from '../ui/button';


interface DeleteASubjectProps {
  subjectId:number
  }
export default function DeleteASubject({subjectId}: DeleteASubjectProps) {
  const handleDelete = async () => {
      await axios.delete(`http://localhost:3000/api/subject/${subjectId}`);
  
  };
  return(
    <>
      <Button onClick={() => handleDelete()}>Delete</Button> 
    </>
    )
}
