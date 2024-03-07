import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Select from 'react-select';

interface Promotion {
    id: string;
    startSchoolYear: number;
    endSchoolYear: number;
    managerId: number;
}

interface Subject {
    id: string;
    name: string;
    level: string;
    categoryId: number;
}

const Dashboard = () => {
    const [promotions, setPromotions] = useState<Promotion[]>([]);
    const [selectedPromotions, setSelectedPromotions] = useState<any[]>([]);
    const [subjects, setSubjects] = useState<Subject[]>([]);
    const [isDragDropContextReady, setIsDragDropContextReady] = useState(false);

    useEffect(() => {
        getAllPromo();
        getSubject();
        setIsDragDropContextReady(true);
    }, []);

    const getAllPromo = async () => {
        try {
            const response = await axios.get<Promotion[]>('http://localhost:3000/api/promotion');
            setPromotions(response.data);
            setSelectedPromotions(response.data.map(promotion => ({ value: promotion.id, label: `${promotion.startSchoolYear} - ${promotion.endSchoolYear}` })));
            setIsDragDropContextReady(true); 
        } catch (error) {
            console.error(error);
        }
    };
    
    const getSubject = async () => {
        try {
            const response = await axios.get<Subject[]>('http://localhost:3000/api/subject/');
            setSubjects(response.data); 
            setIsDragDropContextReady(true);
        } catch (error) {
            console.error(error);
        }
    };

    const handlePromotionSelection = (selectedOptions: any) => {
        setSelectedPromotions(selectedOptions || []);
    };

    const handleOnDragEnd = (result: any) => {
        if (!result.destination) return;
        const newSubjects = Array.from(subjects);
        const [reorderedItem] = newSubjects.splice(result.source.index, 1);
        newSubjects.splice(result.destination.index, 0, reorderedItem);
        setSubjects(newSubjects);
    };
    

        // const deletePromotion = async (promotionId: string) => {
    //     try {
    //         await axios.delete(`http://localhost:3000/api/promotion/${promotionId}`);
    //         getAllPromo();
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };


    return (
        <div>
            <h1>Dashboard</h1>
            <div className="mb-4">
                <Select
                    isMulti
                    options={promotions.map(promotion => ({ value: promotion.id, label: `${promotion.startSchoolYear} - ${promotion.endSchoolYear}` }))}
                    value={selectedPromotions}
                    onChange={handlePromotionSelection}
                />
            </div>
            {isDragDropContextReady && subjects.length > 0 && (
                <DragDropContext onDragEnd={handleOnDragEnd} key={subjects.map(subject => subject.id).join('-')}>
                    <Droppable droppableId="subjects">
                        {(provided) => (
                            <div className="w-full p-4" {...provided.droppableProps} ref={provided.innerRef}>
                                <h2>Subjects</h2>
                                {subjects.map((subject, index) => (
                                    <Draggable key={`draggable-${subject.id}`} draggableId={`draggable-${subject.id}`} index={index}>
                                    {(provided) => (
                                        <div
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                            className="bg-white rounded shadow p-4 mb-4"
                                        >
                                            {subject.name}
                                        </div>
                                    )}
                                </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            )}
            <div className="flex flex-wrap">
                {promotions && selectedPromotions && promotions.filter(promotion => selectedPromotions.map((p: any) => p.value).includes(promotion.id)).map((promotion) => (
                    <div key={promotion.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
                        <div className="bg-white rounded shadow p-4">
                            <h2 className="text-xl font-bold mb-4">{promotion.startSchoolYear} - {promotion.endSchoolYear}</h2>
                            {/* <button className="mt-4 bg-red-500 text-white rounded px-4 py-2" onClick={() => deletePromotion(promotion.id.toString())}> Delete</button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;