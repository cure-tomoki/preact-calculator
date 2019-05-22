import { h } from 'preact';
import { CalculatorButton } from './CalculatorButton';
import { KEY_LAYOUT, KeyItem } from './KeyLayout';

interface CalculatorButtonGridProps {
  onButtonPress(k: KeyItem): void;
}

export const CalculatorButtonGrid = (props: CalculatorButtonGridProps) => {
  const { onButtonPress } = props;
  return(
    <table>
      { KEY_LAYOUT.map((row: KeyItem[]) =>
          <tr>
            { row.map((keyItem: KeyItem) =>
              <CalculatorButton
                label={keyItem.label}
                value={keyItem.value}
                onClick={() => onButtonPress(keyItem)}
              />
            ) }
          </tr>
      ) }
    </table>
  );
};
