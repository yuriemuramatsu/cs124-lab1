import React, {useEffect, useState} from "react";
import Task from './task'

// todo={todo}
// // setTodo={setTodo}
// completedList={completedList}
// uncompletedList={unCompletedList}
// onItemChanged={handleItemChanged}
// isCompletedList={false}

function TaskList(props) {
    console.log("hi")
    // const subList = props.todo.filter(item => props.isCompletedList && item.isChecked);

    useEffect(() => {
        console.log(props.completedList, "cl")
        console.log(props.uncompletedList, "un")
    }, [props.completedList, props.uncompletedList])

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
                    return <>
                        <Task
                            onItemChanged={props.onItemChanged}
                            item={singleTask}
                            todo={props.todo}
                            completedList={props.completedList}
                            uncompletedList={props.uncompletedList}
                            setCompletedList={props.setCompletedList}
                            setUncompletedList={props.setUncompletedList}
                        />
                    </>
                }) :
                props.uncompletedList.map(singleTask => {
                    return <>
                        <Task
                            onItemChanged={props.onItemChanged}
                            item={singleTask}
                            todo={props.todo}
                            completedList={props.completedList}
                            uncompletedList={props.uncompletedList}
                            setCompletedList={props.setCompletedList}
                            setUncompletedList={props.setUncompletedList}

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
