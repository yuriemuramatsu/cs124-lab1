import './App.css';
import React from "react";
// import App from "./src/App";
import {useState} from "react";
import './index.js';


const element = React.createElement;
const completion = document.getElementById("completion");


// class checkbox extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { liked: false };
//     }
//
//     render() {
//         if (this.state.liked) {
//             return 'You liked this.';
//         }
//
//         return element(
//             'button',
//             { onClick: () => this.setState({ liked: true }) },
//             'Like'
//         );
//     }
// }

// function checkbox(props){
//     alert(document.querySelectorAll('input[type="checkbox"]:checked').length);
//     return <div onClick={()=>props}>
//
//     </div>
// }

const data = "initialData";

function checkbox() {

    // const data = initialData;

    function People_List(props) {
        let [selectedId, setSelectedId] = useState(null);
        let numberSelected = selectedId ? 1 : 0;

        console.log(selectedId);

        return <div>
            <h1>People {numberSelected}/ {props.people.length} selected</h1>
            <table>
                {props.people.map((e) =>
                    <Person_Item onSelectPerson={setSelectedId} id={e.id} key={e.id} name={e.name} email={e.email}
                                 phone={e.phone}/>)}
            </table>
        </div>
    }

    function Person_Item(props) {

        function handleClick(e) {
            console.log("\nhandleClick")
            let selectedId = e.target.id;
            console.log(selectedId);
            return e.target.id;
        }

        return <div onClick={() => props.onSelectPerson(props.id)}>
            <tr id={props.id}>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
            </tr>
        </div>
    }

    return (
        <div>
            <People_List people={data}/>
        </div>
    );
}


export default checkbox();