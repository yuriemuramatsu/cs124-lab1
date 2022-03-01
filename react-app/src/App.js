import './App.css';
import React, {useState, Component}from "react";

import Header from './header';
import AddButton from "./addButton";
import DeleteButton from "./deleteButton";
import TaskList from './taskList';

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