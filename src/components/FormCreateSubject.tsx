'use client'

import axios from 'axios';
import React, { useState, ChangeEvent, FormEvent } from 'react';
/*
model Subject {
  id Int @id @default(autoincrement())
  name String
  level String
  category String
  syllabus Syllabus[]
  needs Need[]
  hourlyRates HourlyRate[]
}*/ 


export default function FormCreateSubject() {
/*model Subject {
  id Int @id @default(autoincrement())
  name String
  level String
  category String
  syllabus Syllabus[]
  needs Need[]
  hourlyRates HourlyRate[]
} */
      
      const [name, setName] = useState('');
    const [level, setLevel] = useState('');
    const [category, setCategory] = useState('');
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    

        try {
            const response = await axios.post('http://localhost:3000/sub/subject', {
                name,
                level,
                category
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <div className="flex inline-block border content-center flex-col justify-center border-8 pr-0 w-full max-w-xs">
            <div className="flex mx-10 flex-col justify-center">
            <span className="font-bold text-l mb-2 flex justify-center">Formulaire de création de category</span>
            <form className=" flex items-center flex-col " onSubmit={handleSubmit}>
                <div className="flex flex-col content-center">
                    <label className="flex items-center justify-center mb-2">Inscrivez ci dessous le nom de la matiere:</label>
                    <input placeholder="Write here name..." className="flex content-center px-2 py-1 border rounded" type='text' value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
                </div>
                <div className="flex flex-col content-center">
                    <label className="flex items-center justify-center mb-2">Inscrivez ci dessous le nom de la level:</label>
                    <input placeholder="Write here level..." className="flex content-center px-2 py-1 border rounded" type='text' value={level} onChange={(e: ChangeEvent<HTMLInputElement>) => setLevel(e.target.value)} />
                </div>
                <div className="flex flex-col content-center">
                    <label className="flex items-center justify-center mb-2">Inscrivez ci dessous le nom de la category:</label>
                    <input placeholder="Write here category..." className="flex content-center px-2 py-1 border rounded" type='text' value={category} onChange={(e: ChangeEvent<HTMLInputElement>) => setCategory(e.target.value)} />
                </div>
                <div>
                    <button className="flex border rounded space-x-4" type='submit'>Add category</button>
                </div>
            </form>
            </div>
        </div>
    )
}

