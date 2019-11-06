import React from 'react';
import data from '../db/drugs.json';

import { ControlBar } from './main/ControlBar';
import { DrugTable } from './main/DrugTable';
import { DrugWindow } from './modal/DrugWindow';

export class FilterableDrugTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drugs: data.drugs,
        };
    }

    render() {
        return (
            <div>
                <ControlBar />     
                <DrugTable drugs={ this.state.drugs }/>
                <DrugWindow />
            </div>
        );
    }
}