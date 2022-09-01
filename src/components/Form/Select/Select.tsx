import clsx from 'clsx';
import React, { forwardRef } from 'react';
import styles from './Select.module.css';

type SelectProps = React.HTMLProps<HTMLSelectElement> & {
  options: Array<{
    value: string;
    displayName: string;
  }>;
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', label = '', options = [], placeholder, ...rest }, ref) => (
    <div className={styles.claimField}>
      <span className={styles.claimLabel}>{label}</span>
      
      <select className={clsx(styles.select, className)} ref={ref} {...rest}>
        <option value="" disabled selected>{placeholder}</option>
        {options.map((enumValue) => (
          <option key={enumValue.value} value={enumValue.value}>
            {enumValue.displayName}
          </option>
        ))}
      </select>
    </div>
  )
);

export default Select;
