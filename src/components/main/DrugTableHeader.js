import React from 'react';

export function DrugTableHeader(props) {
    return (
        <thead className="thead-light">
            <tr>
                <th onClick={ props.filterById } scope="col">ID</th>
                <th onClick={ props.filterByName } scope="col">Nazwa</th>
                <th onClick={ props.filterByPrice } scope="col">Cena</th>
                <th onClick={ props.filterByProducer } scope="col">Producent</th>
            </tr>
        </thead>
    );
}