import React from 'react';

export class DrugRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const drug = this.props.drug;

        return (
            <tr>
                <td>{ drug.id }</td>
                <td>{ drug.name }</td>
                <td>{ drug.price }</td>
            </tr>
        );
    }
}