import App from './App';
import React from "react";

function Checkbox(props) {

    // change the state of checkbox at App (parent) to true
    return <input
        className="checkbox"
        type={"checkbox"}
        onChange={props.toggleCheck}
        checked={props.checkedBox}
    />
}

export default Checkbox;