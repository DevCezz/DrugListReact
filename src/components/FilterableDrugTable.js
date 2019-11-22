import React, { useState, useCallback } from 'react';

import { ControlBar } from './main/ControlBar';
import { DrugTable } from './main/DrugTable';
import { DrugWindow } from './modal/DrugWindow';

export const FilterableDrugTable = ({ drugs: initialDrugs }) => {
    const [drugs, setDrugs] = useState(initialDrugs.concat());
    const [modalWindowTitle, setModalWindowTitle] = useState('Dodaj lek');
    const [submitBtnText, setSubmitBtnText] = useState('Dodaj');
    const [editDrug, setEditDrug] = useState();

    const addDrug = useCallback((drug) => {
        const orderedDrugs = drugs.sort((a, b) => (a.id - b.id));

        setDrugs(orderedDrugs.concat({
            ...drug,
            id: Math.max(...drugs.map(d => d.id)) + 1,
        }));
    }, [ drugs ]);

    const replaceDrug = useCallback((drug) => {
        const actualDrugs = drugs.concat();
        const drugIndex = actualDrugs.findIndex(d => d.id === drug.id);
        actualDrugs[drugIndex] = drug;
        setDrugs(actualDrugs);
    }, [ drugs ]);

    const chooseEditableDrug = useCallback((drugId) => {
        const drug = drugs.find(d => d.id === drugId);
        setEditDrug(drug);
        setModalWindowTitle('Edytuj lek: ' + drug.name)
    }, [ drugs ]);

    const deleteDrug = useCallback((drugId) => {
        setDrugs(drugs.filter(drug => drug.id !== drugId));
    }, [ drugs ]);

    return (
        <div className="container my-5">
            <ControlBar setSubmitBtnText={ setSubmitBtnText } setEmptyDrug={ setEditDrug } setModalWindowTitle={ setModalWindowTitle } />     
            <DrugTable drugs={ drugs } setSubmitBtnText={ setSubmitBtnText } setDrugs={ setDrugs } onDeleteDrug={ deleteDrug } 
                chooseEditableDrug={ chooseEditableDrug } />
            <DrugWindow onSubmitDrug={ addDrug } submitBtnText={ submitBtnText } modalWindowTitle={ modalWindowTitle } editDrug={ editDrug } />
        </div>
    );
}