'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface HourlyRate {
  id: number;
  level: string;
  subjectId: number;
  rate: number;
  realrate: number;
}

export const HourlyRatesList = () => {
  const [hourlyRates, setHourlyRates] = useState<HourlyRate[]>([]);
  const [edits, setEdits] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const fetchHourlyRates = async () => {
      try {
        const response = await axios.get('http://localhost:3000/hourlyRateRoutes/getAllHourlyRates');
        setHourlyRates(response.data.hourlyRates);
      } catch (error) {
        console.error('Error fetching hourly rates:', error);
      }
    };

    fetchHourlyRates();
  }, []);

  const handleRealRateChange = (id: number, realrate: number) => {
    setEdits({ ...edits, [id]: realrate });
  };

  const handleSubmit = async () => {
    try {
      const updatePromises = Object.entries(edits).map(([id, realrate]) =>
        axios.put(`http://localhost:3000/hourlyRateRoutes/updateHourlyRateRealRate/${id}`, { realrate })
      );

      await Promise.all(updatePromises);

      alert('Hourly rates updated successfully!');
    } catch (error) {
      console.error('Failed to update hourly rates:', error);
    }
  };

  return (
    <div>
      <h2>Hourly Rates</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Level</th>
            <th>Subject ID</th>
            <th>Rate</th>
            <th>Real Rate</th>
          </tr>
        </thead>
        <tbody>
          {hourlyRates.map(({ id, level, subjectId, rate, realrate }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{level}</td>
              <td>{subjectId}</td>
              <td>{rate}</td>
              <td>
                <input
                  type="number"
                  value={edits[id] ?? realrate}
                  onChange={(e) => handleRealRateChange(id, parseFloat(e.target.value))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Valider</button>
    </div>
  );
};

export default HourlyRatesList;