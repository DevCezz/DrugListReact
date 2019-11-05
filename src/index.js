import React from 'react';
import ReactDOM from 'react-dom';
import exampleData from './components/drugs';

import 'bootstrap/dist/css/bootstrap.min.css';

function Drug(props) {
    return (
        <h1>ELLLLLO { exampleData.drugs[props.value].name }!</h1>
    );
}

class DrugList extends React.Component {
    renderDrug(i) {
        return (
            <Drug value={ i } />
        );
    }

    render() {
        const numbers = [0, 1, 2];

        return (
            <div>
                { numbers.map((number) => {
                    return (
                        <Drug value={ number } />
                    );
                }) }
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