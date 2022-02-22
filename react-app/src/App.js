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

    // const [tasks, setTasks] = useState([]);
    //
    // function handleTaskSelected(task) {
    //     setTasks(task);
    //     task.parentNode.style.color = (task.checked) ? 'black' : 'red';
    // }

    function isChecked(x, y) {
        (y.checked) ? console.log("working") : console.log("also working");
        x.style.backgroundColor =  (y.checked) ? 'black' : 'red';
        // elem.color = (elem.checked) ? 'black' : 'red';
    }

    return <>
        <Header/>

        <Checkbox
            // onTaskSelected={isChecked}
            parentMethod = {isChecked}
        />

        <TextInput/>
        <DoneButton/>
        <AddButton/>
        <DeleteButton/>
    </>
}

export default App;