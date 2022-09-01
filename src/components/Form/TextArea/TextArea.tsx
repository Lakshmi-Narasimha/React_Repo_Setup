import React, { forwardRef } from 'react';
import styles from './TextArea.module.css';

type Props = React.HTMLProps<HTMLTextAreaElement>;

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className = '', label = '', placeholder = '', ...rest }, ref) => (

    <div className={styles.claimField}>
      <span className={styles.claimLabel}>{label}</span>
      <textarea
      className={styles.claimTextArea}
      placeholder={placeholder} />
    </div>

  )
);

export default TextArea;
