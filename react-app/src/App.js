import './App.css';
import React, {useState} from "react";

import AddButton from "./addButton";
import DeleteButton from "./deleteButton";
import TaskList from './taskList';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import Alert from "./Alert";

function App(props) {

    const [data, setData] = useState(props.initialData);

    const [completedTaskList, setCompletedTaskList] = useState([]);

    const [showAlert, setShowAlert] = useState(false);

    let newData = []

    function handleItemChanged(itemId, field, newValue) {
        console.log(data)

        newData = data.map(
            p => p.id === itemId ? {...p, [field]: newValue} : p)
        console.log(newData)
        console.log(data)
        setData([...newData])
        console.log(newData)
        console.log(data)
    }

    function handleCompletedDeleted() {
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

    function alertDelete() {
        console.log("pressed delete")
        handleCompletedDeleted()
    }

    function toggleModal() {
        setShowAlert(!showAlert);
    }

    return <>
        <h1>To Do List</h1>
        <TaskList
            data={data}
            completedData={completedTaskList}
            setCompletedData={setCompletedTaskList}
            onItemChanged={handleItemChanged}
        />
        <h4>Completed</h4>
        <TaskList
            data={completedTaskList}
            // completedData={completedTaskList}
            // setCompletedData={setCompletedTaskList}
            // onItemChanged={handleItemChanged}
        />
        <div className="editTasks">
            <AddButton
                onItemAdded={handleItemAdded}
            />
            <DeleteButton
                onItemDeleted={handleCompletedDeleted}
            />
        </div>
        <div>
            {showAlert && <Alert onClose={toggleModal} onOK={alertDelete}>
                <div>
                    Are you sure you want to delete completed tasks?
                </div>
            </Alert>}
        </div>
    </>
}

export default App;