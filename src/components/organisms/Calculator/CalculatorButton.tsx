import { h } from 'preact';
import Button from '../../atoms/Button';

import * as s from './CalculatorButton.css';

interface CalculatorButtonProps {
  label: string;
  value?: number;
  onClick(): any;
}

export const CalculatorButton = (props: CalculatorButtonProps) => {
  const { label, value, onClick } = props;
  return(
    <td>
      <Button
        {...props}
        value={value}
        onClick={onClick}
        className={s.CalculatorButton_button}
      >
        {label}
      </Button>
    </td>
  );
};
