import React, { memo } from 'react';

import { DrugRow } from './DrugRow';

export const DrugTableBody = memo(({ drugs, setSubmitBtnText, onDeleteDrug, chooseEditableDrug }) => {
    return (
        <tbody>
            { drugs.map((drug) => {
                return (<DrugRow key={ drug.id } drug={ drug } onDeleteDrug={ onDeleteDrug } setSubmitBtnText={ setSubmitBtnText } 
                            chooseEditableDrug={ chooseEditableDrug } />)
            }) }
        </tbody>
    );
});