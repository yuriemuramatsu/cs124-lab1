import React, {useState} from "react";
import './task.css';
import Checkbox from './checkbox';
import TextInput from './textInput';

function Task(props) {
    // checked holds all checkboxes that are checked
    let [checked, setChecked] = useState(false);
<<<<<<< HEAD
=======
    let thisId = "task1";
>>>>>>> 102b4aa6565f7ac46d0b9eb456d4f8dcb06f86c4

    function changeColor() {
        setChecked(!checked);
        console.log("changeColor is called")
        //if (props.isChecked === true) {
        if (checked) {
            thisId = "task2"
        } else {
            thisId = "task1"
        }
    }

    return <>
        <Checkbox colorChanger={changeColor}/>
<<<<<<< HEAD
        <TextInput
            isChecked = {checked}
            onItemChanged = {props.onItemChanged}
        />

        {/*<input*/}
        {/*    className="checkbox"*/}
        {/*    type={"checkbox"}*/}
        {/*    onClick= {e => changeColor()}*/}
        {/*/>*/}
        {/*<input*/}
        {/*    type="text"*/}
        {/*    id = {thisId}*/}
        {/*    isChecked = {checked}*/}
        {/*/>*/}
        {/*}*/}

=======
        <TextInput isChecked = {checked}/>
>>>>>>> 102b4aa6565f7ac46d0b9eb456d4f8dcb06f86c4
    </>
}
export default Task;
