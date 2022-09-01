import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

type ButtonTheme = 'default' | 'secondary' | 'danger' | 'outline' | 'upload' ;
type ButtonType = 'button' | 'submit' | 'reset';
type ButtonSize = 'default' | 'small' | 'tiny';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  theme?: ButtonTheme;
  size?: ButtonSize;
}

export default function Button({
  type = 'button',
  theme = 'default',
  size = 'default',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      /* eslint-disable react/button-has-type */
      type={type}
      /* eslint-enable react/button-has-type */
      className={clsx(
        styles.button,
        styles[`theme--${theme}`],
        styles[`size--${size}`],
        className
      )}
      {...rest}
    >
      <span className={styles.buttonContent}>{children}</span>
    </button>
  );
}
