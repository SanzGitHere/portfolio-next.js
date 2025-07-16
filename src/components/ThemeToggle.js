'use client';
import { useEffect, useState } from 'react';
import styles from './theme.module.css';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const dark = storedTheme === 'dark';
    setIsDark(dark);
    document.body.classList.toggle('dark-mode', dark);
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newTheme = !prev;
      document.body.classList.toggle('dark-mode', newTheme);
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (
    <div className={styles.themeToggle}>
      <input
        id="theme-switch"
        type="checkbox"
        className={styles.themeSwitch}
        checked={isDark}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-switch" className={styles.toggleLabel}>
        <div className={styles.toggleBody}>
          <div className={styles.toggleCircle}></div>
          <div className={styles.toggleDecor}>
            <div className={styles.moon}></div>
            <div className={styles.star}></div>
            <div className={styles.starSecond}></div>
          </div>
        </div>
      </label>
    </div>
  );
}
