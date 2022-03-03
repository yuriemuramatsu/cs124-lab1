import React, {useState} from "react";
import './task.css';
import Checkbox from './checkbox';
import TextInput from './textInput';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function Task(props) {
    // checked holds all checkboxes that are checked
    let [checked, setChecked] = useState(false);

    let thisId = "task1";

    function changeColor(inputId) {
        setChecked(!checked);
        console.log(checked);

        if (checked) {
            console.log("checked has been called")
            thisId = "task2"
            props.setCompletedData([...props.completedData,
                {
                    id: inputId,
                    isChecked: true,
                    textInput: props.textInput,
                    isDone: true
                }]);

        } else {
            thisId = "task1";
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
            thisId = {thisId}

        />
        <br/>
    </>
}

export default Task;
