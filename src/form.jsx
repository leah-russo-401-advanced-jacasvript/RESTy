import React from 'react';

class Form extends React.Component{

  constructor() {
    super()
    this.state = {
      url: '',
    }
  }



  handleClick = (event)=> {
    // need to get specific value from the buttons
    const method = event.target.value;
    this.setState({ method }, ()=> {
      console.log(this.state)
    } )
  }

  handleSubmit = (event)=> {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>{this.state.method}</p>
        <input type="text"/>
        <button onClick={this.handleClick}value="GET">GET</button>
        <button onClick={this.handleClick} value="POST">POST</button>
        <button onClick={this.handleClick} value="PUT">PUT</button>
        <button onClick={this.handleClick} value="DELETE">DELETE</button>
      </form>
    );
  }
  
}

export default Form;