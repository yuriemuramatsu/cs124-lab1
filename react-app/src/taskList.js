import React, {useState} from "react";
import Task from './task'

function TaskList(props) {

    return <>
        {props.data.length > 0 && (
            props.data.map(singleTask => {
                return <>
                    <Task
                        onItemChanged={props.onItemChanged}
                        item={singleTask}
                        completedData={props.completedData}
                        setCompletedData={props.setCompletedData}
                    />
                </>
            })
        )
        }
    </>
}

export default TaskList;

// <TaskList
//     data = {data}
//     setData = {setData}
//     completedData = {completedTaskList}
//     setCompletedData = {setCompletedTaskList}
//     onItemChanged = {handleItemChanged}
// />
