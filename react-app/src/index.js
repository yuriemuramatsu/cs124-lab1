import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const initialData = [
    {
        id: "1276",
        isChecked: false,
        textInput: "Buy Book",
        isDone: false
    },
    {
        id: "787",
        isChecked: true,
        textInput: "Take trash out",
        isDone: true
    }
];

<App initialData={initialData}/>

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

