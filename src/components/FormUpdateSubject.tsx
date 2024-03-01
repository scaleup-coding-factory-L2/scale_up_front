'use client'

import axios from 'axios';
import React,{useState,useEffect} from 'react';

interface Subject {
    id?:number;
    name: string;
    level:string;
    categoryId?:number|undefined;
}

export default function FormUpdateSubject(props:Subject) {
    const [subjectName, setSubjectName] = useState("");
    const [subjectLevel, setSubjectLevel] = useState("");
    const [subjectCategoryId, setSubjectCategoryId] = useState<number|undefined>(undefined);
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [CategoryTable, setCategoryTable] = useState<{ id: number, name: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get('http://localhost:3000/api/category/category');
          setCategoryTable(response.data);
        };
        fetchData();
      }, []);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubjectName(event.target.value);
    };
    const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubjectLevel(event.target.value);
    };
    const handleCategoryIdChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSubjectCategoryId(parseInt(event.target.value, 10));
    };

    const addSubject = async () => {
        if(subjectName!==""){
            if(subjectLevel!==""){
                if(subjectCategoryId!==undefined){
                    const updateSubject: Subject = { name: subjectName, level: subjectLevel, categoryId:subjectCategoryId};
                    console.log('put',updateSubject)
                    await axios.put('http://localhost:3000/api/subject/subject/'+props.id, updateSubject);
                    setSubjects([...subjects, updateSubject]);
                    setSubjectName("");
                    setSubjectLevel("");
                    setSubjectCategoryId(undefined);
                }else{
                    alert(`vous semblez avoir oublié de remplir le champ d'association de category. Veuillez le séléctionner pour valider.`)
                }
            }else{
                alert(`vous semblez avoir oublié de remplir le champ level. Veuillez le remplir pour valider.`)
            }
        }else{
            alert(`vous semblez avoir oublié de remplir le champ name. Veuillez le remplir pour valider.`)
        }
    };

  return(
    <>
      <form>
            <label>Name:</label>
            <input type="text" name="name" value={subjectName} onChange={handleNameChange} placeholder="write name of category here..."/>
            <br />
            <label>Level:</label>
            <input type="text" name="level" value={subjectLevel} onChange={handleLevelChange} placeholder="write level of category here..."/>
            <br />
            <label>Category:</label>
            <select name="category" value={subjectCategoryId} onChange={handleCategoryIdChange} required>
                {CategoryTable.map((categoryElement) => (
                    <option key={categoryElement.id} value={categoryElement.id}>{categoryElement.name}</option>
                ))}
            </select>            
            <button type="button" onClick={addSubject}>Submit</button>
        </form>
    </>
    )
}