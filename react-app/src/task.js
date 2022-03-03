import React, {useState} from "react";
import './task.css';
import Checkbox from './checkbox';
import TextInput from './textInput';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function Task(props) {
    // checked holds all checkboxes that are checked
    let [checked, setChecked] = useState(false);

    let colorId = "task1";

    function changeColor(inputId) {
        setChecked(!checked);
        console.log(checked);

        if (checked) {
            console.log("checked has been called")
            colorId = "task2"
            props.setCompletedData([...props.completedData,
                {
                    id: inputId,
                    isChecked: true,
                    textInput: props.textInput,
                    isDone: true
                }]);

        } else {
            colorId = "task1"
            // props.setCompletedData(props.data.filter((item => !props.completedData.includes(item.id))))
            // props.setData(props.data.filter((item => !props.completedData.includes(item.id))))
            props.setCompletedData(props.completedData.filter((item => item != inputId)))
        }
    }

    return <>
        <Checkbox
            colorChanger={changeColor}
        />
        <TextInput
            isChecked={props.data.isChecked}
            // onItemChanged={props.onItemChanged}
            textData={props.data.textInput}
            colorId = {colorId}
            taskId = {props.data.id}
            onItemChanged={props.onItemChanged}

        />
        <br/>
    </>
}

export default Task;
