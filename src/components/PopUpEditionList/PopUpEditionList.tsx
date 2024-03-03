import React from 'react';
import Spreadsheet from 'react-spreadsheet';


interface PopUpEditionListProps {
    data: string;
    onClose: () => void;
}

const PopUpEditionList = ({ data, onClose }: PopUpEditionListProps) => {
    console.log(JSON.parse(data));

    let dataParse = JSON.parse(data);
    
    dataParse = dataParse.map((item: { [x: string]: unknown; }) => {
        return Object.keys(item).map((key) => {
            return { value: item[key] }
        });
    }
    );    
    
    return (
        <div className='absolute min-w-full min-h-full bg-black bg-opacity-70 flex justify-center items-center'>
            <div className='bg-white w-6/12'>
            <h1>PopUpEditionList</h1>
            <Spreadsheet data={dataParse} />
            <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default PopUpEditionList;