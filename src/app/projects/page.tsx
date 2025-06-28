'use client';

import React from 'react';
import styles from './page.module.css';
// @ts-ignore
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'AI Water Quality System',
      description: 'An IoT-AI system using sensors to predict water contamination in real-time.',
      link: 'https://github.com/piyabhalla/water-quality-monitoring',
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website built with Next.js, Firebase, and vibrant aesthetics.',
      link: 'https://github.com/piyabhalla/piya-portfolio',
    },
    {
      title: 'Creative Ads Engine',
      description: 'A data-driven creative engine to test hooks, scripts, and boost ad performance.',
      link: 'https://github.com/piyabhalla/ad-engine',
    },
    {
      title: 'Medical Chatbot',
      description: 'Smart chatbot trained on BDS queries and dental patient FAQs.',
      link: 'https://github.com/piyabhalla/medical-chatbot',
    },
    {
      title: 'NLP Resume Parser',
      description: 'Parses resumes and extracts skills and experience using NLP models.',
      link: 'https://github.com/piyabhalla/nlp-resume-parser',
    },
    {
      title: 'Facial Emotion Detector',
      description: 'Detects user emotions in real-time using OpenCV and deep learning.',
      link: 'https://github.com/piyabhalla/emotion-detector',
    },
  ];

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>✨ My Projects</h1>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project →
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