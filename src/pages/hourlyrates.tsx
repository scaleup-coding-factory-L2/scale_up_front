import React, { useState } from 'react';

const HourlyRatesPage: React.FC = () => {
  const [hourlyRateData, setHourlyRateData] = useState({
    level_of_study: '',
    rate: '',
    costs: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHourlyRateData({ ...hourlyRateData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/addhourlyrates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...hourlyRateData,
          costs: parseFloat(hourlyRateData.costs)
        })
      });

      if (response.ok) {
        console.log('Hourly rate added successfully');
      } else {
        console.error('Failed to add hourly rate');
      }
    } catch (error) {
      console.error('Failed to send request', error);
    }
  };

  return (
    <div>
      <h1>Add Hourly Rate</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="level_of_study">Level of Study:</label>
        <input
          type="text"
          id="level_of_study"
          name="level_of_study"
          value={hourlyRateData.level_of_study}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="rate">Rate:</label>
        <input
          type="text"
          id="rate"
          name="rate"
          value={hourlyRateData.rate}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="costs">Costs:</label>
        <input
          type="number"
          id="costs"
          name="costs"
          value={hourlyRateData.costs}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HourlyRatesPage;
