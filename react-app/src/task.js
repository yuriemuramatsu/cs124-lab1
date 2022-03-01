import React, {useState} from "react";
import './task.css';
import Checkbox from './checkbox';
import TextInput from './textInput';

function Task(props) {
    // checked holds all checkboxes that are checked
    let [checked, setChecked] = useState(false);

    function changeColor() {
        setChecked(true);
        console.log("changeColor is called")
    }

    return <>
        {/*<body className="task">*/}

        <Checkbox colorChanger={changeColor}/>
        <TextInput
            isChecked = {checked}
            onItemChanged = {props.onItemChanged}
        />

        {/*<input*/}
        {/*    className="checkbox"*/}
        {/*    type={"checkbox"}*/}
        {/*    onClick= {e => changeColor()}*/}
        {/*/>*/}
        {/*<input*/}
        {/*    type="text"*/}
        {/*    id = {thisId}*/}
        {/*    isChecked = {checked}*/}
        {/*/>*/}
        {/*}*/}

    </>
}
export default Task;
