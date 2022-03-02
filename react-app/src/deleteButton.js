import './deleteButton.css'
import React from 'react';

function DeleteButton(props) {
    return <body>
        <input type="submit"
               id="delete"
               value="Delete Completed"
               onClick={props.onItemDeleted}
        />
    </body>
}

export default DeleteButton;