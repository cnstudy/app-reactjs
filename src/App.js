// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Main from './Sidebar';
import Header from './Header';
//
// function App(props) {
//
//   const [name, setName] = useState('Cicero Neto');
//   const [age, setAge] = useState(25);
//
//   return (
//     <div className="App">
//       <Header name={name}/>
//       <Main />
//       {name} - {age}
//     </div>
//   );
//
// }
//
// export default App;



export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
    this.mudaCampo = this.mudaCampo.bind(this);
  }

    mudaCampo(event) {
      this.setState({
          [event.target.name]: event.target.value
      })
    }

  render() {
    console.log(this.state)
    return (
      <div className="App">
          {/*<form action="">*/}
          {/*    <input type="text" name="name" onChange={this.mudaCampo}/>*/}
          {/*    <input type="email" name="email" onChange={this.mudaCampo}/>*/}
          {/*    <button type="submit">Submit</button>*/}
          {/*</form>*/}
        <Header />
          <Main>
              <h1>H1</h1>
              <p>P</p>
          </Main>
        <h2>Hello, {this.state.name}</h2>
      </div>
    );
  }
}