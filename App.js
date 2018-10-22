import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

state = {
  StateText: '',
  Outs: 'Outs',
  showCharComponent: true,
  showChar: false
}

textHandler = (event) => {
this.setState( {
  StateText: event.target.value,
  length: null
})
}

clickHandler = () => {
  this.setState({showChar: true})
}

clickHandler2 = () => {
  this.setState({showChar: false})
}



deleteInstance = () => {

}

  render() {

const style = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16 px',
  border: '1px solid black'
};
let Text = 'Hello' ;

this.state.StateText.split('');


let CharComponent = this.state.StateText.split('');

let Outs = '';

let Array1 = Array.from(this.state.StateText);


const Char = (props) => {
  return (<div style ={style}>
    {props.character}
    </div>)
};

const CharList = Array1.map(ch => {
  return <Char
            character ={ch} />;
});





if (this.state.showCharComponent === true) {
  let CharComponent = this.state.StateText[0];
}


let validation = () => {
  if (this.state.StateText.length >= 5) {
    Outs = (
      <div>
       The text is long enough.
      </div>
    )}
    else {
    Outs = (
      <div>
       The text is not long enough, motherfucker.
      </div>
  )}
}



    return (

      <div className="App">

          <input type="text" onChange={this.textHandler}/>
          <br></br>
          <np>{validation()}</np>
          <np>{Text}</np>
          <br></br>
          <Text
            change = {this.textHandler}
            length = {this.state.StateText.length}
            click = {() => this.deleteInstance}
            />
          <br></br>
          <np style = {style}>{this.state.StateText}</np>
          <br></br>
          <np >{this.state.StateText.length}</np>
          <br></br>
          <mp style = {style}>{Outs}</mp>
          <br></br>
          <np>{this.state.StateText[0]}</np>
          <br></br>
          <button >This Motherfucker Right Here</button>
          <br></br>
          <np style = {style}>{CharList}</np>
          <br></br>
          <br></br>
          <p>
          </p>

      </div>
    );
  }
}

export default App;
