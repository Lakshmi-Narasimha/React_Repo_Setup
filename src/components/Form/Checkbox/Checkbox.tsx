import React, { forwardRef } from 'react';
import styles from './Checkbox.module.css';

type Props = React.HTMLProps<HTMLInputElement>;

const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ type = 'checkbox', className = '', children, ...rest }, ref) => (
  <label className={styles.checkboxContainer}>
    <input className={styles.checkbox} type="checkbox" {...rest} ref={ref} /><span className={styles.checkmark} />
    <span className={styles.labelText}>{children}</span>
  </label>
)
);

export default Checkbox;
