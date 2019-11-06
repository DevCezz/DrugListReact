import React from 'react';

import { DrugTableHeader } from './DrugTableHeader';
import { DrugTableBody } from './DrugTableBody';

export class DrugTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table class="table table-hover mt-3">
                <DrugTableHeader />
                <DrugTableBody drugs={ this.props.drugs } />
            </table>
        );
    }
}