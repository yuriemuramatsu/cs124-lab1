import './App.css';
import React, {useState, Component}from "react";

import Header from './header';
import AddButton from "./addButton";
import DeleteButton from "./deleteButton";
import TaskList from './taskList';

<<<<<<< HEAD
function App(props) {

    const [data, setData] = useState(props.initialData);

    console.log(data)

    function handleItemChanged(itemId, field, newValue){
        setData(data.map(
            p => p.id === itemId ? {...p, [field]: newValue} : p))
    }

    function handleItemDeleted(itemID){
        setData(data.filter((item) => item.id !== itemID));
        console.log(data)
    }

    function handleItemAdded(){

    }

    return <>
        <Header/>
        <TaskList
            onItemChanged = {handleItemChanged}
        />
=======
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
        <TaskList/>
>>>>>>> 102b4aa6565f7ac46d0b9eb456d4f8dcb06f86c4
        <div className="editTasks">
            <AddButton
                onItemAdded = {handleItemAdded}
            />
            <DeleteButton
                onItemDeleted = {handleItemDeleted}
                // thisID = {thisID}
            />
        </div>
    </>
}

export default App;