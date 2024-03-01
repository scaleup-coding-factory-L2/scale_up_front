'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

interface HourlyRate {
    id: string;
    level: string;
    rate: number;
    realrate: number;
    subjectId?: string;
}

interface SubjectName {
    id: string;
    name: string;
}

const HourlyRatesComponent = () => {
    const [rates, setRates] = useState<HourlyRate[]>([]);
    const [subjects, setSubjects] = useState<SubjectName[]>([]);

    useEffect(() => {
        getAllRates();
        getSubjectNames();
    }, []);

    const getAllRates = async () => {
        try {
            const response = await axios.get<{ hourlyRates: HourlyRate[] }>('http://localhost:3000/hourlyRateRoutes/getAllHourlyRates');
            setRates(response.data.hourlyRates);
        } catch (error) {
            console.error(error);
        }
    };

    const getSubjectNames = async () => {
        try {
            const response = await axios.get<{ message: string; subjects: SubjectName[] }>('http://localhost:3000/hourlyRateRoutes/getAllSubjectsNames');
            setSubjects(response.data.subjects); 
        } catch (error) {
            console.error(error);
        }
    };
    

    const deleteRate = async (rateId: string) => {
        try {
            await axios.delete(`http://localhost:3000/hourlyRateRoutes/deleteHourlyRate/${rateId}`);
            getAllRates();
        } catch (error) {
            console.error(error);
        }
    };

    const getSubjectNameById = (subjectId: string) => {
        const subject = subjects.find(subject => subject.id === subjectId);
        return subject ? subject.name : 'Unknown Subject';
    };

    return (
        <div>
            <h1>Hourly Rates</h1>
            <ul>
                {rates.map((rate) => (
                    <li key={rate.id}>
                        Level: {rate.level}, Subject: {rate.subjectId ? getSubjectNameById(rate.subjectId) : 'N/A' }, Rate: {rate.rate}, Real Rate: {rate.realrate}
                        <button onClick={() => deleteRate(rate.id)}> Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HourlyRatesComponent;
