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
    const [checked, setChecked] = useState([]);

    function changeColor(y) {
        // return "blue"
        // (y.checked) ? console.log("clicked") : console.log("not clicked");
        // y.backgroundColor =  (y.checked) ? 'blue' : 'yellow';
    }

    return <>
        <Header/>
        <Checkbox
            // stateChanger changes the status of checkbox
            stateChanger = {setChecked}
        />

        <TextInput
            // colorChange changes the color of input text, depending on value of isChecked
            colorChanger = {changeColor}
            isChecked = {checked}
            thisColor = {changeColor}
        />
        <DoneButton/>
        <AddButton/>
        <DeleteButton/>
    </>
}

export default App;