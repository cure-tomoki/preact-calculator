import { h } from 'preact';
import CalculatorButton from '../CalculatorButton';
import { KeyItem } from './KeyLayout';

import * as s from './CalculatorButtonGrid.css';

interface CalculatorButtonGridProps {
  layout: KeyItem[][];
  onButtonPress(k: KeyItem): void;
}

export const CalculatorButtonGrid = (props: CalculatorButtonGridProps) => {
  const { layout, onButtonPress } = props;
  return(
    <table className={s.CalculatorButtonTable}>
      { layout.map((row: KeyItem[]) =>
          <tr>
            { row.map((keyItem: KeyItem) =>
              <CalculatorButton
                label={keyItem.label}
                value={keyItem.value}
                keyType={keyItem.keyType}
                colSpan={keyItem.colSpan}
                onClick={() => onButtonPress(keyItem)}
              />
            ) }
          </tr>
      ) }
    </table>
  );
};
