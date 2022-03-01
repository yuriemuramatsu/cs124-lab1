import React, {useState} from "react";
<<<<<<< HEAD
import Task from './task'

function TaskList(props) {

    return <>
        <Task
            onItemChanged = {props.onItemChanged}
        />
=======
import './task.css';
import Task from './task';

function TaskList(props) {
    return <>
        <Task />
>>>>>>> 102b4aa6565f7ac46d0b9eb456d4f8dcb06f86c4
    </>
}
export default TaskList;
