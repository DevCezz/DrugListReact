import React from 'react';

export class DrugRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const drug = this.props.drug;

        return (
            <tr>
                <th scope="row">{ drug.id }</th>
                <td>{ drug.name }</td>
                <td>{ drug.price } zł</td>
                <td>{ drug.producer }</td>
            </tr>
        );
    }
}