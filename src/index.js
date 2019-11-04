import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

class Drug extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            prize: this.props.prize,
            description: this.props.description,
            imageUrl: this.props.imageUrl,
            producer: this.props.producer,           
        }
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        }
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);