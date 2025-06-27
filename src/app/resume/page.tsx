'use client';

import React from 'react';
import styles from './page.module.css';
// @ts-ignore
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <main className={styles.main}>
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        📄 My Resume
      </motion.h1>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Click the button below to download my resume. Let's connect!
      </motion.p>

      <motion.a
        href="/PIYABHALLA.pdf"
        download
        target="_blank"
        className={styles.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaDownload className={styles.icon} />
        Download Resume
      </motion.a>

      <Link href="/" className={styles.backButton}>
        ⬅ Back to Home
      </Link>
    </main>
  );
}