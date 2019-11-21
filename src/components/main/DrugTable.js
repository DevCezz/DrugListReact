import React, { useState, memo } from 'react';

import { DrugTableHeader } from './DrugTableHeader';
import { DrugTableBody } from './DrugTableBody';

export const DrugTable = memo(({ drugs, setSubmitBtnText}) => {
    const [ascFilter, setAscFilter] = useState(false);
    
    return (
        <table className="table table-hover mt-3">
            <DrugTableHeader />
            <DrugTableBody drugs={ drugs } />
        </table>
    );
});