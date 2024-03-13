'use client';
import {  useState, ChangeEvent } from 'react';
import FileReaderTool from '@/lib/FileReaderTool';
import PopUpEditionList from '@/components/PopUpEditionList/PopUpEditionList';

export default function ImportSpreadSheetButton() {
    const [data, setData] = useState<string>('');
    const [popup, setPopup] = useState(false);


    const handleFileUpload = async (file: File | null) => {
        if (!file) return;
        if (file.type === 'text/csv') {
            const fileReaderTool = new FileReaderTool();
            const jsonData = await fileReaderTool.parseCSV(file);
            setData(jsonData);
        } else if (file.type === 'application/vnd.ms-excel' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            const fileReaderTool = new FileReaderTool();
            const jsonData = await fileReaderTool.parseExcel(file);
            setData(jsonData);
        } else {
            console.log('File type not supported');

        }
        
        setPopup(true);
    }

    const onSave = (data: string) => {
        setData(data);
        console.log(data);
        
    }


    return (
        <>
        {popup && <PopUpEditionList data={data} onClose={() =>{ setPopup(false); setData('')}} onSave={() => onSave}/>}
            <div>
                <input type="file" onChange={(e: ChangeEvent<HTMLInputElement>) => handleFileUpload(e.target.files && e.target.files[0])} accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
            </div>
        </>
    );
};