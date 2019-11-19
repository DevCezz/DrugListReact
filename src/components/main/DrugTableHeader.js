import React from 'react';
import '../../css/main.css';

export function DrugTableHeader(props) {
    return (
        <thead className="thead-light">
            <tr>
                <th className="filterableColumn" onClick={ props.filterById } scope="col">ID</th>
                <th className="filterableColumn" onClick={ props.filterByName } scope="col">Nazwa</th>
                <th className="filterableColumn" onClick={ props.filterByPrice } scope="col">Cena</th>
                <th className="filterableColumn" onClick={ props.filterByProducer } scope="col">Producent</th>
                <th scope="col">Operacje</th>
            </tr>
        </thead>
    );
}