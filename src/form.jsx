import React from 'react';

class Form extends React.Component{

  constructor(props) {
    super()
    this.props = props;
    this.state = {
      url: '',
    }
  }



  handleClick = (event)=> {
    // need to get specific value from the buttons
    const method = event.target.value;
    this.setState({ method: method,  }, ()=> {
      console.log(this.state)
    } )
  }

  handleSubmit = async (event)=> {
    event.preventDefault();
    const url = event.target.url.value;
    this.setState({ url })
    
    const response = await fetch(url);
    const data = await response.json();

    this.props.handleList(data);  
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} data-testid="form">
        <p>{this.state.method}: {this.state.url} {}</p>
        <input type="text" name="url" data-testid="input"/>
        <button onClick={this.handleClick}value="GET">GET</button>
        <button onClick={this.handleClick} value="POST">POST</button>
        <button onClick={this.handleClick} value="PUT">PUT</button>
        <button onClick={this.handleClick} value="DELETE">DELETE</button>
      </form>
    );
  }
  
}

export default Form;