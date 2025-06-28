'use client';

import React from 'react';
import styles from './page.module.css';
// @ts-ignore
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🧠 My Projects
      </motion.h1>

      <motion.p
        className={styles.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        View my projects that reflect my passion for development, design, and machine learning.
      </motion.p>

      <motion.a
        href="https://github.com/piyabhalla"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaDownload className={styles.icon} />
        View on GitHub
      </motion.a>

      <Link href="/" className={styles.backButton}>
        ⬅ Back to Home
      </Link>
    </main>
  );
}