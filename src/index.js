import React from 'react';

import ReactDOM from 'react-dom';

import Header from './header.jsx';
import Footer from './footer.jsx';
import Form from './form.jsx'
import Results from './results.jsx';
import './app.scss';



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      pokemon: {},

    };
  }

  handleList = (payload) => {
    this.setState({ pokemon: payload });
  }

  render () {

    return(
    <div>

      <h1>hello world</h1>
      <div className="App">
        <Header />
        <section>
          <Form handleList={this.handleList}/>
          <Results results={this.state.pokemon} />
        </section>
        <Footer  />
      </div>
    </div>
      
      );

  }

};

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
, rootElement)
