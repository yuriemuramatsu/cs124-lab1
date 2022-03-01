import Checkbox from "./checkbox";
import TextInput from "./textInput";
import React, {useState} from "react";
import './task.css';

function Task(props) {
    // checked holds all checkboxes that are checked
    let [checked, setChecked] = useState(false);

    let thisId = "task1";

    console.log(props.isChecked)

    if (props.isChecked === true){
        thisId = "task2"
    }

    function changeColor() {
        setChecked(true);
        console.log("changeColor is called")
    }

    return <body className="task">
    <input
        className="checkbox"
        type={"checkbox"}
        onClick= {e => changeColor()}
    />
    <input
        type="text"
        id = {thisId}
        isChecked = {checked}
    />
    </body>
}

export default Task;
