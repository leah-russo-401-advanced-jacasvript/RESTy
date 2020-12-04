import React from 'react';

class Form extends React.Component{

  constructor(props) {
    super()
    this.props = props;
    //need to store the input from the form here?
    console.log(props.method)
    console.log(props.url);
  }
  
  onChange = async (event) => {
    let url = event.target.value;
    if(event.target.name==="url"){
      await this.props.setState({ url: url })
    } else if (event.target.name === "body") {
      await this.props.setState({ body: url })
    }
    console.log(this.props.url)
    console.log(this.props.body)
  } 

  handleClick = async (event)=> {
    // need to get specific value from the buttons
    console.log(this.props.method)
    console.log(this.props.url)
    const method = event.target.value;
    await this.props.setState({ method: method,  }, ()=> {
      console.log(this.state)
    } )
  }

  handleSubmit = async (event)=> {
    event.preventDefault();
    const url = event.target.url.value;
    console.log(url);
    await this.props.setState({ url })
    let body = this.props.body
    let method = this.props.method;
    const response = await fetch(url, {
      mode: 'cors',
      method,
      body, 
    });
    const data = await response.json();

    this.props.handleList(data); 
    this.props.handleHistory({ url: this.props.url, method: this.props.method, data, body: this.props.body }) 
  }


  render() {
    
    return (
      <form onSubmit={this.handleSubmit} data-testid="form">
        <p>{this.props.method}: {this.props.url} {}</p>
        <label for="url">
          URL:
        </label>
        <input onChange={this.onChange} value={this.props.url} type="text" name="url" data-testid="input"/> <br/>
        <label for="body"> BODY: </label> 
        <textarea value={this.props.body} name="body" onChange={this.onChange}> </textarea> <br/>
        <button onClick={this.handleClick}value="GET">GET</button>
        <button onClick={this.handleClick} value="POST">POST</button>
        <button onClick={this.handleClick} value="PUT">PUT</button>
        <button onClick={this.handleClick} value="DELETE">DELETE</button>
      </form>
    );
  }
  
}

export default Form;