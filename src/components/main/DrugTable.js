import React, { useState, memo } from 'react';

import { DrugTableHeader } from './DrugTableHeader';
import { DrugTableBody } from './DrugTableBody';

export const DrugTable = memo(({ drugs, setSubmitBtnText, setDrugs}) => {
    const [ascFilter, setAscFilter] = useState(false);
    
    const filterById = () => {
        setAscFilter(!ascFilter);

        if(ascFilter) {
            setDrugs([].concat(drugs.sort((a, b) => (a.id - b.id))));
        } else {
            setDrugs([].concat(drugs.sort((a, b) => (b.id - a.id))));
        }
    }

    const filterByName = () => {
        setAscFilter(!ascFilter);

        if(ascFilter) {
            setDrugs([].concat(drugs.sort((a, b) => (a.name.localeCompare(b.name)))));
        } else {
            setDrugs([].concat(drugs.sort((a, b) => (b.name.localeCompare(a.name)))));
        }
    }

    const filterByPrice = () => {
        setAscFilter(!ascFilter);

        if(ascFilter) {
            setDrugs([].concat(drugs.sort((a, b) => (a.price - b.price))));
        } else {
            setDrugs([].concat(drugs.sort((a, b) => (b.price - a.price))));
        }
    }

    const filterByProducer = () => {
        setAscFilter(!ascFilter);

        if(ascFilter) {
            setDrugs([].concat(drugs.sort((a, b) => (a.producer.localeCompare(b.producer)))));
        } else {
            setDrugs([].concat(drugs.sort((a, b) => (b.producer.localeCompare(a.producer)))));
        }
    }

    return (
        <table className="table table-hover mt-3">
            <DrugTableHeader filterById={ filterById } filterByName={ filterByName } filterByPrice={ filterByPrice } 
                filterByProducer={ filterByProducer } />
            <DrugTableBody drugs={ drugs } setSubmitBtnText={ setSubmitBtnText }/>
        </table>
    );
});