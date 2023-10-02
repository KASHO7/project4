import React, { useState, useEffect } from 'react';
import './States.css';

function States() {
    const [states, setStates] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = () => {
            const statesData = window.models.states();
            console.log('States Data:', statesData);
            setStates(statesData);
        };

        fetchData();
    }, []); // Empty dependency array ensures the effect runs once after the initial render

    return (
        <div className="states-container">
            {/* Input field to accept substring */}
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter substring..."
            />

            {/* Display substring used for filtering */}
            <p>Substring: {searchTerm}</p>

            {/* Filtered states list */}
            <ul>
                {states
                    .filter((state) => state.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((state, index) => (
                        <li key={index}>{state}</li>
                    ))}
            </ul>
        </div>
    );
}

export default States;
