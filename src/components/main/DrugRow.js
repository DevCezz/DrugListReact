import React, { memo } from 'react';

export const DrugRow = memo(({ drug, onDeleteDrug }) => {
    return (
        <tr>
            <th scope="row">{ drug.id }</th>
            <td>{ drug.name }</td>
            <td>{ drug.price } zł</td>
            <td>{ drug.producer }</td>
            <td><button className="btn btn-warning mr-2">Edytuj</button><button onClick={ () => onDeleteDrug(drug.id) } className="btn btn-danger">Usuń</button></td>
        </tr>
    );
});