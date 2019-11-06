import React from 'react';

import { DrugRow } from './DrugRow';

export class DrugTableBody extends React.Component {  
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tbody>
                { this.props.drugs.map((drug) => {
                    return (<DrugRow key={ drug.id } drug={ drug }/>)
                }) }
            </tbody>
        );
    }
}