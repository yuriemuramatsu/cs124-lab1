import './addButton.css'
import React from 'react';

function AddButton(props) {
    return <body>
    <form action="process.html" method="POST">
        <input type="submit" id = "add" value = "Add a todo"
               onClick={props.colorChanger}
        />
    </form>
    </body>
}

export default AddButton;
