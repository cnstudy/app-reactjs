import React, { useState } from "react";
// import Main from './Main';
// import Header from './Header';

function App(props) {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    const increment = () => {
        // if (counter === 0){
        //     return setCounter(1)
        // }
        setCounter(counter + 1);
        console.log(name)
    }

    const decrement = () => {
        if (counter === 0){
            return setCounter(0)
        }
        setCounter(counter - 1);
    }

    return (
        <div className="App">
            <button type={"button"} onClick={increment}>+</button>
            <h1>{counter}</h1>
            <button type={"button"} onClick={decrement}>-</button>
            <input type="text" onChange={(event) => setName(event.target.value)} placeholder={"Enter your name"}/>
        </div>
    );
}

export default App;