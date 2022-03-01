import './App.css';
import './textInput.css'
import React from "react";

function TextInput(props) {

    // read the checked status from App (parent) and if true, then call App's changeColor, which
    // will turn the color of this textInput

    let thisId = "task1";

    console.log(props.isChecked)

    if (props.isChecked === true){
        console.log("task2 is called")
        thisId = "task2"
    }

    return <input type="text" name="task1" id = {thisId}/>
}
export default TextInput;