'use client'
import axios from "axios";
import React, { useState,useEffect } from "react";
/*model Subject {
  id Int @id @default(autoincrement())
  name String
  level String
  categoryId Int
  syllabus Syllabus[]
  needs Need[]
  hourlyRates HourlyRate[]
  category Category @relation(fields: [categoryId], references: [id])
} */
interface Subject {
    name: string;
    level: string;
    categoryId: number|undefined;
}

function FormCreateSubject() {
    const [subjectName, setSubjectName] = useState("");
    const [subjectLevel, setSubjectLevel] = useState("");
    const [subjectCategoryId, setsubjectCategoryId] = useState<number|undefined>(undefined);

    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [CategoryTable, setCategoryTable] = useState<{ id: number, name: string }[]>([]);
    useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get('http://localhost:3000/cat/category');
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
        setsubjectCategoryId(parseInt(event.target.value, 10));
    };

    const addSubject = async () => {
        if(subjectName!==""){
            if(subjectLevel!==""){
                if(subjectCategoryId!==undefined){
                    const newSubject: Subject = { name: subjectName, level: subjectLevel, categoryId:subjectCategoryId};
                    await axios.post('http://localhost:3000/sub/subject', newSubject);
                    setSubjects([...subjects, newSubject]);
                    setSubjectName("");
                    setSubjectLevel("");
                    setsubjectCategoryId(undefined);
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

    return (

        <form>
            <label>Name:</label>
            <input type="text" name="name" value={subjectName} onChange={handleNameChange} placeholder="write name of category here..." required/>
            <br />
            <label>Level:</label>
            <input type="text" name="level" value={subjectLevel} onChange={handleLevelChange} placeholder="write name of category here..." required/>
            <br />
            <label>Category:</label>
            <select name="category" value={subjectCategoryId} onChange={handleCategoryIdChange} required>
                {CategoryTable.map((categoryElement) => (
                    <option key={categoryElement.id} value={categoryElement.id}>{categoryElement.name}</option>
                ))}
            </select>
            <br />
            <button type="button" onClick={addSubject}>Submit</button>
        </form>
    );
}

export default FormCreateSubject;

