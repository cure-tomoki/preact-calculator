import { Component, h } from 'preact';
import Button from './components/atoms/Button';

/**
 * top level app component
 */
class App extends Component {

  // dummy
  handleClick = (val: any) => {
    // tslint:disable-next-line:no-console
    console.log(val);
  }

  render() {
    return (
      <div>
        <h1>hello from preact</h1>
        <Button
          value='foo'
          onClick={ this.handleClick }
        >
          click me
        </Button>
      </div >
    );
  }
}

export default App;
