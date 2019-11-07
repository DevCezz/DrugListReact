import React from 'react';
import data from '../db/drugs.json';

import { ControlBar } from './main/ControlBar';
import { DrugTable } from './main/DrugTable';
import { DrugWindow } from './modal/DrugWindow';

export class FilterableDrugTable extends React.Component {
    constructor(props) {
        super(props);

        this.onClickShowWindow = this.onClickShowWindow.bind(this);

        this.state = {
            drugs: data.drugs,
            windowDisplayed: false,
        };
    }

    onClickShowWindow() {
        this.setState((state) => {
            return {
                windowDisplayed: !state.windowDisplayed,
            };
        })
    }

    render() {
        return (
            <div className="container my-5">
                <ControlBar onClickAdd={ this.onClickShowWindow } />     
                <DrugTable drugs={ this.state.drugs } />
                <DrugWindow show={ this.state.windowDisplayed } />
            </div>
        );
    }
}