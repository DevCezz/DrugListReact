import React from 'react';

import { DrugTableHeader } from './DrugTableHeader';
import { DrugTableBody } from './DrugTableBody';

export class DrugTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <table>
                <DrugTableHeader />
                <DrugTableBody drugs={ this.props.drugs } />
            </table>
        );
    }
}