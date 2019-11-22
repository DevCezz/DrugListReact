import React, { memo } from 'react';

import { DrugRow } from './DrugRow';

export const DrugTableBody = memo(({ drugs, onDeleteDrug, showFormEditDrug }) => {
    return (
        <tbody>
            { drugs.map((drug) => {
                return (<DrugRow key={ drug.id } drug={ drug } onDeleteDrug={ onDeleteDrug } showFormEditDrug={ showFormEditDrug } />)
            }) }
        </tbody>
    );
});