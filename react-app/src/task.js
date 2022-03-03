import React, {useEffect, useState} from "react";
import './task.css';
import Checkbox from './checkbox';
import TextInput from './textInput';

function Task(props) {
    // checked holds all checkboxes that are checked

    let [checked, setChecked] = useState(props.item.isChecked); //why

    useEffect(() => {
        console.log(checked)
    }, [checked])

    function toggleCheckbox() {

        props.onItemChanged(props.item.id, "isChecked", !props.item.isChecked)



        // if (!checked) {
        //     props.setCompletedData([...props.completedData,
        //         {
        //             id: props.item.id,
        //             isChecked: true,
        //             textInput: props.item.textInput,
        //             blur: true
        //         }]);
        //     props.setTodo(props.todo.filter(element => element.id != props.item.id))
        //     console.log(props.completedData)
        //     console.log("checked")
        //
        // } else {
        //     props.setCompletedData(props.completedData.filter(element => element.id != props.item.id));
        //     props.setTodo([...props.todo,
        //         {
        //             id: props.item.id,
        //             isChecked: false,
        //             textInput: props.item.textInput,
        //             blur: false
        //         }]);
        //     console.log(props.completedData)
        //     console.log("not checked")
        // }

        setChecked(!checked);

        // console.log(props.completedData)
        // if (!(props.completedData.includes(props.item))) {
        //     console.log("checked")
        //     props.setCompletedData([...props.completedData,
        //         {
        //             id: props.item.id,
        //             isChecked: true,
        //             textInput: props.item.textInput,
        //             blur: true
        //         }]);
        //     props.setTodo(props.todo.filter(element => element.id != props.item.id))
        //     // props.setTodo([...props.todo].splice(props.element, 1));
        //
        // } else {
        //     console.log(checked)
        //     props.setCompletedData(props.completedData.filter(element => element.id != props.item.id));
        //     props.setTodo([...props.todo,
        //         {
        //             id: props.item.id,
        //             isChecked: false,
        //             textInput: props.item.textInput,
        //             blur: false
        //         }]);
        //     // console.log([...props.completedData].splice(props.element, 1))
        // }
    }

    return <>
        <Checkbox
            toggleCheck={toggleCheckbox}
            checkedBox={checked}
        />
        <TextInput
            // onItemChanged={props.onItemChanged}
            textData={props.item.textInput}
            taskId={props.item.id}
            onItemChanged={props.onItemChanged}
            blur={props.item.blur}
        />
        <br/>
    </>
}

export default Task;
