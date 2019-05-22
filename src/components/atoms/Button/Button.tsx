import * as cx from 'classnames';
import { h, PreactHTMLAttributes } from 'preact';

interface ButtonProps {
  value: string | number;
  className?: string;
  children?: string | number | PreactHTMLAttributes;
  onClick(x: string | number): any | void;
}

export const Button = (props: ButtonProps) => {
  const {onClick, value, className, children} = props;

  // passess value to the provided onClick function.
  const handleClick = (e: MouseEvent, v: string | number) => {
    e.preventDefault();
    return onClick(v);
  };

  return (
    <button
      {...props}
      value={value}
      className={cx(className, 'button')}
      onClick={(e: MouseEvent) => handleClick(e, value)}
    >
      {children}
    </button>
  );
};
