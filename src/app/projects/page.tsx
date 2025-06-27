'use client';

import styles from './page.module.css';
// @ts-ignore
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'Piyapp – Social App',
    description: 'Post feed, profile editing, image uploads.',
    github: 'https://github.com/piyabhalla/piyapp',
  },
  {
    title: 'Air Canvas',
    description: 'Draw in air using OpenCV hand tracking.',
    github: 'https://github.com/piyabhalla/Air-Canvas',
  },
  {
    title: 'Spam Detector',
    description: 'Detects spam messages using NLP.',
    github: 'https://github.com/piyabhalla/SMS-Spam-Detection',
  },
  {
    title: 'Movie Recommender',
    description: 'Suggests movies using cosine similarity.',
    github: 'https://github.com/piyabhalla/Movie-Recommendation-System',
  },
  {
    title: 'Connect4',
    description: 'Classic Connect Four game with smart logic.',
    github: 'https://github.com/piyabhalla/Connect4',
  },
  {
    title: 'Car Price Predictor',
    description: 'Predicts car sale prices using ML regression.',
    github: 'https://github.com/piyabhalla/Car-Sales-Price-Prediction',
  },
];

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>👾 My Projects 👾</h1>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub →
            </a>
          </motion.div>
        ))}
      </div>

      <Link href="/" className={styles.backButton}>
        ⬅ Back to Home
      </Link>
    </main>
  );
}