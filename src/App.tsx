import { Component, h } from 'preact';
import Calculator from './components/organisms/Calculator';

import * as s from './App.css';

/**
 * top level app component
 */
class App extends Component {
  render() {
    return (
      <div className={s.appContainer}>
        <Calculator/>
      </div >
    );
  }
}

export default App;
