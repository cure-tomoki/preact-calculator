export enum KeyType { NUMBER, OPERATOR, ACTION }

export type KeyItem = {
  keyType: KeyType;
  label: string;
  keyCode: number;
  value?: number;
  action?(): any;
};

export const KEYS: { [k: string]: KeyItem } = {
  // number keys
  KEY_0: { keyType: KeyType.NUMBER, label: '0', value: 0, keyCode: 48 },
  KEY_1: { keyType: KeyType.NUMBER, label: '1', value: 1, keyCode: 49 },
  KEY_2: { keyType: KeyType.NUMBER, label: '2', value: 2, keyCode: 50 },
  KEY_3: { keyType: KeyType.NUMBER, label: '3', value: 3, keyCode: 51 },
  KEY_4: { keyType: KeyType.NUMBER, label: '4', value: 4, keyCode: 52 },
  KEY_5: { keyType: KeyType.NUMBER, label: '5', value: 5, keyCode: 53 },
  KEY_6: { keyType: KeyType.NUMBER, label: '6', value: 6, keyCode: 54 },
  KEY_7: { keyType: KeyType.NUMBER, label: '7', value: 7, keyCode: 55 },
  KEY_8: { keyType: KeyType.NUMBER, label: '8', value: 8, keyCode: 56 },
  KEY_9: { keyType: KeyType.NUMBER, label: '9', value: 9, keyCode: 57 },
  // operator keys
  PLUS:      { keyType: KeyType.OPERATOR, label: '+', keyCode: 187 },
  MINUS:     { keyType: KeyType.OPERATOR, label: '-', keyCode: 189 },
  MULTIPLY:  { keyType: KeyType.OPERATOR, label: '×', keyCode: 186 },
  DIVIDE:    { keyType: KeyType.OPERATOR, label: '÷', keyCode: 191 },
  // action keys
  EQUAL:    { keyType: KeyType.ACTION, label: '=',   keyCode: 187 },
  CLEAR:    { keyType: KeyType.ACTION, label: 'C',   keyCode: 8   },
  PERCENT:  { keyType: KeyType.ACTION, label: '%',   keyCode: 53  },
  NEGATIVE: { keyType: KeyType.ACTION, label: '+/-', keyCode: 82  }
};

export const KEY_LAYOUT: KeyItem[][] = [
  [KEYS.CLEAR,  KEYS.NEGATIVE,  KEYS.PERCENT,  KEYS.DIVIDE],
  [KEYS.KEY_7,  KEYS.KEY_8,     KEYS.KEY_9,    KEYS.MULTIPLY],
  [KEYS.KEY_4,  KEYS.KEY_5,     KEYS.KEY_6,    KEYS.MINUS],
  [KEYS.KEY_3,  KEYS.KEY_2,     KEYS.KEY_1,    KEYS.PLUS],
  [KEYS.KEY_0,  KEYS.EQUAL]
];
