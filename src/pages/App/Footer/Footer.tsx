import { ReactComponent as LogoSvg } from './logo.svg';
import Icon from '../../../components/Icon/Icon';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.contact}>
        <div className={styles.sectionContent}>
          <div className={styles.contactContent}>
            <h2 className={styles.contactHeadline}>
              Our claims team is here for you.
          </h2>
            <p className={styles.contactCopy}>
              Please contact us to help you at any point
          </p>
            <div className={styles.contactButtons}>
              <div className={styles.contactButtonContainer}>
                <div className={styles.iconContainer} >
                  <Icon name="contactChat" />
                </div>
                <button type="button" className={styles.contactButtonContent}>
                  <span>Chat online</span>
                  <span>iptiQ.com</span>
                </button>
              </div>
              <div className={styles.contactButtonContainer}>
                <div className={styles.iconContainer} >
                  <Icon name="contactCall" />
                </div>
                <button type="button" className={styles.contactButtonContent}>
                  <span>Call us</span>
                  <span>919 919</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.info}>
        <div className={styles.sectionContent}>
          <div className={styles.infoContent}>
            <div className={styles.infoLogoContainer}>
              <LogoSvg className={styles.infoLogo} />
            </div>
            <div className={styles.infoCopy}>
              <p>
                brand name life insurance is if more than 1: life insurance
                products are issued by the insurer, Swiss Re Life & Health
                Australia Limited ABN 74 000 218 306, AFSL 324908 (Swiss Re),
                distributed by entity name ABN add, AFSL add (add short form name
                eg. GFS) and promoted by entity name ABN add, AFSL or AR add (add
                short form name.). if applicable short form entity name of
                promoter is an authorised representative of entity name.
            </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.legal}>
        <div className={styles.sectionContent}>
          <div className={styles.legalContent}>
            <div>© 2020 iptiQ All rights reserved</div>
            <div className={styles.legalLinks}>
              <a href="#">Privacy Policy</a>
            </div>
            <div className={styles.legalLinks}>
              <a href="#">Legal notice</a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
