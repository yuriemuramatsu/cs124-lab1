import React, {useState} from "react";
import './task.css';
import Checkbox from './checkbox';
import TextInput from './textInput';

function Task(props) {
    // checked holds all checkboxes that are checked
    let [checked, setChecked] = useState(false); //why

    function toggleCheckbox() {
        console.log(checked)

        console.log(props.completedData)
        if (!props.completedData.includes(props.item)) {
            console.log("checked")
            props.setCompletedData([...props.completedData,
                {
                    id: props.item.id,
                    isChecked: true,
                    textInput: props.item.textInput,
                    blur: true
                }]);
            props.setTodo(props.todo.filter(element => element.id != props.item.id))
            // props.setTodo([...props.todo].splice(props.element, 1));

        } else {
            console.log(checked)
            props.setCompletedData(props.completedData.filter(element => element.id != props.item.id));
            props.setData([...props.data,
                {
                    id: props.item.id,
                    isChecked: false,
                    textInput: props.item.textInput,
                    blur: false
                }]);
            // console.log([...props.completedData].splice(props.element, 1))
        }
        setChecked(!checked);

        // if (!checked) {
        //     console.log("checked has been called")
        //     colorId = "task2"
        //     console.log(colorId)
        //     if (!props.completedData.includes(props.item)) {
        //         props.setCompletedData([...props.completedData,
        //             {
        //                 id: props.item.id,
        //                 isChecked: true,
        //                 textInput: props.item.textInput,
        //                 blur: true
        //             }]);
        //         //props.setData(props.data.filter(element => element != props.item.id))
        //         props.setData([...props.data].splice(props.element, 1));
        //     }
        //
        // } else {
        //     console.log("unchecked")
        //     if (props.completedData.includes(props.item)) {
        //         let newCompletedData = props.completedData.filter(item => item !== props.item.id)
        //         props.setCompletedData(newCompletedData);
        //         console.log(newCompletedData);
        //     }
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
            taskId = {props.item.id}
            onItemChanged={props.onItemChanged}
            blur={props.item.blur}
        />
        <br/>
    </>
}

export default Task;
