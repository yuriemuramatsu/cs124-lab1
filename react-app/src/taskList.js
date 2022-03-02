import React, {useState} from "react";
import Task from './task'

function TaskList(props) {

    return <Task
        onItemChanged={props.onItemChanged}
        data = {props.data}
    />
}

export default TaskList;
