import { Component, h } from 'preact';
import CalculatorButtonGrid, { KeyItem, KeyType } from '../CalculatorButtonGrid';

import * as s from './Calculator.css';

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
      <div className={s.calculator}>
        <p className={s.resultText}>{this.state.slotVisible}</p>
        <CalculatorButtonGrid
          onButtonPress={this.handleInput.bind(this)}
        />
      </div>
    );
  }
}
