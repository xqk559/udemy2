import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Radium, { StyleRoot } from 'radium';

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
  backgroundColor: 'green',
  display: 'inline-block',
  color: 'white',
  padding: '16px',
  textAlign: 'center',
  margin: '16 px',
  border: '1px solid black',
  ':hover':{
    backgroundColor: 'lightgreen',
    color: 'black'
  }
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
    const style = {
      '@media (min-width 500px)': {
        width: '450px'
      }
    }

  return (<div style ={style } onClick={props.click} key="key5">
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
    )
style.backgroundColor = 'red';
style.hover = {
  backgroundColor: 'salmon',
  color: 'black'
}

  }
    else {
    Outs = (
      <div>
       The text is not long enough, motherfucker.
      </div>
  )}
}

let classes = [];
if (this.state.StateText.length <=2){
  classes.push('red');
}
if(this.state.StateText.length<=1){
  classes.push('bold');
}



let Cha = '';

let shower = () => {
  if (this.state.showChar === true) {
    Cha = (<div   key="key1">{CharList}</div>)
  }
  else {
    Cha = (<div>nothing</div>);
  }
}


    return (
<StyleRoot>


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
          <np style = {style}  key="key2">{this.state.StateText}</np>
          <br></br>
          <div style = {style} key="key6">Hardstyles!</div>
          <br></br>
          <np className={classes.join(' ')}>Christmas Text!</np>
          <br></br>
          <br></br>
          <np >{this.state.StateText.length}</np>
          <br></br>
          <mp style = {style}  key="key3">{Outs}</mp>
          <br></br>
          <np>{this.state.StateText[0]}</np>
          <br></br>
          <button onClick={this.ClickHandler}>This Motherfucker Right Here</button>
          <br></br>
          <np style = {style} key="key4">{CharList}</np>
          <br></br>
          <br></br>
          <p onClick={this.ClickHandler}>{Cha}
          </p>
          <np>{Char}</np>

      </div>


</StyleRoot>
    );
  }
}

export default Radium(App);
