import React, {useEffect, useState} from "react";
import './task.css';
import Checkbox from './checkbox';
import TextInput from './textInput';

function Task(props) {
    // checked holds all checkboxes that are checked

    // let [checked, setChecked] = useState(props.item.isChecked); //why
    // let [blur, setBlur] = useState(props.item.isBlur);

    function toggleCheckbox() {
        console.log(props.item.isChecked)
        props.onItemChanged(props.item.id, "isChecked", !props.item.isChecked)
        props.onItemChanged(props.item.id, "blur", !props.item.isBlur)
        // setChecked(!checked)
        // props.item.isChecked = !props.item.isChecked
        // props.item.isBlur=!props.item.isBlur
        props.moveTasks(props.item.isChecked, props.item)
    }

    return <>
        <Checkbox
            toggleCheck={toggleCheckbox}
            checkedBox={props.item.isChecked}
        />
        <TextInput
            onItemChanged={props.onItemChanged}
            // this item.textInput is not editable
            textData={props.item.textInput}
            taskId={props.item.id}
            // textData={props.todo.textInput}
            // taskId={props.todo.id}
            // isBlur={props.item.isBlur}
            isBlur={props.item.isBlur}
        />
        <br/>
    </>
}

export default Task;
