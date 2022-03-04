import React, {useEffect, useState} from "react";
import Task from './task'

function TaskList(props) {

    useEffect(() => {
        console.log(props.completedList, "cl")
        console.log(props.unCompletedList, "un")
    }, [props.completedList, props.unCompletedList])


    return <>
        {
            props.isCompletedList ?
                props.completedList.map(singleTask => {
                    // console.log(singleTask)
                    return <>
                        <Task
                            onItemChanged={props.onItemChanged}
                            item={singleTask}
                            // todo={props.todo}
                            completedList={props.completedList}
                            unCompletedList={props.unCompletedList}
                            setCompletedList={props.setCompletedList}
                            setUncompletedList={props.setUncompletedList}
                            moveTasks={props.moveTasks}
                        />
                    </>
                }) :
                props.unCompletedList.map(singleTask => {
                    // console.log(singleTask)
                    return <>
                        <Task
                            onItemChanged={props.onItemChanged}
                            item={singleTask}
                            // todo={props.todo}
                            completedList={props.completedList}
                            unCompletedList={props.unCompletedList}
                            setCompletedList={props.setCompletedList}
                            setUncompletedList={props.setUncompletedList}
                            moveTasks={props.moveTasks}
                        />
                    </>
                })
        }
    </>
}

export default TaskList;