'use client'

import axios from 'axios';
import React,{useEffect,useState} from 'react';

interface Category {
  categoryId: number;
}
interface Subject {
  id:number
  name: string;
  level:string;
  categoryId:number;
}
export default function DeleteACategory(props: Category) {
  const [subjectUsCategory, setSubjectUsCategory] = useState<Subject[]>([]);

  const apiEndPoint = `http://localhost:3000/sub/subject/${props.categoryId}`;
  useEffect(() => {
    const getCategorys = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setSubjectUsCategory(res);
    };
    getCategorys();
  }, []);
  console.log('testing:',subjectUsCategory);
  const handleDelete = async () => {
    if(subjectUsCategory.length === 0){
      await axios.delete(`http://localhost:3000/cat/category/${props.categoryId}`);
    }else{
      alert('vous ne pouvez pas delete une categorie utilisé dans une matière existante')
    }
  };
  return(
    <>
      <button onClick={() => handleDelete()}>Delete</button> 
    </>
    )
}
