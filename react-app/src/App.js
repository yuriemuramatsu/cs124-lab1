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
        // console.log(todo)
        // console.log(itemId)
        // console.log(field)
        // console.log(newValue)
        // console.log(todo[0].id)
        //
        // console.log(todo[0].id === itemId)

        const newData = todo.map(
            p => p.id === itemId ? {...p, [field]: newValue} : {...p, [field]: newValue})

        // console.log(newValue)

        setTodo([...newData])

        // console.log(newValue)
        // console.log(newData)
        // console.log(todo)
    }

    function moveTasks(checked, item) {
        if (item.isChecked) {
            setCompletedList([...completedList,
                {
                    id: item.id,
                    isChecked: true,
                    textInput: item.textInput,
                    blur: true
                }]);
            setUnCompletedList(unCompletedList.filter(element => element.id != item.id))
        } else {
            setCompletedList(completedList.filter(element => element.id != item.id));
            setUnCompletedList([...unCompletedList,
                {
                    id: item.id,
                    isChecked: false,
                    textInput: item.textInput,
                    blur: false
                }]);
        }
    }

    function handleCompletedDeleted() {
        // setTodo(todo.filter((item) => item.isChecked));
        setCompletedList([]);
        // console.log(todo)
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

    return <>
        <h1>To Do List</h1>
        <TaskList
            todo={todo}
            // setTodo={setTodo}
            completedList={completedList}
            uncompletedList={unCompletedList}
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
            // completedData={completedTaskList}
            // setCompletedData={setCompletedTaskList}
            completedList={completedList}
            uncompletedList={unCompletedList}
            setCompletedList={setCompletedList}
            setUncompletedList={setUnCompletedList}
            onItemChanged={handleItemChanged}
            moveTasks={moveTasks}
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