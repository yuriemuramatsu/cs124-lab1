import React, {useState} from "react";
import './task.css';
import Checkbox from './checkbox';
import TextInput from './textInput';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

function Task(props) {
    // checked holds all checkboxes that are checked
    let [checked, setChecked] = useState(false);

    let thisId = "task1";

    function changeColor() {
        setChecked(!checked);

        props.setData(
            props.data.map(d => {
                return {...d, isChecked: true};
            })
        )

        if (checked) {
            thisId = "task2"
            props.setData([...props.data,
                {
                    id: props.id,
                    isChecked: true,
                    textInput: props.textInput,
                    isDone: true
                }]
            )
            props.setCompletedData([...props.completedData,
                {
                    id: props.id,
                    isChecked: true,
                    textInput: props.textInput,
                    isDone: true
                }]);
        } else {
            thisId = "task1"
            props.setCompletedData(props.data.filter((item => !props.completedData.includes(item.id))))
        }
    }

    return <table>
        <tbody>
        {
            props.data.map(data => {
                return <>
                    <Checkbox colorChanger={changeColor}/>
                    <TextInput
                        isChecked={data.isChecked}
                        // onItemChanged={props.onItemChanged}
                        textData={data.textInput}
                    />
                </>
            })
        }
        </tbody>
    </table>
}

export default Task;
