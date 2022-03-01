import App from './App';
import React from "react";

function Checkbox(props) {

    // change the state of checkbox at App (parent) to true
    return <input
        className="checkbox"
        type={"checkbox"}
        onClick={props.colorChanger}
    />
}

export default Checkbox;