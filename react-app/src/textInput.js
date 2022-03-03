import './App.css';
import './textInput.css'
import React from "react";

function TextInput(props) {

    let colorID = "task1";

    if (props.isBlur) {
        colorID = "task2"
    } else {
        colorID = "task1"
    }

    return <>
        <input
            type="text" name="task2" id={colorID}
            value={props.textData}
            onChange={
                (e) =>
                    props.onItemChanged(props.taskId, "textInput", e.target.value)
            }
        />
    </>
}

export default TextInput;