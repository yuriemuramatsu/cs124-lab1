import App from './App';
import React from "react";
import './checkbox.css'

function Checkbox(props) {
    return <input
        className="checkbox"
        type={"checkbox"}
        onChange={props.toggleCheck}
        checked={props.checkedBox}
    />
}

export default Checkbox;