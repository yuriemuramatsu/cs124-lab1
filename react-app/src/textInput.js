import './App.css';
import './textInput.css'
import React from "react";

function TextInput(props) {

    // read the checked status from App (parent) and if true, then call App's changeColor, which
    // will turn the color of this textInput
    // let thisColor = "red";
    //
    // if (props.isChecked === true){
    //     thisColor = props.changeColor;
    // }

    let thisId = "task1";

    if (props.isChecked !== []){
        thisId = "task2"
    }

    return <input type="text" name="task1"
                  // id = "task" color={thisColor}
                    id = {thisId}

    />
}
export default TextInput;