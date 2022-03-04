import React, {useEffect, useState} from "react";
import Task from './task'

// todo={todo}
// // setTodo={setTodo}
// completedList={completedList}
// uncompletedList={unCompletedList}
// onItemChanged={handleItemChanged}
// isCompletedList={false}

function TaskList(props) {
    // console.log("hi")
    // const subList = props.todo.filter(item => props.isCompletedList && item.isChecked);

    useEffect(() => {
        // console.log(props.completedList, "cl")
        // console.log(props.uncompletedList, "un")
    }, [props.completedList, props.unCompletedList])

    // console.log(props.todo)

    return <>
        {/*{*/}
        {/*// props.subList !== undefined &&*/}
        {/*// props.subList.map(singleTask => {*/}
        {/*//     return <>*/}
        {/*//         <Task*/}
        {/*//             onItemChanged={props.onItemChanged}*/}
        {/*//             item={singleTask}*/}
        {/*//             todo={props.todo}*/}
        {/*//             // setCompleted={setCompletedList}*/}
        {/*//             // setUncompleted={setUnCompletedList}*/}
        {/*//             // isCompletedList={props.isCompletedList}*/}
        {/*//         />*/}
        {/*//     </>*/}
        {/*// })}*/}


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

// <TaskList
//     data = {data}
//     setData = {setData}
//     completedData = {completedTaskList}
//     setCompletedData = {setCompletedTaskList}
//     onItemChanged = {handleItemChanged}
// />
