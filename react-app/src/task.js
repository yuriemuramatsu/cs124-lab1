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
        console.log(checked)
        setChecked(!checked);
        console.log(checked)

        props.setData(
            props.data.map(d => {
                return {...d, isChecked: true};
            })
        )

        console.log(props.data)
        console.log(props.completedData)

        let thisList = [...props.completedData,
            {
                id: props.id,
                isChecked: true,
                textInput: props.textInput,
                isDone: true
            }];

        if (checked) {
            thisId = "task2"
            props.setCompletedData([...props.completedData,
                {
                    id: props.id,
                    isChecked: true,
                    textInput: props.textInput,
                    isDone: true
                }]);

            console.log(props.data)
            console.log(props.completedData)

        } else {
            thisId = "task1"
            props.setCompletedData(props.data.filter((item => !props.completedData.includes(item.id))))
            props.setData(props.data.filter((item => !props.completedData.includes(item.id))))

            console.log(props.data)
            console.log(props.completedData)
        }
    }

    return <table>
        <tbody>
        {
            props.data.map(data => {
                return <>
                    <Checkbox
                        colorChanger={changeColor}
                    />
                    <TextInput
                        isChecked={data.isChecked}
                        // onItemChanged={props.onItemChanged}
                        textData={data.textInput}
                    />
                    <br/>
                </>
            })
        }
        </tbody>
    </table>
}

export default Task;
