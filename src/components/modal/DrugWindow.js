import React from 'react';

import { DrugWindowHeader } from './DrugWindowHeader';
import { DrugWindowBody } from './DrugWindowBody';

export class DrugWindow extends React.Component {
    render() {
        return (
            // <div style={{ display: this.props.show ? 'block' : 'none' }}>
            <div>
                <DrugWindowHeader />
                <DrugWindowBody />
            </div>
        );
    }   
}