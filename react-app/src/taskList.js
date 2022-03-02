import React, {useState} from "react";
import Task from './task'
import Checkbox from "./checkbox";
import TextInput from "./textInput";

function TaskList(props) {

    return <>
        {
            props.data.map(data => {
                return <>
                    <Task
                        onItemChanged={data.onItemChanged}
                        data = {data}
                        setData = {props.setData}
                        completedData = {props.completedData}
                        setCompletedData = {props.setCompletedData}

                    />
                    <br/>
                </>
            })
        }
    </>
}

export default TaskList;
