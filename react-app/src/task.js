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
        console.log("changeColor is called")
        //if (props.isChecked === true) {
        if (checked) {
            thisId = "task2"
        } else {
            thisId = "task1"
        }
    }

    return <>
        <Checkbox colorChanger={changeColor}/>
        <TextInput isChecked = {checked}/>
    </>
}
export default Task;
