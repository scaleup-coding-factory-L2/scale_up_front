'use client'

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
        if(categoryName!=null||categoryName!=""||categoryName!=undefined){
            const newCategory: Category = { name: categoryName };
            await axios.post('http://localhost:3000/api/category/category/', newCategory);
            setCategorys([...categorys, newCategory]);
            setCategoryName("");
        }else{
            
        }
       
    };

    return (

        <form>
            <label>Name:</label>
            <input type="text" name="name" value={categoryName} onChange={handleNameChange} placeholder="write name of category here..."/>
            <br />
            <button type="button" onClick={addCategory}>Submit</button>
        </form>
    );
}

export default FormCreateCategory;

