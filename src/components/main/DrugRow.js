import React, { memo } from 'react';

export const DrugRow = memo(({ drug, onDeleteDrug, setSubmitBtnText, chooseEditableDrug }) => {
    const editDrug = (drugId) => {
        setSubmitBtnText('Zapisz');
        chooseEditableDrug(drugId);
    }

    return (
        <tr>
            <th scope="row">{ drug.id }</th>
            <td>{ drug.name }</td>
            <td>{ drug.price } zł</td>
            <td>{ drug.producer }</td>
            <td>
                <button onClick={ () => editDrug(drug.id) } className="btn btn-warning mr-2" data-toggle="modal" data-target="#drugModalForm">Edytuj</button>
                <button onClick={ () => onDeleteDrug(drug.id) } className="btn btn-danger">Usuń</button>
            </td>
        </tr>
    );
});