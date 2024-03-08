'use client'

import axios from 'axios';
import React,{useState} from 'react';

interface Category {
    categoryId?:number;
    name: string;
}

export default function FormUpdateCategory(props:Category) {
    const [categoryName, setCategoryName] = useState("");
    const [categorys, setCategorys] = useState<Category[]>([]);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryName(event.target.value);
    };

    const addCategory = async () => {
        if(categoryName!=null||categoryName!=""||categoryName!=undefined){
            const updateCategory: Category = { name: categoryName };
            await axios.put('http://localhost:3000/api/category'+'/'+props.categoryId, updateCategory);
            setCategorys([...categorys, updateCategory]);
            setCategoryName("");
        }else{
            
        }
       
    };
  return(
    <>
      <form>
            <label>Name:</label>
            <input type="text" name="name" value={categoryName} onChange={handleNameChange} placeholder="write name of category here..."/>
            <br />
            <button type="button" onClick={addCategory}>Submit</button>
        </form>
    </>
    )
}