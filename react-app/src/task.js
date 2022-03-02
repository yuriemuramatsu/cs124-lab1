import React, {useState} from "react";
import './task.css';
import Checkbox from './checkbox';
import TextInput from './textInput';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function Task(props) {
    // checked holds all checkboxes that are checked
    let [checked, setChecked] = useState(false);

    let thisId = "task1";

    function changeColor() {
        setChecked(!checked);

        // props.setData(
        //     props.data.map(d => {
        //         return {...d, isChecked: true};
        //     })
        // )

        // let thisList = [...props.completedData,
        //     {
        //         id: props.id,
        //         isChecked: true,
        //         textInput: props.textInput,
        //         isDone: true
        //     }];

        if (checked) {
            console.log("checked has been called")
            thisId = "task2"
            props.setCompletedData([...props.completedData,
                {
                    id: props.id,
                    isChecked: true,
                    textInput: props.textInput,
                    isDone: true
                }]);

        } else {
            thisId = "task1"
            // props.setCompletedData(props.data.filter((item => !props.completedData.includes(item.id))))
            // props.setData(props.data.filter((item => !props.completedData.includes(item.id))))
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
