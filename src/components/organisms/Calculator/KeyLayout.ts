export enum K {
  KEY_0, KEY_1, KEY_2, KEY_3, KEY_4, KEY_5, KEY_6, KEY_7, KEY_8, KEY_9,
  PLUS, MINUS, MULTIPLY, DIVIDE,
  EQUAL, CLEAR, PERCENT, NEGATIVE
}

export enum KeyType { NUMBER, OPERATOR, ACTION }

export type KeyItem = {
  name: K;
  keyType: KeyType;
  label: string;
  keyCode: number;
  value?: number;
};

const createNumberKeys = (): {[k in K]: KeyItem} => {
  // tslint:disable-next-line:no-object-literal-type-assertion
  const keys: { [k in K]: KeyItem } = {} as { [k in K]: KeyItem };
  for (let i = 0; i < 10; i++) {
    const keyName: K = K[`KEY_${i}`];
    keys[keyName] = {
      name: keyName,
      keyType: KeyType.NUMBER,
      label: String(i),
      value: i,
      keyCode: i + 48
    };
  }
  return keys;
};

export const KEYS: { [k in K]: KeyItem } = {
  // number keys (0~9)
  ...createNumberKeys(),
  // operator keys
  [K.PLUS]:      { name: K.PLUS, keyType: KeyType.OPERATOR, label: '+', keyCode: 187 },
  [K.MINUS]:     { name: K.MINUS, keyType: KeyType.OPERATOR, label: '-', keyCode: 189 },
  [K.MULTIPLY]:  { name: K.MULTIPLY, keyType: KeyType.OPERATOR, label: '×', keyCode: 186 },
  [K.DIVIDE]:    { name: K.DIVIDE, keyType: KeyType.OPERATOR, label: '÷', keyCode: 191 },
  // action keys
  [K.EQUAL]:     { name: K.EQUAL, keyType: KeyType.ACTION, label: '=', keyCode: 187 },
  [K.CLEAR]:     { name: K.CLEAR, keyType: KeyType.ACTION, label: 'C', keyCode: 8 },
  [K.PERCENT]:   { name: K.PERCENT, keyType: KeyType.ACTION, label: '%', keyCode: 53 },
  [K.NEGATIVE]:  { name: K.NEGATIVE, keyType: KeyType.ACTION, label: '+/-', keyCode: 82 }
};

export const KEY_LAYOUT: KeyItem[][] = [
  [KEYS[K.CLEAR],  KEYS[K.NEGATIVE],  KEYS[K.PERCENT],  KEYS[K.DIVIDE]],
  [KEYS[K.KEY_7],  KEYS[K.KEY_8],     KEYS[K.KEY_9],    KEYS[K.MULTIPLY]],
  [KEYS[K.KEY_4],  KEYS[K.KEY_5],     KEYS[K.KEY_6],    KEYS[K.MINUS]],
  [KEYS[K.KEY_3],  KEYS[K.KEY_2],     KEYS[K.KEY_1],    KEYS[K.PLUS]],
  [KEYS[K.KEY_0],  KEYS[K.EQUAL]]
];
