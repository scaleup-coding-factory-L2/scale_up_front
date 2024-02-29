'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';

interface HourlyRate {
  rate: number;
  realrate: number;
}

const GetAllRateCalculeComponenent = () => {
  const [rates, setRates] = useState<HourlyRate[]>([]);
  const [totalRate, setTotalRate] = useState<number>(0);
  const [totalRealRate, setTotalRealRate] = useState<number>(0);
  const [difference, setDifference] = useState<number>(0);

  useEffect(() => {
    const getAllRates = async () => {
      try {
        const response = await axios.get<{ hourlyRates: HourlyRate[] }>('http://localhost:3000/hourlyRateRoutes/getAllHourlyRates');
        console.log(response.data);
        const ratesData = response.data.hourlyRates;
        setRates(ratesData);

        const totalRateCalculated = ratesData.reduce((acc, curr) => acc + curr.rate, 0);
        const totalRealRateCalculated = ratesData.reduce((acc, curr) => acc + curr.realrate, 0);
        const differenceCalculated = totalRateCalculated - totalRealRateCalculated;

        setTotalRate(totalRateCalculated);
        setTotalRealRate(totalRealRateCalculated);
        setDifference(differenceCalculated);
        console.log(totalRateCalculated, totalRealRateCalculated, differenceCalculated);

      } catch (error) {
        console.error(error);
        
      }
      
    };

    getAllRates();
  }, []);

  return (
    <div>
      <h1>Hourly Rates</h1>
      <ul>
        {rates.map((rate, index) => (
          <li key={index}>
            Rate: {rate.rate}, Real Rate: {rate.realrate}
          </li>
        ))}
      </ul>
      <div>Total Rate: {totalRate}</div>
      <div>Total Real Rate: {totalRealRate}</div>
      <div>Difference: {difference >= 0 ? difference : `(${difference})`}</div>
    </div>
  );
};

export default GetAllRateCalculeComponenent;
