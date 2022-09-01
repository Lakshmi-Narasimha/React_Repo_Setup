import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ClaimTracker from '../ClaimTracker/ClaimTracker';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import styles from './App.module.css';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <div className={styles.container}>
      <Helmet titleTemplate="%s · Claims Portal" />
      <Header />
      <div className={styles.main}>
        <Routes>
          <Route path="/continue-claim" element={<ClaimTracker />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
