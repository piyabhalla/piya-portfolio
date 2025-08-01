'use client';
import styles from './page.module.css';
import Link from 'next/link';

const projects = [
  {
    title: "Neuramini – AI Powered Chatbot Platform",
    description: "Full-stack chatbot with OpenRouter (LLMs) & Hugging Face ViT for image classification.",
    github: "https://github.com/piyabhalla/neuramini"
  },
  {
    title: "Piyapp – Social App",
    description: "Post feed, profile editing, image uploads.",
    github: "https://github.com/piyabhalla/piyapp"
  },
  {
    title: "Air Canvas",
    description: "Draw in air using OpenCV hand tracking.",
    github: "https://github.com/piyabhalla/Air-Canvas"
  },
  {
    title: "Spam Detector",
    description: "Detects spam messages using NLP.",
    github: "https://github.com/piyabhalla/SMS-Spam-Detection"
  },
  {
    title: "Movie Recommender",
    description: "Suggests movies using cosine similarity.",
    github: "https://github.com/piyabhalla/Movie-Recommendation-System"
  },
  {
    title: "Connect4",
    description: "Classic Connect Four game with smart logic.",
    github: "https://github.com/piyabhalla/Connect4"
  },
  {
    title: "Car Price Predictor",
    description: "Predicts car sale prices using ML regression.",
    github: "https://github.com/piyabhalla/Car-Sales-Price-Prediction"
  },
];

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>🧠 My Projects 🧠</h1>

      <div className={styles.rowsWrapper}>
        <div className={styles.row}>
          {projects.slice(0, 2).map((project, index) => (
            <div key={index} className={styles.card}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub →
              </a>
            </div>
          ))}
        </div>

        <div className={styles.row}>
          {projects.slice(2, 5).map((project, index) => (
            <div key={index + 2} className={styles.card}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub →
              </a>
            </div>
          ))}
        </div>

        <div className={styles.row}>
          {projects.slice(5).map((project, index) => (
            <div key={index + 5} className={styles.card}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>

      <Link href="/" className={styles.backButton}>⬅ Back to Home</Link>
    </main>
  );
}