import React, {useState} from "react";
import Task from './task'

function TaskList(props) {

    return <Task
        onItemChanged={props.onItemChanged}
        data = {props.data[0]}
    />
}

export default TaskList;
