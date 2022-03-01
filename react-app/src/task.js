import React, {useState} from "react";
import './task.css';
import Checkbox from './checkbox';
import TextInput from './textInput';

function Task(props) {
    // checked holds all checkboxes that are checked
    let [checked, setChecked] = useState(false);

    let thisId = "task1";

    function changeColor() {
        setChecked(!checked);
        if (checked) {
            thisId = "task2"
        } else {
            thisId = "task1"
        }
    }

    return <>
        <Checkbox colorChanger={changeColor}/>
        <TextInput
            isChecked={checked}
            onItemChanged={props.onItemChanged}
            textData = {props.data.textInput}
        />
    </>
}

export default Task;
