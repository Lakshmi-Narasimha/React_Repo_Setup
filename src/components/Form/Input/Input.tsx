import React, { forwardRef } from 'react';
import styles from './Input.module.css';

type Props = React.HTMLProps<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(
  ({ type = 'text', className = '', label = '', placeholder = '', ...rest }, ref) => (

    <div className={styles.claimField}>
      <span className={styles.claimLabel}>{label}</span>
      <input
      type={type}
      className={styles.claimInput}
      placeholder={placeholder} />
    </div>

  )
);

export default Input;
