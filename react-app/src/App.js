import './App.css';
import React, {useState, Component}from "react";

import Header from './header';
import AddButton from "./addButton";
import DeleteButton from "./deleteButton";
import TaskList from './taskList';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function App(props) {

    const [data, setData] = useState(props.initialData);

    const [completedTaskList, setCompletedTaskList] = useState([]);

    console.log(data)

    function handleItemChanged(itemId, field, newValue) {
        setData(data.map(
            p => p.id === itemId ? {...p, [field]: newValue} : p))
    }

    function handleItemDeleted() {
        setData(data.filter((item) => !completedTaskList.includes(item.id)));
        setCompletedTaskList([]);
        console.log(data)
    }

    function handleItemAdded() {
        setData([...data,
            {
                id: generateUniqueID(),
                isChecked: false,
                textInput: "",
                isDone: false
            }])
    }

    return <>
        <Header/>
        <TaskList
            data = {data}
            onItemChanged = {handleItemChanged}
        />
        <div className="editTasks">
            <AddButton
                onItemAdded={handleItemAdded}
            />
            {completedTaskList.length > 0 &&
            <DeleteButton
                onItemDeleted={handleItemDeleted}
            />}
        </div>
    </>
}

export default App;