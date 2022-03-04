import './App.css';
import React, {useEffect, useState} from "react";

import AddButton from "./addButton";
import DeleteButton from "./deleteButton";
import TaskList from './taskList';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import Alert from "./Alert";

function App(props) {

    const [todo, setTodo] = useState(props.initialData);

    const [completedList, setCompletedList] = useState(todo.filter(item => item.isChecked));
    const [unCompletedList, setUnCompletedList] = useState(todo.filter(item => !item.isChecked));

    const [showAlert, setShowAlert] = useState(false);

    function handleItemChanged(itemId, field, newValue) {
        const newData1 = completedList.map(
            p => p.id === itemId ? {...p, [field]: newValue} : p)
        setCompletedList(newData1)
        // console.log(newData1)
        const newData2 = unCompletedList.map(
            p => p.id === itemId ? {...p, [field]: newValue} : p)
        setUnCompletedList(newData2)
    }

    function moveTasks(checked, item) {
        if (completedList.includes(item)) {
            setUnCompletedList([...unCompletedList,
                    {
                        id: item.id,
                        isChecked: false,
                        textInput: item.textInput,
                        isBlur:false
                    }]);
            setCompletedList(completedList.filter(element => element.id !== item.id))

        } else {
            setCompletedList([...completedList,
                {
                    id: item.id,
                    isChecked: true,
                    textInput: item.textInput,
                    isBlur: true
                }]);
            setUnCompletedList(unCompletedList.filter(element => element.id !== item.id));
        }
    }

    function handleCompletedDeleted() {
        setCompletedList([]);
    }

    function handleItemAdded() {
        setUnCompletedList([...unCompletedList,
            {
                id: generateUniqueID(),
                isChecked: false,
                textInput: "",
                isBlur: false
            }])
    }

    function alertDelete() {
        console.log("pressed delete")
        handleCompletedDeleted()
    }

    function toggleModal() {
        setShowAlert(!showAlert);
    }

    // console.log(todo)

    return <>
        <h1>To Do List</h1>
        <TaskList
            todo={todo}
            completedList={completedList}
            unCompletedList={unCompletedList}
            setCompletedList={setCompletedList}
            setUncompletedList={setUnCompletedList}
            onItemChanged={handleItemChanged}
            isCompletedList={false}
            moveTasks={moveTasks}
        />
        <h4>Completed</h4>
        <TaskList
            todo={todo}
            isCompletedList={true}
            completedList={completedList}
            unCompletedList={unCompletedList}
            setCompletedList={setCompletedList}
            setUncompletedList={setUnCompletedList}
            onItemChanged={handleItemChanged}
            moveTasks={moveTasks}
        />
        <div className="editTasks">
            <AddButton
                onItemAdded={handleItemAdded}
            />
            {completedList.length > 0 && <DeleteButton
                onItemDeleted={toggleModal}
            />}
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