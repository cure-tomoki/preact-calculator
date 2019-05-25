export type KeyTypes = 'NUMBER' | 'GLOBAL_ACTION' | 'SINGLE_ARG_ACTION' | 'DOUBLE_ARG_ACTION';

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
  action?(...x: any): any;
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
export const keyDefs: { [k in Keys]: KeyItem } = {
  // number keys (0~9)
  ...createNumberKeys(),
  // no arg actions
  EQUAL:     { name: 'EQUAL', keyType: 'GLOBAL_ACTION', label: '=', keyCode: 187 },
  CLEAR:     { name: 'CLEAR', keyType: 'GLOBAL_ACTION', label: 'C', keyCode: 8 },
  // single arg actions
  PERCENT:   { name: 'PERCENT',  keyType: 'SINGLE_ARG_ACTION', label: '%',   keyCode: 53, action: (x: number) => x / 100 },
  NEGATIVE:  { name: 'NEGATIVE', keyType: 'SINGLE_ARG_ACTION', label: '+/-', keyCode: 82, action: (x: number) => x * -1 },
  // double arg actions
  PLUS:      { name: 'PLUS',     keyType: 'DOUBLE_ARG_ACTION', label: '+', keyCode: 187, action: (x: number, y: number) => y + x },
  MINUS:     { name: 'MINUS',    keyType: 'DOUBLE_ARG_ACTION', label: '-', keyCode: 189, action: (x: number, y: number) => y - x },
  MULTIPLY:  { name: 'MULTIPLY', keyType: 'DOUBLE_ARG_ACTION', label: '×', keyCode: 186, action: (x: number, y: number) => y * x },
  DIVIDE:    { name: 'DIVIDE',   keyType: 'DOUBLE_ARG_ACTION', label: '÷', keyCode: 191, action: (x: number, y: number) => y / x }
};

export const createKeyLayout = (key: { [k in Keys]: KeyItem }): KeyItem[][] => [
  [key.CLEAR,  key.NEGATIVE,  key.PERCENT,  key.DIVIDE],
  [key.KEY_7,  key.KEY_8,     key.KEY_9,    key.MULTIPLY],
  [key.KEY_4,  key.KEY_5,     key.KEY_6,    key.MINUS],
  [key.KEY_3,  key.KEY_2,     key.KEY_1,    key.PLUS],
  [{...key.KEY_0, colSpan: 3},  key.EQUAL]
];
