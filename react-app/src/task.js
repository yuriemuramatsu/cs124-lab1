import React, {useState} from "react";
import './task.css';
import Checkbox from './checkbox';
import TextInput from './textInput';

function Task(props) {
    // checked holds all checkboxes that are checked
    let [checked, setChecked] = useState(false); //why

    let colorId = "task1";

    function toggleCheckbox() {
        //props.setCompletedData(!props.completedData)
        console.log(checked)
        console.log(checked)

        if (checked) {
            console.log("checked has been called")
            colorId = "task2"
            console.log(colorId)
            if (!props.completedData.includes(props.item)) {
                props.setCompletedData([...props.completedData,
                    {
                        id: props.item.id,
                        isChecked: true,
                        textInput: props.item.textInput,
                        blur: true
                    }]);
                console.log([...props.completedData,
                    {
                        id: props.item.id,
                        isChecked: true,
                        textInput: props.item.textInput,
                        blur: true
                    }])
            }

        } else {
            console.log("unchecked")
            colorId = "task1"
            console.log(colorId)
            if (props.completedData.includes(props.item)) {
                let newCompletedData = props.completedData.filter(item => item !== props.item.id)
                props.setCompletedData(newCompletedData);
                console.log(newCompletedData);
            }
        }
        setChecked(!checked);
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
            blur={props.item.blur}
        />
        <br/>
    </>
}

export default Task;
