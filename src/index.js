import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function Drug(props) {
    return (
        <h1>ELLLLLO { props.value }!</h1>
    );
}

class DrugList extends React.Component {
    renderDrug(i) {
        return (
            <Drug value={ i } />
        );
    }

    render() {
        return (
            <div>
                { this.renderDrug(1) }
                { this.renderDrug(2) }
                { this.renderDrug(3) }
            </div>
        );
        
    }
}

function App(props) {
    return (
        <DrugList />
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);