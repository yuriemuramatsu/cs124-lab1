import React, {useEffect, useState} from "react";
import Task from './task'

function TaskList(props) {
    const [completedList, setCompletedList] = useState(props.todo.filter(item => item.isChecked));
    const [unCompletedList, setUnCompletedList] = useState(props.todo.filter(item => !item.isChecked));

    console.log("hi")
    // const subList = props.todo.filter(item => props.isCompletedList && item.isChecked);

    useEffect(() => {
        console.log(completedList, "cl")
        console.log(unCompletedList, "un")
    }, [completedList, unCompletedList])

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
                completedList.map(singleTask => {
                    return <>
                        <Task
                            onItemChanged={props.onItemChanged}
                            item={singleTask}
                            todo={props.todo}
                            setCompleted={setCompletedList}
                            setUncompleted={setUnCompletedList}
                            isCompletedList={props.isCompletedList}
                        />
                    </>
                }) :
                unCompletedList.map(singleTask => {
                    return <>
                        <Task
                            onItemChanged={props.onItemChanged}
                            item={singleTask}
                            todo={props.todo}
                            isCompletedList={props.isCompletedList}
                            setCompleted={setCompletedList}
                            setUncompleted={setUnCompletedList}
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
