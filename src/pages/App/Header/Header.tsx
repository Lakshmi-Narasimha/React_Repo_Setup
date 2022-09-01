import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from './logo.svg';
import Button from '../../../components/Button/Button';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <LogoSvg className={styles.logo} />
          </Link>
        </div>
        <div className={styles.helpContainer}>
          <Button theme="outline">Help</Button>
        </div>
      </div>
    </header>
  );
}
