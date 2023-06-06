import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <>
      <h1>Hello from the app!</h1>
      <Header />
      <Main />
      <Footer />
      </>
    )
  }
}

export default App;

//referenced from in class demo from Gerald Bruno