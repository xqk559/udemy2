import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

state = {
  StateText: 'New State'
}
textHandler = (event) => {
this.setState( {
  StateText: event.target.value,
  length: null
})
}




  render() {

    let Text = 'Hello' ;

    return (

      <div className="App">

          <input type="text" onChange={this.textHandler}/>
          <br></br>
          <np>{Text}</np>
          <br></br>
          <Text
            change = {this.textHandler}
            length = {this.state.StateText.length}
            />
          <br></br>
          <np>{this.state.StateText}</np>
          <br></br>
          <np>{this.state.StateText.length}</np>
          <br></br>
        
      </div>
    );
  }
}

export default App;
