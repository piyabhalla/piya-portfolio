'use client';

import React from 'react';
import styles from './page.module.css';
// @ts-ignore
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'AI Portfolio Website',
      description: 'Built a beautiful portfolio with animations, responsive design, and Next.js.',
      link: 'https://github.com/piyabhalla/piya-portfolio',
    },
    {
      title: 'IoT-AI Water Quality System',
      description: 'Sensor-integrated ML system for predicting water contamination.',
      link: '#',
    },
    {
      title: 'Acupuncture Pen Ad',
      description: 'Creative copy and storyboard for health product marketing.',
      link: '#',
    },
    {
      title: 'Makeup Pen Ad',
      description: 'Designed a catchy script and visuals for social media promotion.',
      link: '#',
    },
    {
      title: 'Chatbot for College Queries',
      description: 'Helpful assistant built using NLP for answering academic FAQs.',
      link: '#',
    },
    {
      title: 'Python Data Dashboard',
      description: 'Visual analytics tool using pandas, matplotlib, and Streamlit.',
      link: '#',
    },
  ];

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>🌈 My Projects</h1>
      <div className={styles.grid}>
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className={styles.card}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank">View</a>
          </motion.div>
        ))}
      </div>
      <Link href="/" className={styles.backButton}>
        ⬅ Back to Home
      </Link>
    </main>
  );
}