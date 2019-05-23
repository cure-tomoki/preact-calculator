import * as cx from 'classnames';
import { h } from 'preact';

import Button from '../../atoms/Button';
import { KeyType } from './KeyLayout';

import * as s from './CalculatorButton.css';

interface CalculatorButtonProps {
  label: string;
  keyType: KeyType;
  value?: number;
  colSpan?: number;
  onClick(): any;
}

export const CalculatorButton = (props: CalculatorButtonProps) => {
  const { label, keyType, value, colSpan, onClick } = props;
  return(
    <td colSpan={colSpan || 1} className={s.CalculatorButtonWrapper}>
      <Button
        {...props}
        value={value}
        onClick={onClick}
        className={cx(s.CalculatorButton, s[`CalculatorButton__${keyType.toLowerCase()}`])}
      >
        {label}
      </Button>
    </td>
  );
};
