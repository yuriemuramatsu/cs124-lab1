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

function App() {
    return (
        <App initialData={initialData}/>
    );
}

export default App;