'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

interface HourlyRate {
    id: string; // Assuming each hourly rate has a unique identifier
    rate: number;
    realrate: number;
}

const HourlyRatesComponent = () => {
    const [rates, setRates] = useState<HourlyRate[]>([]);

    useEffect(() => {
        getAllRates();
    }, []); 

    const getAllRates = async () => {
        try {
            const response = await axios.get<{ hourlyRates: HourlyRate[] }>('http://localhost:3000/hourlyRateRoutes/getAllHourlyRates');
            console.log(response.data);
            const ratesData = response.data.hourlyRates; 
            setRates(ratesData);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteRate = async (rateId: string) => {
        try {
            await axios.delete(`http://localhost:3000/hourlyRateRoutes/deleteHourlyRate/${rateId}`);
            getAllRates(); // Refresh the rates list after deletion
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Hourly Rates</h1>
            <ul>
                {rates.map((rate) => (
                    <li key={rate.id}>
                        Rate: {rate.rate}, Real Rate: {rate.realrate}
                        <button onClick={() => deleteRate(rate.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HourlyRatesComponent;

