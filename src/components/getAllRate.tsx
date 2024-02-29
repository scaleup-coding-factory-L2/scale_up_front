'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

interface HourlyRate {
    rate: number;
    realrate: number;
}

const HourlyRatesComponent = () => {
    const [rates, setRates] = useState<HourlyRate[]>([]);

    useEffect(() => {
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
        </div>
    );
};

export default HourlyRatesComponent;
