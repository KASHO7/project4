import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.css";
import { HashRouter, Route, Link } from "react-router-dom";
import Header from "./components/header/Header";
import Example from "./components/example/Example";
import States from "./components/states/States";

ReactDOM.render(<Header />, document.getElementById("reactappHeader"));
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

ReactDOM.render(<App />, document.getElementById("reactapp"));