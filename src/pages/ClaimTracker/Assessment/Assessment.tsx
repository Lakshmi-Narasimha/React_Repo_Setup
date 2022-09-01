import React from 'react';
import Icon from '../../../components/Icon/Icon';
import styles from './Assessment.module.css';

export default function Assessment({ requirement = '', assessee = '', date = '', className = ''}) {
  return (
    <div className={styles.assessmentWrapper}>
      <div className={styles.assessment}><aside className={styles.iconContainer}><Icon name="checkMark" /></aside>{requirement}</div>
      <div className={styles.assessee}><figure className={styles.assesseeProfile} />{assessee}</div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};