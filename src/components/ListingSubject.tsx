'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReturnCategory from './CategoryForSubject';
import DeleteASubject from './DeleteASubject';
import FormUpdateSubject from './FormUpdateSubject';
import FormCreateSubject from './FormCreateSubject';

interface Subjects {
  id: number;
  name: string;
  level: string;
  categoryId: number;
}

const ListingSubject = () => {
  const [subjects, setSubjects] = useState<Subjects[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('http://localhost:3000/api/subject/subject');
      setSubjects(data);
    };

    fetchData();
  }, []);

  if (subjects.length === 0) return <h2>Il n y a aucun sujet dans la base de données.</h2>;

  return (
    <div className="container">
      <h2>Il y a {subjects.length} sujets dans la base de données.</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>Category</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id}>
              <td>{subject.name}</td>
              <td>{subject.level}</td>
              <ReturnCategory categoryId={subject.categoryId}/>
              <td><FormUpdateSubject id={subject.id} name={subject.name} level={subject.level} /></td>

              <td><DeleteASubject subjectid={subject.id}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <FormCreateSubject/>
    </div>
  );
};

export default ListingSubject;
