import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

state = {
  StateText: '',
  Outs: 'Outs',
  showChar: true
}

textHandler = (event) => {
this.setState( {
  StateText: event.target.value,
  length: null,
})
}

ClickHandler = (event) => {
  this.setState( {
    showChar: false
  });
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

let DeleteCharHandler = (index) => {
  const Text = this.state.StateText.split('');
  Text.splice(index, 1);
  const updatedText = Text.join('');
  this.setState({StateText: updatedText});
}

const Char = (props) => {
  return (<div style ={style} onClick={props.click}>
    {props.character}

    </div>)
};

const CharList = this.state.StateText.split('').map((ch, index) => {
  return (<Char
            character ={ch}
            key = {index}
            click={() => DeleteCharHandler(index)}
            />)
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

let Cha = '';

let shower = () => {
  if (this.state.showChar === true) {
    Cha = (<div style={style}>{CharList}</div>)
  }
  else {
    Cha = (<div>nothing</div>);
  }
}


    return (

      <div className="App">

          <input type="text" onChange={this.textHandler}/>
          <br></br>
          <nf>{shower()}</nf>
          <np>{validation()}</np>
          <np></np>
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
          <button onClick={this.ClickHandler}>This Motherfucker Right Here</button>
          <br></br>
          <np style = {style}>{CharList}</np>
          <br></br>
          <br></br>
          <p onClick={this.ClickHandler}>{Cha}
          </p>
          <np>{Char}</np>

      </div>
    );
  }
}

export default App;
