import React from 'react';
import clsx from 'clsx';
import Button from '../../components/Button/Button';
import Assessment from './Assessment/Assessment';
import Icon from '../../components/Icon/Icon';

import styles from './ClaimTracker.module.css'

export default function ClaimTracker() {
  return (

    <div className={styles.claimContainer}>
      <section className={styles.sectionClaim}>
        <div className={styles.sectionContent}>
          <div className={styles.claimMain}>

            <h1 className={styles.headline}>Welcome back Ashley</h1>
            <p className={styles.subhead}>Your claim number is <strong>20210318000128</strong>. You currently have <strong>3 notifications</strong> for action.</p>

            <div className={styles.claimTile}>
              <div className={styles.claimHeadlineContainer}>
                <h2 className={styles.claimTrackerHeadline}>To complete the assessment, we need an additional supporting document.</h2>
              </div>

              <div className={styles.claimRow}>
                <Button className={styles.claimButton} theme="outline">Upload documents</Button>
              </div>

              <div className={styles.claimSeparator} />

              <nav className={styles.paginationContainer}>
                <div className={styles.pagination}>
                  <a className={styles.pageLink} href="#"><span className={clsx(styles.pageItem, styles.active)} aria-label="page item" /></a>
                  <a className={styles.pageLink} href="#"><span className={styles.pageItem} aria-label="page item" /></a>
                  <a className={styles.pageLink} href="#"><span className={styles.pageItem} aria-label="page item" /></a>
                </div>
              </nav>
            </div>


            <div className={styles.claimProgressGrid}>
              <aside className={clsx(styles.iconContainer, styles.complete)}><Icon name="checkMark" /></aside>
              <div className={styles.claimProgressTile}>
                <div className={styles.claimProgressHeadlineContainer}>
                  <h2 className={styles.claimProgressHeadline}>Claim lodged</h2>
                  <Icon name="chevronCircle" className={styles.chevron} />
                </div>
                <div className={styles.claimProgressSeparator} />
                <p className={styles.claimProgressSubhead}>Describe your situation</p>
              </div>

              <aside className={clsx(styles.iconContainer, styles.inProgress)}><Icon name="task" /></aside>
              <div className={styles.claimProgressTile}>
                <div className={styles.claimProgressHeadlineContainer}>
                  <h2 className={styles.claimProgressHeadline}>Assessment</h2>
                  <Icon name="chevronCircle" className={styles.chevron} />
                </div>
                <div className={styles.claimProgressSeparator} />
                <div className={styles.claimRow}>
                  <Assessment requirement="Eligibility check" assessee="Ashley" date="JUL 2020" />
                  <Assessment requirement="Review all information provided" assessee="Ashley" date="JUL 2020" />
                  <Assessment requirement="Review claim cause and incident date" assessee="Ashley" date="JUL 2020" />
                </div>
                <div className={styles.claimRow}>
                  <Button className={styles.claimButton} theme="outline">Ask a question</Button>
                </div>
              </div>

              <aside className={styles.iconContainer}><Icon name="communications" /></aside>
              <div className={styles.claimProgressTile}>
                <div className={styles.claimProgressHeadlineContainer}>
                  <h2 className={styles.claimProgressHeadline}>Decision</h2>
                  <Icon name="chevronCircle" className={styles.chevron} />
                </div>
              </div>

              <aside className={styles.iconContainer}><Icon name="communications" /></aside>
              <div className={styles.claimProgressTile}>
                <div className={styles.claimProgressHeadlineContainer}>
                  <h2 className={styles.claimProgressHeadline}>Ongoing assessment</h2>
                  <Icon name="chevronCircle" className={styles.chevron} />
                </div>
              </div>

              <aside className={styles.iconContainer}><Icon name="clipboard" /></aside>
              <div className={styles.claimProgressTile}>
                <div className={styles.claimProgressHeadlineContainer}>
                  <h2 className={styles.claimProgressHeadline}>Closure</h2>
                  <Icon name="chevronCircle" className={styles.chevron} />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};