import './addButton.css'
import React from 'react';

function AddButton(props) {
    return <>
        <button type={"button"} id = "add" onClick={props.onItemAdded}>
            Add
        </button>
    </>
}

export default AddButton;
