import React, {useState} from "react";
import './task.css';
import Checkbox from './checkbox';
import TextInput from './textInput';

function Task(props) {
    // checked holds all checkboxes that are checked
    let [checked, setChecked] = useState(true); //why

    let colorId = "task1";

    function toggleCheckbox() {
        props.setCompletedData(!props.completedData)
        console.log(checked)
        setChecked(!checked);
        console.log(checked)

        if (checked) {
            console.log("checked has been called")
            colorId = "task2"
            if (!props.completedData.includes(props.item)) {
                props.setCompletedData([...props.completedData,
                    {
                        id: props.item.id,
                        isChecked: true,
                        textInput: props.item.textInput,
                        isDone: true
                    }]);
                console.log([...props.completedData,
                    {
                        id: props.item.id,
                        isChecked: true,
                        textInput: props.item.textInput,
                        isDone: true
                    }])
            }

        } else {
            console.log("unchecked")
            colorId = "task1"
            if (props.completedData.includes(props.item)) {
                let newCompletedData = props.completedData.filter(item => item !== props.item.id)
                props.setCompletedData(newCompletedData);
                console.log(newCompletedData);
            }
        }
    }

    return <>
        <Checkbox
            toggleCheck={toggleCheckbox}
            checkedBox={checked}
        />
        <TextInput
            // onItemChanged={props.onItemChanged}
            textData={props.item.textInput}
            colorId = {colorId}
            taskId = {props.item.id}
            onItemChanged={props.onItemChanged}
        />
        <br/>
    </>
}

export default Task;
