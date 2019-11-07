import React from 'react';

export function DrugTableHeader(props) {
    return (
        <thead className="thead-light">
            <tr>
                <th scope="col">Lp.</th>
                <th scope="col">Nazwa</th>
                <th scope="col">Cena</th>
                <th scope="col">Producent</th>
            </tr>
        </thead>
    );
}