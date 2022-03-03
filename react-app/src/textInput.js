import './App.css';
import './textInput.css'
import React from "react";

function TextInput(props) {

    // read the checked status from App (parent) and if true, then call App's changeColor, which
    // will turn the color of this textInput

    // let thisId = "task1";

    console.log("isChecked: " + props.isChecked)

    // if (props.isChecked === true) {
    //     thisId = "task2"
    // }

    // console.log(props)

    return <>
        <input
            type="text" name="task2" id={props.colorId}
            value={props.textData}
            onChange={
                (e) =>
                    props.onItemChanged(props.taskId, props.textData, e.target.value)
            }
        />
    </>
}

export default TextInput;