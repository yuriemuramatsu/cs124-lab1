import React, {useEffect, useState} from "react";
import './task.css';
import Checkbox from './checkbox';
import TextInput from './textInput';

function Task(props) {

    function toggleCheckbox() {
        console.log(props.item.isChecked)
        props.onItemChanged(props.item.id, "isChecked", !props.item.isChecked)
        props.onItemChanged(props.item.id, "blur", !props.item.isBlur)
        props.moveTasks(props.item.isChecked, props.item)
    }

    return <>
        <Checkbox
            toggleCheck={toggleCheckbox}
            checkedBox={props.item.isChecked}
        />
        <TextInput
            onItemChanged={props.onItemChanged}
            textData={props.item.textInput}
            taskId={props.item.id}
            isBlur={props.item.isBlur}
        />
        <br/>
    </>
}

export default Task;
