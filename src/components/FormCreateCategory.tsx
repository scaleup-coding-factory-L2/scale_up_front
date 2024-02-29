'use client'

/*import axios from 'axios';
import React, { useEffect, useState } from 'react';

/*
model Subject {
  id Int @id @default(autoincrement())
  name String
  level String
  category String
  syllabus Syllabus[]
  needs Need[]
  hourlyRates HourlyRate[]
}


export default function DeleteACategory() {

    /*
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const response = await axios.get('http://localhost:3000/cat/category/:id');
          setData(response.data);
        };
    
        fetchData();
      }, []);
      console.log('test,::: ', data)
      
      state = {
        name: ''
      }
    
      handleChange = event => {
        this.setState({ name: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          name: this.state.name
        };
    
        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    return(
        /*<div className="flex inline-block border content-center flex-col justify-center border-8 pr-0 w-full max-w-xs">
            <div className="flex mx-10 flex-col justify-center">
            <span className="font-bold text-l mb-2 flex justify-center">Formulaire de création de category</span>
            <form className=" flex items-center flex-col ">
                <div className="flex flex-col content-center">
                    <label className="flex items-center justify-center mb-2">Inscrivez ci dessous le nom de votre nouvelle categorie pour vos cours:</label>
                    <input placeholder="Write here..." className="flex content-center px-2 py-1 border rounded"/>
                </div>
                <div>
                    <button className="flex border rounded space-x-4">Add category</button>
                </div>
            </form>
            </div>
            
        </div>

        
    )
}*/

import axios from "axios";
import React, { useState } from "react";

interface Category {
    name: string;
}

function FormCreateCategory() {
    const [categoryName, setCategoryName] = useState("");
    const [categorys, setCategorys] = useState<Category[]>([]);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryName(event.target.value);
    };

    const addCategory = async () => {
        const newCategory: Category = { name: categoryName };
        await axios.post('http://localhost:3000/cat/category', newCategory);
        setCategorys([...categorys, newCategory]);
        setCategoryName("");
    };

    return (
        <form>
            <label>Name:</label>
            <input type="text" name="name" value={categoryName} onChange={handleNameChange} />
            <br />
            <button type="button" onClick={addCategory}>Submit</button>
        </form>
    );
}

export default FormCreateCategory;

