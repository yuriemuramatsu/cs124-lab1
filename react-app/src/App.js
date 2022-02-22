import './App.css';
import React from "react";

import Header from './header';
import DoneButton from "./doneButton";
import AddButton from "./addButton";
import DeleteButton from "./deleteButton";

const data = [
  {
    id: 512,
    name: "Neil Rhodes",
    email: "rhodes@hmc.edu",
    phone: "(909) 555-1212"
  },
  {
    id: 787,
    name: "Barack Obama",
    email: "ex-prez@whitehouse.gov",
    phone: "(312) 555-1212"
  }
];


function App() {
  return <>
    <Header />
    <DoneButton />
    <br/>
    <AddButton />
    <DeleteButton />
  </>
}

export default App;