import React from 'react';

import ReactDOM from 'react-dom';

import Header from './header.jsx';
import Footer from './footer.jsx';
import './app.scss';



class App extends React.Component {


  render () {

    return(<h1>hello world</h1>);

  }

};

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement)
