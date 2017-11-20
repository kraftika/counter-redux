import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './js/Counter';

const App = () => (
    <div>
        <Counter />
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
