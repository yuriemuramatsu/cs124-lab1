import App from './App';
import React from "react";

// function Checkbox(props) {
//     return <input type="checkbox" id="completion" name="completion" onChange={props.handleTaskSelected}/>
// }

function Checkbox(props) {
    return <p id = "someText"> I have read
        <input type={"checkbox"}
               onChange={props.parentMethod("someText", this)}
        /> this text
    </p>

}

export default Checkbox;