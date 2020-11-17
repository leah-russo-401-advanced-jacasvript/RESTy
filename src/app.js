import React from 'react';

import Header from './header.jsx';
import Footer from './footer.jsx';
import Form from './form.jsx'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <section>
          <Form />
        </section>
        <Footer />
      </div>
    )

  }
}

export default App;