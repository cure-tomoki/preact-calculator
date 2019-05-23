export type KeyTypes = 'NUMBER' | 'OPERATOR' | 'ACTION';

export type NumberKeys = 'KEY_0' | 'KEY_1' | 'KEY_2' | 'KEY_3' | 'KEY_4' | 'KEY_5' | 'KEY_6' | 'KEY_7' | 'KEY_8' | 'KEY_9';
export type OperatorKeys = 'PLUS' | 'MINUS' | 'MULTIPLY' | 'DIVIDE' | 'EQUAL';
export type ActionKeys = 'CLEAR' | 'PERCENT' | 'NEGATIVE';
export type Keys = NumberKeys | OperatorKeys | ActionKeys;

export type KeyItem = {
  name: Keys;
  keyType: KeyTypes;
  label: string;
  keyCode: number;
  value?: number;
  colSpan?: number;
};

const createNumberKeys = (): {[k in Keys]: KeyItem} => {
  // tslint:disable-next-line:no-object-literal-type-assertion
  const keys: { [k in Keys]: KeyItem } = {} as { [k in Keys]: KeyItem };
  for (let i = 0; i < 10; i++) {
    const keyName = `KEY_${i}` as Keys;
    keys[keyName] = {
      name: keyName,
      keyType: 'NUMBER',
      label: String(i),
      value: i,
      keyCode: i + 48
    };
  }
  return keys;
};

// definition of all keys
const keyList: { [k in Keys]: KeyItem } = {
  // number keys (0~9)
  ...createNumberKeys(),
  // operator keys
  PLUS:      { name: 'PLUS' , keyType: 'OPERATOR', label: '+', keyCode: 187 },
  MINUS:     { name: 'MINUS' , keyType: 'OPERATOR', label: '-', keyCode: 189 },
  MULTIPLY:  { name: 'MULTIPLY' , keyType: 'OPERATOR', label: '×', keyCode: 186 },
  DIVIDE:    { name: 'DIVIDE' , keyType: 'OPERATOR', label: '÷', keyCode: 191 },
  EQUAL:     { name: 'EQUAL' , keyType: 'OPERATOR', label: '=', keyCode: 187 },
  // action keys
  CLEAR:     { name: 'CLEAR' , keyType: 'ACTION', label: 'C', keyCode: 8 },
  PERCENT:   { name: 'PERCENT' , keyType: 'ACTION', label: '%', keyCode: 53 },
  NEGATIVE:  { name: 'NEGATIVE' , keyType: 'ACTION', label: '+/-', keyCode: 82 }
};

export const KEY_LAYOUT: KeyItem[][] = [
  [keyList.CLEAR,  keyList.NEGATIVE,  keyList.PERCENT,  keyList.DIVIDE],
  [keyList.KEY_7,  keyList.KEY_8,     keyList.KEY_9,    keyList.MULTIPLY],
  [keyList.KEY_4,  keyList.KEY_5,     keyList.KEY_6,    keyList.MINUS],
  [keyList.KEY_3,  keyList.KEY_2,     keyList.KEY_1,    keyList.PLUS],
  [{...keyList.KEY_0, colSpan: 3},                      keyList.EQUAL]
];
