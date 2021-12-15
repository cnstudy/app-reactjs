import React, { useState } from "react";
import Header from "./Header";
import Sidebar from './Sidebar';
import Main from './Main'

function App(props) {

    const [values, setValues] = useState({
        name: '',
        email: ''
    });
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');

  const mudaCampo = (event) => {
      setValues({...values, [event.target.name]: event.target.value});
  }

  return (
    <div className="container">
        <Header />
        <Sidebar />
        <Main>
            <h1>CONTAINER</h1>
            <p>{JSON.stringify(values)}</p>
            <form action="">
                <input type="text" name="name" onChange={mudaCampo}/>
                <input type="email" name="email" onChange={mudaCampo}/>
                <button type="submit">Submit</button>
            </form>
        </Main>
    </div>
  );
}

export default App;