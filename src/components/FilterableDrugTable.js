import React, { useState, useCallback } from 'react';

import { ControlBar } from './main/ControlBar';
import { DrugTable } from './main/DrugTable';
import { DrugWindow } from './modal/DrugWindow';

export const FilterableDrugTable = ({ drugs: initialDrugs }) => {
    const [drugs, setDrugs] = useState(initialDrugs.concat());
    const [modalWindowTitle, setModalWindowTitle] = useState('Dodaj lek');
    const [submitBtnText, setSubmitBtnText] = useState('Dodaj');

    const addDrug = useCallback((drug) => {
        const orderedDrugs = drugs.sort((a, b) => (a.id - b.id));

        setDrugs(orderedDrugs.concat({
            ...drug,
            id: Math.max(...drugs.map(d => d.id)) + 1,
        }));
    }, [ drugs ]);

    return (
        <div className="container my-5">
            <ControlBar setSubmitBtnText={ setSubmitBtnText } />     
            <DrugTable drugs={ drugs } setSubmitBtnText={ setSubmitBtnText } setDrugs={ setDrugs } />
            <DrugWindow onSubmitDrug={ addDrug } submitBtnText={ submitBtnText } modalWindowTitle={ modalWindowTitle } />
        </div>
    );
}