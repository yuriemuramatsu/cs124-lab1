import './App.css';
import React, {useState, Component}from "react";

import Header from './header';
import AddButton from "./addButton";
import DeleteButton from "./deleteButton";
import Task from './task';

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

    return <>
        <Header/>
        <Task/>
        <div className="editTasks">
            <AddButton/>
            <DeleteButton/>
        </div>
    </>
}

export default App;