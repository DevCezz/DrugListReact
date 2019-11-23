import React, { memo } from 'react';
import '../../css/main.css';

export const DrugTableHeader = memo(({ filterById, filterByName, filterByPrice, filterByProducer, ascFilter, removeFilterSigns }) => {
    const addFilterSign = (elem) => {
        let htmlElement = elem.target;

        if(ascFilter) {
            htmlElement.classList.add('headerSortDown');
        } else {
            htmlElement.classList.add('headerSortUp');
        }
    }

    const handleFilterById = (elem) => {
        removeFilterSigns();
        addFilterSign(elem);
        filterById();
    }

    const handleFilterByName = (elem) => {
        removeFilterSigns();
        addFilterSign(elem);
        filterByName();
    }

    const handleFilterByPrice = (elem) => {
        removeFilterSigns();
        addFilterSign(elem);
        filterByPrice();
    }

    const handleFilterByProducer = (elem) => {
        removeFilterSigns();
        addFilterSign(elem);
        filterByProducer();
    }

    return (
        <thead className="thead-light">
            <tr>
                <th className="filterableColumn" onClick={ handleFilterById } scope="col">ID</th>
                <th className="filterableColumn" onClick={ handleFilterByName } scope="col">Nazwa</th>
                <th className="filterableColumn" onClick={ handleFilterByPrice } scope="col">Cena</th>
                <th className="filterableColumn" onClick={ handleFilterByProducer } scope="col">Producent</th>
                <th scope="col">Operacje</th>
            </tr>
        </thead>
    );
});