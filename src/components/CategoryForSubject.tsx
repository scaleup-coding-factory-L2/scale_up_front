import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Category {
  categoryId: number;
  name?: string;
}

const ReturnCategory = ({ categoryId }: Category) => {
  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await axios.get(`http://localhost:3000/cat/category/${categoryId}`);
      setCategory(data[0]);
    };

    fetchCategory();
  }, [categoryId]);
  console.log('test',category)
  return (
    <div>
      {category ? (
        <div>
          <td>{category.name}</td>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ReturnCategory;
