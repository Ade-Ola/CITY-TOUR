import React, {Component} from 'react';
import './App.scss';
import Navbar from './component/NavBar/Navbar';
import Main from './component/mainProject/Main'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Main />
      </React.Fragment>
   );
  }
}

export default App;
