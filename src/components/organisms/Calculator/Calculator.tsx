import { Component, h } from 'preact';
import CalculatorButtonGrid, { createKeyLayout, keyDefs, KeyItem } from '../CalculatorButtonGrid';

import * as s from './Calculator.css';

interface CalculatorState {
  slotVisible: number;
  slotHidden: number;
  operator: KeyItem;
  switchSlot: boolean;
}

const initialState: CalculatorState = {
  slotVisible: 0,
  slotHidden: undefined,
  operator: undefined,
  switchSlot: false
};

/**
 * main calculator component
 */
export class Calculator extends Component<{}, CalculatorState> {
  keyLayout: KeyItem[][];

  constructor() {
    super();
    this.keyLayout = createKeyLayout(
      {
        ...keyDefs,
        EQUAL: { ...keyDefs.EQUAL, action: this.handleEqual },
        CLEAR: { ...keyDefs.CLEAR, action: this.handleClear }
      }
    );
    this.state = initialState;
  }

  // handles number key input
  handleNumberInput(n: number) {
    this.setState({
      slotVisible: this.state.switchSlot ? n : this.state.slotVisible * 10 + n,
      switchSlot: initialState.switchSlot // false
    });
  }

  // handles single-arg-action (operator) key input: sets operator state
  handleSingleArgActionInput(key: KeyItem) {
    this.setState({
      slotVisible: key.action(this.state.slotVisible)
    });
  }

  // handles double-arg-action (operator) key input: sets operator state
  handleDoubleArgActionInput(key: KeyItem) {
    this.setState({
      slotHidden: this.state.slotVisible,
      operator: key,
      switchSlot: true
    });
  }

  // handles clear: resets calculator
  handleClear() {
    this.setState(initialState);
  }

  // handles equal: does actial calculation
  handleEqual() {
    const {slotVisible, slotHidden, operator} = this.state;
    if (!slotHidden || !operator) { return; }
    this.setState({
      slotVisible: operator.action(slotVisible, slotHidden),
      slotHidden: initialState.slotHidden, // undefined
      operator: initialState.operator, // undefined,
      switchSlot: true
    });
  }

  // recieve all inputs here, then handle them
  handleInput(keyItem: KeyItem) {
    switch (keyItem.keyType) {
      case 'NUMBER':
        this.handleNumberInput(keyItem.value);
        break;
      case 'GLOBAL_ACTION':
        keyItem.action.bind(this)();
        break;
      case 'SINGLE_ARG_ACTION':
        this.handleSingleArgActionInput(keyItem);
        break;
      case 'DOUBLE_ARG_ACTION':
        this.handleDoubleArgActionInput(keyItem);
        break;
      default:
        // tslint:disable-next-line:no-console
        console.log(`invalid key: ${keyItem}`);
    }
  }

  render() {
    return(
      <div className={s.calculator}>
        <p className={s.resultText}>{this.state.slotVisible}</p>
        <CalculatorButtonGrid
          layout={this.keyLayout}
          onButtonPress={this.handleInput.bind(this)}
        />
      </div>
    );
  }
}
