import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

state = {
  StateText: '',
  Outs: 'Outs',
  showCharComponent: false
}
textHandler = (event) => {
this.setState( {
  StateText: event.target.value,
  length: null
})
}

clickHandler = (event) => {
  this.setState({showCharComponent: true})
}

clickHandler2 = () => {
  this.setState({showCharComponent: false})
}



deleteInstance = () => {

}

  render() {

const style = {
  display: 'inline-block',
  padding: '16px',
  textalign: 'center',
  margin: '16 px',
  border: '1px solid black'
};
let Text = 'Hello' ;


let CharComponent = 'first character';

let Outs = '';

if (this.state.showCharComponent) {
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
          <button >Button</button>
          <br></br>
          <np>{CharComponent}</np>

      </div>
    );
  }
}

export default App;
