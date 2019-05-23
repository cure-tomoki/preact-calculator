import { Component, h } from 'preact';
import Calculator from './components/organisms/Calculator';

/**
 * top level app component
 */
class App extends Component {
  render() {
    return (
      <div>
        <Calculator/>
      </div >
    );
  }
}

export default App;
