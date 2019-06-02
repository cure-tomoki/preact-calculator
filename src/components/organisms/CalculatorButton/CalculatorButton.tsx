import * as cx from 'classnames';
import { h } from 'preact';

import Button from '../../atoms/Button';
import { KeyTypes } from '../CalculatorButtonGrid';

import * as s from './CalculatorButton.css';

interface CalculatorButtonProps {
  label: string;
  keyType: KeyTypes;
  value?: number;
  colSpan?: number;
  onClick(): any;
}

export const CalculatorButton = (props: CalculatorButtonProps) => {
  const { label, keyType, value, colSpan, onClick } = props;
  const colSpanVal = colSpan || 1;
  return(
    <td
      colSpan={colSpanVal}
      className={s.CalculatorButtonWrapper}
      style={{width: `${colSpanVal * 72}px`}}
    >
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
