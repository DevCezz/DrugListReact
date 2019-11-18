import React from 'react';

import { DrugTableHeader } from './DrugTableHeader';
import { DrugTableBody } from './DrugTableBody';

export class DrugTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            drugs: this.props.drugs,
            ascFilter: false,
        }

        this.filterById = this.filterById.bind(this);
        this.filterByName = this.filterByName.bind(this);
        this.filterByPrice = this.filterByPrice.bind(this);
        this.filterByProducer = this.filterByProducer.bind(this);
        this.changeAscFilter = this.changeAscFilter.bind(this);
    }

    changeAscFilter() {
        this.setState({
            ascFilter: !this.state.ascFilter,
        });
    }

    filterById() {
        this.changeAscFilter();

        if(this.state.ascFilter) {
            this.setState(prevState => {
                this.state.drugs.sort((a, b) => (a.id > b.id)
            )});
        } else {
            this.setState(prevState => {
                this.state.drugs.sort((a, b) => (b.id > a.id)
            )});
        }
    }

    filterByName() {
        this.changeAscFilter();

        if(this.state.ascFilter) {
            this.setState(prevState => {
                this.state.drugs.sort((a, b) => (a.name > b.name)
            )});
        } else {
            this.setState(prevState => {
                this.state.drugs.sort((a, b) => (b.name > a.name)
            )});
        }
    }

    filterByPrice() {
        this.changeAscFilter();

        if(this.state.ascFilter) {
            this.setState(prevState => {
                this.state.drugs.sort((a, b) => (a.price > b.price)
            )});
        } else {
            this.setState(prevState => {
                this.state.drugs.sort((a, b) => (b.price > a.price)
            )});
        }
    }

    filterByProducer() {
        this.changeAscFilter();

        if(this.state.ascFilter) {
            this.setState(prevState => {
                this.state.drugs.sort((a, b) => (a.producer > b.producer)
            )});
        } else {
            this.setState(prevState => {
                this.state.drugs.sort((a, b) => (b.producer > a.producer)
            )});
        }
    }

    render() {
        return (
            <table className="table table-hover mt-3">
                <DrugTableHeader filterById={ this.filterById } filterByName={ this.filterByName } filterByPrice={ this.filterByPrice } 
                    filterByProducer={ this.filterByProducer } />
                <DrugTableBody drugs={ this.state.drugs } />
            </table>
        );
    }
}