'use client'

import axios from 'axios';
import React from 'react';


interface Subject {
  subjectid:number
  
}
export default function DeleteASubject(props: Subject) {
  //const [subjectUsCategory, setSubjectUsCategory] = useState<Subject[]>([]);

  /*const apiEndPoint = `http://localhost:3000/sub/subject/${props.categoryId}`;
  useEffect(() => {
    const getCategorys = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setSubjectUsCategory(res);
    };
    getCategorys();
  }, []);
  console.log('testing:',subjectUsCategory);*/

  const handleDelete = async () => {
    //if(subjectUsCategory.length === 0){
      await axios.delete(`http://localhost:3000/sub/subject/${props.subjectid}`);
    //}else{
      //alert('vous ne pouvez pas delete une matiere utilisé dans un autre element deja existant')
    //}
  };
  return(
    <>
      <button onClick={() => handleDelete()}>Delete</button> 
    </>
    )
}
