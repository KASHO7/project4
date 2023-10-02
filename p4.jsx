import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Example from './Example';
import States from './States';

function App() {
    const [view, setView] = useState('example');

    return (
        <div>
            <button onClick={() => setView(view === 'example' ? 'states' : 'example')}>
                Switch to {view === 'example' ? 'States' : 'Example'}
            </button>

            {view === 'example' ? <Example /> : <States />}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
