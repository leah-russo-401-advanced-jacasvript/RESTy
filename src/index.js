import React from 'react';

import ReactDOM from 'react-dom';

import Header from './header.jsx';
import Footer from './footer.jsx';
import Form from './form.jsx'
import Results from './results.jsx';
import History from './history.jsx';
import './app.scss';



class App extends React.Component {

  constructor() {
    super();
    this.state = {
      pokemon: {},
      history: [],
    };
  }

  handleList = (payload) => {
    this.setState({ pokemon: payload });
  }

  handleHistory = (payload) => {
    let history = [...this.state.history, payload];
    localStorage.setItem('history', JSON.stringify(history));
    this.setState({ history: history })
    console.log(this.state.history);
  }



  render () {

    return(
    <div>

      <h1>hello world</h1>
      <div className="App">
        <Header />
        <section>
          <Form handleList={this.handleList} handleHistory={this.handleHistory} />
          <Results results={this.state.pokemon} />
        </section>
        <section>
          <History stored={this.state.history}/>
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
