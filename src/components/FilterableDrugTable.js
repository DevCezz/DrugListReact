import React, { useState, useCallback, useEffect } from 'react';

import { DrugTable } from './main/DrugTable';
import { DrugWindow } from './modal/DrugWindow';

import { useForm } from '../hooks/useForm';

export const FilterableDrugTable = ({ drugs: initialDrugs }) => {
    const [drugs, setDrugs] = useState(initialDrugs.concat());
    const [filteredDrugs, setFilteredDrugs] = useState(initialDrugs.concat());
    const [modalWindowTitle, setModalWindowTitle] = useState('Dodaj lek');
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

    const deleteDrug = useCallback((drugId) => {
        const newDrugs = drugs.filter(drug => drug.id !== drugId);
        setDrugs(newDrugs);
        setFilteredDrugs(newDrugs);
    }, [ drugs, filteredDrugs ]);

    const addDrug = useCallback((drug) => {
        const orderedDrugs = drugs.sort((a, b) => (a.id - b.id));
        const newDrugs = orderedDrugs.concat({
            ...drug,
            id: Math.max(...drugs.map(d => d.id)) + 1,
        });

        setDrugs(newDrugs);
        setFilteredDrugs(newDrugs);
    }, [ drugs, filteredDrugs ]);

    const replaceDrug = useCallback((drug) => {
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

    const filterDrugsByPrice = (limitBelow, limitAbove) => {
        setLimitBelow(limitBelow);
        setLimitAbove(limitAbove);

        const limitedDrugs = drugs.filter(drug => drug.price >= limitBelow && drug.price <= limitAbove);
        setFilteredDrugs(limitedDrugs);
    };

    return (
        <div className="container my-5">
            <div className="d-flex justify-content-between align-items-start mb-4">
                <button type="button" id="addDrugBtn" onClick={ showFormAddDrug } className="btn btn-success" 
                    data-toggle="modal" data-target="#drugModalForm" >Dodaj</button>
                
                <div className="row m-0">
                    <label className="col-lg-3 col-form-label form-control-label text-right px-3">Cena: </label>
                    <div className="col-lg-4 px-0">
                        <input className="form-control" type="number" placeholder="Od" 
                            onChange={ event => filterDrugsByPrice(event.target.value, limitAbove) }
                            onKeyUp={ event => filterDrugsByPrice(event.target.value, limitAbove) } />
                    </div>
                    <label className="col-lg-1 col-form-label text-center px-0"> - </label>
                    <div className="col-lg-4 px-0">
                        <input className="form-control" type="number" placeholder="Do" 
                            onChange={ event => filterDrugsByPrice(limitBelow, event.target.value) }
                            onKeyUp={ event => filterDrugsByPrice(limitBelow, event.target.value) } />
                    </div>
                </div>
            </div>

            <DrugTable drugs={ filteredDrugs } setDrugs={ setFilteredDrugs } onDeleteDrug={ deleteDrug } showFormEditDrug={ showFormEditDrug } />
            <DrugWindow exisitngId={ exisitngId } onAddDrug={ addDrug } onEditDrug={ replaceDrug } submitBtnText={ submitBtnText } 
                modalWindowTitle={ modalWindowTitle } drugForm={ drugForm } change={ change } />
        </div>
    );
}