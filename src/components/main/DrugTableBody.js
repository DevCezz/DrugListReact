import React, { memo } from 'react';

import { DrugRow } from './DrugRow';

export const DrugTableBody = memo(({ drugs, setSubmitBtnText, onDeleteDrug }) => {
    return (
        <tbody>
            { drugs.map((drug) => {
                return (<DrugRow key={ drug.id } drug={ drug } onDeleteDrug={ onDeleteDrug } />)
            }) }
        </tbody>
    );
});