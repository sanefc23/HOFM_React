import React from 'react';
import './Spinner.css';

function Spinner(props) {
    return (
        <div style={{ display: props.loading ? "none" : "block" }} className="loader"></div>
    );
}

export default Spinner;
