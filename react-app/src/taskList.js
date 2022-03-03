import React, {useState} from "react";
import Task from './task'

function TaskList(props) {

    return <>
        {props.todo.length > 0 && (
            props.todo.map(singleTask => {
                return <>
                    <Task
                        onItemChanged={props.onItemChanged}
                        item={singleTask}
                        todo={props.todo}
                        setTodo={props.setTodo}
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
