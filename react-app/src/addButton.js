import './addButton.css'
import React from 'react';

function AddButton(props) {
    return <>
        {/*<input type="submit"*/}
        {/*       id = "add"*/}
        {/*       value = "Add a todo"*/}
        {/*       onClick={props.onItemAdded}*/}
        {/*/>*/}
        <button type={"button"} id = "add" onClick={props.onItemAdded}>
            Add
        </button>
    </>
}

export default AddButton;
