import './App.css';
import './textInput.css'
import React from "react";

function TextInput(props) {

    // read the checked status from App (parent) and if true, then call App's changeColor, which
    // will turn the color of this textInput

    let thisId = "task1";

    console.log("isChecked: " + props.isChecked)

    if (props.isChecked === true) {
        thisId = "task2"
    }

    return <>
        <input
            type="text" name="task2" id={props.thisId}
            value={props.textData}
            onChange = {
                (e) => props.onItemChanged
            }
            // value={props.item[props.item.textInput]}

            // onChange={
            //     (e) => props.onItemChanged(props.item.id, props.item.textInput, e.target.value)
            // }
        />
    </>
}

export default TextInput;