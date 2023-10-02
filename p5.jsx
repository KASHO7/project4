import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
const App = () => {
    return (
        <HashRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/states">States</Link>
                        </li>
                        <li>
                            <Link to="/example">Example</Link>
                        </li>
                    </ul>
                </nav>
                <hr />
                <Route path="/states" component={States} />
                <Route path="/example" component={Example} />
            </div>
        </HashRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
