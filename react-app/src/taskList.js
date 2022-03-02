import React, {useState} from "react";
import Task from './task'

function TaskList(props) {

    return <>
        <Task
            onItemChanged={props.onItemChanged}
            data = {props.data}
            setData = {props.setData}
            completedData = {props.completedData}
            setCompletedData = {props.setCompletedData}
        />
    </>
}

export default TaskList;
