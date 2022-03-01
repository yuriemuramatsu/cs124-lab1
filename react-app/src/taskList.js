import React, {useState} from "react";
import Task from './task'

function TaskList(props) {

    return <>
        <Task
            onItemChanged = {props.onItemChanged}
        />
    </>
}
export default TaskList;
