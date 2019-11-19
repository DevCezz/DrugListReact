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
                <td><button className="btn btn-warning mr-2">Edytuj</button><button className="btn btn-danger">Usuń</button></td>
            </tr>
        );
    }
}