import React, { useState, useCallback } from 'react';

import { ControlBar } from './main/ControlBar';
import { DrugTable } from './main/DrugTable';
import { DrugWindow } from './modal/DrugWindow';

import { useForm } from '../hooks/useForm';

export const FilterableDrugTable = ({ drugs: initialDrugs }) => {
    const [drugs, setDrugs] = useState(initialDrugs.concat());
    const [modalWindowTitle, setModalWindowTitle] = useState('Dodaj lek');
    const [submitBtnText, setSubmitBtnText] = useState('Dodaj');

    const [drugForm, change, setDrugForm, resetDrugForm] = useForm({
        name: '',
        price: 0,
        description: '',
        imageUrl: '',
        producer: '',
        sub1name: '',
        sub1amount: 0,
        sub2name: '',
        sub2amount: 0,
        sub3name: '',
        sub3amount: 0,
        formulation: '',
        drugEffect: ''
    });

    const addDrug = useCallback((drug) => {
        const orderedDrugs = drugs.sort((a, b) => (a.id - b.id));

        setDrugs(orderedDrugs.concat({
            ...drug,
            id: Math.max(...drugs.map(d => d.id)) + 1,
        }));
    }, [ drugs ]);

    const showFormEditDrug = useCallback((drugId) => {
        const drug = drugs.find(d => d.id === drugId);
        setDrugForm(drug);
        setModalWindowTitle('Edytuj lek: ' + drug.name);
        setSubmitBtnText('Zatwierdź');
    }, [ drugs ]);

    const showFormAddDrug = useCallback(() => {
        resetDrugForm();
        setModalWindowTitle('Dodaj nowy lek');
        setSubmitBtnText('Dodaj');
    });

    const replaceDrug = useCallback((drug) => {
        const actualDrugs = drugs.concat();
        const drugIndex = actualDrugs.findIndex(d => d.id === drug.id);
        actualDrugs[drugIndex] = drug;
        setDrugs(actualDrugs);
    }, [ drugs ]);

    const deleteDrug = useCallback((drugId) => {
        setDrugs(drugs.filter(drug => drug.id !== drugId));
    }, [ drugs ]);

    return (
        <div className="container my-5">
            <ControlBar showFormAddDrug={ showFormAddDrug } />
            <DrugTable drugs={ drugs } setDrugs={ setDrugs } onDeleteDrug={ deleteDrug } showFormEditDrug={ showFormEditDrug } />
            <DrugWindow onSubmitDrug={ addDrug } submitBtnText={ submitBtnText } modalWindowTitle={ modalWindowTitle }
                drugForm={ drugForm } change={ change } />
        </div>
    );
}