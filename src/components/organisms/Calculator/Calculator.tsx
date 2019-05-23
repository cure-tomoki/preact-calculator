import { Component, h } from 'preact';
import CalculatorButtonGrid, { KeyItem, Keys, KeyTypes } from '../CalculatorButtonGrid';

import * as s from './Calculator.css';

interface CalculatorState {
  slotVisible: number;
  slotHidden: number;
  operator: Keys;
}

const initialState: CalculatorState = {
  slotVisible: 0,
  slotHidden: undefined,
  operator: undefined
};

/**
 * main calculator component
 */
export class Calculator extends Component<{}, CalculatorState> {
  constructor() {
    super();
    this.state = initialState;
  }

  // handles number key input
  handleNumberInput(n: number) {
    this.setState({
      slotVisible: this.state.slotVisible * 10 + n
    });
  }

  // handles clear
  handleClear() {
    this.setState(initialState);
  }

  handleOperatorInput(label: string) {
    // tslint:disable-next-line:no-console
    console.log(label);
  }

  // recieve all inputs here, then handle them
  handleInput(keyItem: KeyItem) {
    switch (keyItem.keyType) {
      case 'NUMBER':
        this.handleNumberInput(keyItem.value);
        break;
      case 'OPERATOR':
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
