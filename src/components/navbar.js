'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from './navbar.module.css';

export default function Navbar() {
  useEffect(() => {
    const toggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector(`.${styles.navLinks}`);
    const label = document.querySelector(`.${styles.navToggleLabel}`);

    const handleClickOutside = (e) => {
      const clickedInside =
        toggle.contains(e.target) ||
        navLinks.contains(e.target) ||
        label.contains(e.target);

      if (!clickedInside && toggle.checked) {
        toggle.checked = false;
      }
    };

    // Close nav on nav link click
    document.querySelectorAll(`.${styles.navLinks} a`).forEach(link => {
      link.addEventListener('click', () => {
        if (toggle.checked) toggle.checked = false;
      });
    });

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      {/* Hidden checkbox for toggle */}
      <input type="checkbox" id="nav-toggle" className={styles.navToggle} />
      {/* Label for hamburger icon */}
      <label htmlFor="nav-toggle" className={styles.navToggleLabel}>
        &#9776;
      </label>

      {/* Centered nav links */}
      <div className={styles.navCenterWrapper}>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>
      </div>

      {/* Right side with theme toggle */}
      <div className={styles.rightSide}>
        <ThemeToggle />
      </div>
    </nav>
  );
}
