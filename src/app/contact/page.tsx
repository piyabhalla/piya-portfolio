'use client';

import React from 'react';
import styles from './page.module.css';
// @ts-ignore
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>📬 Contact Me</h1>

      <div className={styles.cardGrid}>
        <motion.div className={styles.card} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5 }}>
          <a href="tel:+918146984010" target="_blank">
            <FaPhone className={styles.icon} />
            <h2>Phone</h2>
            <p>+91 8146984010</p>
          </a>
        </motion.div>

        <motion.div className={styles.card} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <a href="mailto:piyabhalla000@gmail.com" target="_blank">
            <FaEnvelope className={styles.icon} />
            <h2>Email</h2>
            <p>piyabhalla000@gmail.com</p>
          </a>
        </motion.div>

        <motion.div className={styles.card} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <a href="https://github.com/piyabhalla/" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
            <h2>GitHub</h2>
            <p>@piyabhalla</p>
          </a>
        </motion.div>

        <motion.div className={styles.card} whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <a href="https://www.linkedin.com/in/piya-bhalla-b67903336?trk=contact-info" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
            <h2>LinkedIn</h2>
            <p>Piya Bhalla</p>
          </a>
        </motion.div>
      </div>

      <motion.form
        className={styles.form}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        onSubmit={(e) => {
          e.preventDefault();
          alert('Message sent! (fake)');
        }}
      >
        <h2 className={styles.formHeading}>💌 Drop Me a Message</h2>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows={5} placeholder="Your Message..." required />
        <button type="submit">Send ✨</button>
      </motion.form>

      <Link href="/" className={styles.backButton}>
        ⬅ Back to Home
      </Link>
    </main>
  );
}