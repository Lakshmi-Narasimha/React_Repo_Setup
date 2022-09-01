import clsx from 'clsx';
import React, { forwardRef } from 'react';
import styles from './Radio.module.css';

type RadioProps = React.HTMLProps<HTMLInputElement> & {
  options: Array<{
    value: string;
    displayName: string;
  }>;
};

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className = '', options = [], ...rest }, ref) => (
    <div className={styles.container}>
      {options.map((option) => (
        <label key={option.value} className={styles.label}>
          <input
            type="radio"
            className={clsx(styles.radio, className)}
            ref={ref}
            value={option.value}
            {...rest}
          />
          <span className={styles.labelText}>{option.displayName}</span>
        </label>
      ))}
    </div>
  )
);

export default Radio;
