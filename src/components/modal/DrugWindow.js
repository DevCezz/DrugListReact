import React from 'react';

import { DrugWindowHeader } from './DrugWindowHeader';
import { DrugWindowBody } from './DrugWindowBody';

export function DrugWindow(props) {
    return (
        <div>
            <DrugWindowHeader />
            <DrugWindowBody />
        </div>
    );
}