import './App.css';
import React, {useState, Component}from "react";

import Header from './header';
import DoneButton from "./doneButton";
import AddButton from "./addButton";
import DeleteButton from "./deleteButton";
import Checkbox from "./checkbox";
import TextInput from "./textInput";

// const data = [
//   {
//     id: 512,
//     name: "Neil Rhodes",
//     email: "rhodes@hmc.edu",
//     phone: "(909) 555-1212"
//   },
//   {
//     id: 787,
//     name: "Barack Obama",
//     email: "ex-prez@whitehouse.gov",
//     phone: "(312) 555-1212"
//   }
// ];

function App() {

    // checked holds all checkboxes that are checked
    let [checked, setChecked] = useState(false);

    function changeColor() {
        setChecked(true);
        console.log("changeColor is called")
    }

    return <>
        <Header/>
        <Checkbox
            colorChanger = {changeColor}
        />

        <TextInput
            isChecked = {checked}
        />
        <div className="editTasks">
            <AddButton/>
            <DeleteButton/>
        </div>
    </>
}

export default App;