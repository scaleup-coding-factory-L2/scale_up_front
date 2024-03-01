'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Subject {
  id: number;
  name: string;
}

const AddHourlyRateForm = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [selectedSubjectId, setSelectedSubjectId] = useState<number | string>('');
  const [level, setLevel] = useState<string>('');
  const [rate, setRate] = useState<string>('');
  const [realrate, setRealRate] = useState<string>('');

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get<{ subjects: Subject[] }>('http://localhost:3000/hourlyRateRoutes/getAllSubjectsNames');
        setSubjects(response.data.subjects);
      } catch (error) {
        console.error('Failed to fetch subjects:', error);
      }
    };

    fetchSubjects();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const hourlyRateData = {
        level,
        subjectId: parseInt(selectedSubjectId as string),
        rate: parseFloat(rate),
        realrate: parseFloat(realrate),
      };

      await axios.post('http://localhost:3000/hourlyRateRoutes/addHourlyRate', hourlyRateData);
      alert('Hourly rate added successfully');
      setLevel('');
      setSelectedSubjectId('');
      setRate('');
      setRealRate('');
    } catch (error) {
      console.error('Failed to add hourly rate:', error);
      alert('Failed to add hourly rate');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
      <div>
        <label htmlFor="level">Level:</label>
        <input
          type="text"
          id="level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          required
          style={{ margin: '10px', padding: '10px' }}
        />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <select
          id="subject"
          value={selectedSubjectId}
          onChange={(e) => setSelectedSubjectId(e.target.value)}
          required
          style={{ margin: '10px', padding: '10px' }}
        >
          <option value="">Select a subject</option>
          {subjects.map((subject) => (
            <option key={subject.id} value={subject.id}>
              {subject.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="rate">Rate:</label>
        <input
          type="number"
          id="rate"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          required
          step="0.01"
          style={{ margin: '10px', padding: '10px' }}
        />
      </div>
      <div>
        <label htmlFor="realrate">Real Rate:</label>
        <input
          type="number"
          id="realrate"
          value={realrate}
          onChange={(e) => setRealRate(e.target.value)}
          required
          step="0.01"
          style={{ margin: '10px', padding: '10px' }}
        />
      </div>
      <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer', marginTop: '20px' }}>Add Hourly Rate</button>
    </form>
  );
};

export default AddHourlyRateForm;
