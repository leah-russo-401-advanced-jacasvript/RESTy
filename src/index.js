import React from 'react';

import ReactDOM from 'react-dom';

import Header from './header.jsx';
import Footer from './footer.jsx';
import Form from './form.jsx'
import './app.scss';



class App extends React.Component {


  render () {

    return(
    <div>

      <h1>hello world</h1>
      <div className="App">
        <Header />
        <section>
          <Form />
        </section>
        <Footer />
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
