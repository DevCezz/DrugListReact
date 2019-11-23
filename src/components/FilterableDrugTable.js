import React, { useState, useCallback, useEffect, memo } from 'react';

import { ControlBar } from './main/ControlBar';
import { DrugTable } from './main/DrugTable';
import { DrugWindow } from './modal/DrugWindow';
import { DrugInfoWindow } from './modal/DrugInfoWindow';

import { useForm } from '../hooks/useForm';

export const FilterableDrugTable = memo(({ drugs: initialDrugs }) => {
    const [drugs, setDrugs] = useState(initialDrugs.concat());
    const [filteredDrugs, setFilteredDrugs] = useState(initialDrugs.concat());
    const [modalWindowTitle, setModalWindowTitle] = useState('Dodaj lek');
    const [drugInfoWindowTitle, setDrugInfoWindowTitle] = useState('');
    const [drugInfo, setDrugInfo] = useState({});
    const [submitBtnText, setSubmitBtnText] = useState('Dodaj');
    const [exisitngId, setExisitngId] = useState(-1);
    const [limitBelow, setLimitBelow] = useState(0);
    const [limitAbove, setLimitAbove] = useState(Number.POSITIVE_INFINITY);

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

    const removeFilterSigns = () => {
        const thElems = document.getElementsByClassName('filterableColumn');
        for (let i = 0; i < thElems.length; i++) {
            let thElem = thElems[i];
            thElem.classList.remove('headerSortDown');
            thElem.classList.remove('headerSortUp');
        }
    }

    const deleteDrug = useCallback((drugId) => {
        removeFilterSigns();
        const newDrugs = drugs.filter(drug => drug.id !== drugId);
        setDrugs(newDrugs);
        setFilteredDrugs(newDrugs);
    }, [ drugs, filteredDrugs ]);

    const addDrug = useCallback((drug) => {
        removeFilterSigns();
        const orderedDrugs = drugs.sort((a, b) => (a.id - b.id));
        const newDrugs = orderedDrugs.concat({
            ...drug,
            id: Math.max(...drugs.map(d => d.id)) + 1,
        });

        setDrugs(newDrugs);
        setFilteredDrugs(newDrugs);
    }, [ drugs, filteredDrugs ]);

    const replaceDrug = useCallback((drug) => {
        removeFilterSigns();
        const actualDrugs = drugs.concat();
        const drugIndex = actualDrugs.findIndex(d => d.id === drug.id);
        actualDrugs[drugIndex] = drug;
        setDrugs(actualDrugs);
        setFilteredDrugs(actualDrugs);
    }, [ drugs, filteredDrugs ]);

    const showFormAddDrug = useCallback(() => {
        setExisitngId(-1);
        resetDrugForm();
        setModalWindowTitle('Dodaj nowy lek');
        setSubmitBtnText('Dodaj');
    });

    const showFormEditDrug = useCallback((drugId) => {
        const drug = drugs.find(d => d.id === drugId);
        setExisitngId(drugId);
        setDrugForm(drug);
        setModalWindowTitle('Edytuj lek: ' + drug.name);
        setSubmitBtnText('Zatwierdź');
    }, [ drugs ]);

    const showInfoDrugWindow = useCallback((drugId) => {
        const drug = drugs.find(d => d.id === drugId);
        setDrugInfo(drug);
        setDrugInfoWindowTitle('Karta leku: ' + drug.name);
    });

    const filterDrugsByPrice = useCallback((backLimitBelow, backLimitAbove) => {
        removeFilterSigns();

        if(backLimitAbove === '') {
            setLimitAbove(Number.POSITIVE_INFINITY);
        } else {
            setLimitAbove(backLimitAbove);
        }

        setLimitBelow(backLimitBelow);

        const limitedDrugs = drugs.filter(drug => drug.price >= limitBelow && drug.price <= limitAbove);
        setFilteredDrugs(limitedDrugs);
    }, [ filteredDrugs ]);

    return (
        <div className="container">
            <ControlBar showFormAddDrug={ showFormAddDrug } filterDrugsByPrice={ filterDrugsByPrice } limitBelow={ limitBelow } limitAbove={ limitAbove } />
            <DrugTable drugs={ filteredDrugs } setDrugs={ setFilteredDrugs } onDeleteDrug={ deleteDrug } showFormEditDrug={ showFormEditDrug }
                showInfoDrugWindow={ showInfoDrugWindow } removeFilterSigns={ removeFilterSigns } />
            <DrugWindow exisitngId={ exisitngId } onAddDrug={ addDrug } onEditDrug={ replaceDrug } submitBtnText={ submitBtnText } 
                modalWindowTitle={ modalWindowTitle } drugForm={ drugForm } change={ change } />
            <DrugInfoWindow drug={ drugInfo } modalWindowTitle={ drugInfoWindowTitle } />
        </div>
    );
});