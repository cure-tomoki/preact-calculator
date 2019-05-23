import { Component, h } from 'preact';
import { CalculatorButtonGrid } from './CalculatorButtonGrid';
import { KeyItem, KeyType } from './KeyLayout';

interface CalculatorState {
  slotVisible: number;
  slotHidden: number;
}

/**
 * main calculator component
 */
export class Calculator extends Component<{}, CalculatorState> {
  constructor() {
    super();
    this.state = {
      slotVisible: 0,
      slotHidden: undefined
    };
  }

  // handles number key input
  handleNumberInput(n: number) {
    // tslint:disable-next-line:no-console
    console.log(n);
  }

  handleOperatorInput(label: string) {
    // tslint:disable-next-line:no-console
    console.log(label);
  }

  handleInput(keyItem: KeyItem) {
    switch (keyItem.keyType) {
      case KeyType.NUMBER:
        this.handleNumberInput(keyItem.value);
        break;
      case KeyType.OPERATOR:
        this.handleOperatorInput(keyItem.label);
        break;
      default:
        // tslint:disable-next-line:no-console
        console.log('invalid button');
    }
  }

  render() {
    return(
      <div>
        <span>{this.state.slotVisible}</span>
        <CalculatorButtonGrid
          onButtonPress={this.handleInput.bind(this)}
        />
      </div>
    );
  }
}
