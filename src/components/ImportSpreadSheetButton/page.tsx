'use client';
import { useState, ChangeEvent } from 'react';
import FileReaderTool from '@/lib/FileReaderTool';
import PopUpEditionList from '@/components/PopUpEditionList/PopUpEditionList';

export default function ImportSpreadSheetButton() {
    const [data, setData] = useState<string>('');
    const [popup, setPopup] = useState(false);
    const [error, setError] = useState<string>('');

    const handleFileUpload = async (file: File | null) => {
        if (!file) return;
        if (file.type === 'text/csv') {
            const fileReaderTool = new FileReaderTool();

            const jsonData = await fileReaderTool.parseCSV(file);
            const numberOfColumns = fileReaderTool.CheckNumberOfColumns(jsonData);

            if (numberOfColumns > 3 || numberOfColumns < 2) {
                setError('Le format du fichier n\'est pas correcte. Veuillez vérifier le nombre de colonnes.');
                return;
            }

            setData(jsonData);
        } else if (file.type === 'application/vnd.ms-excel' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
            const fileReaderTool = new FileReaderTool();
            const jsonData = await fileReaderTool.parseExcel(file);
            const numberOfColumns = fileReaderTool.CheckNumberOfColumns(jsonData);

            if (numberOfColumns > 3 || numberOfColumns < 2) {
                setError('Le format du fichier n\'est pas correcte. Veuillez vérifier le nombre de colonnes.');
                return;
            }
            
            setData(jsonData);
        } else {
            setError('Le format du fichier n\'est pas correcte. Veuillez vérifier le format du fichier.');
        }

        setPopup(true);
    }

    const onSave = (data: string) => {
        setData(data);
        console.log(data);

    }

    const onClose = () => {
        setPopup(false);
        setData('');
    }


    return (
        <>
            {error && <div>{error}</div>}
            {popup && <PopUpEditionList data={data} onClose={onClose} onSave={onSave} />}
            <div>
                <input type="file" onChange={(e: ChangeEvent<HTMLInputElement>) => handleFileUpload(e.target.files && e.target.files[0])} accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
            </div>
        </>
    );
};