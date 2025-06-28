'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Home() {
  const sparkleCount = 20

  useEffect(() => {
    const sparkles = document.querySelectorAll(`.${styles.sparkle}`)
    sparkles.forEach((sparkle: any) => {
      sparkle.style.left = `${Math.random() * 100}%`
      sparkle.style.top = `${Math.random() * 100}%`
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      <nav className={styles.sidebar}>
        <div className={styles.logo}>🌟 Piya Bhalla</div>
        <ul>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div className={styles.main}>
        <div className={styles.avatarContainer}>
          <Image
            src="/profile.jpg"
            alt="Piya Bhalla"
            width={280}
            height={280}
            className={styles.avatar}
          />
        </div>

        <h1 className={styles.heading}>✨ Hi, I'm Piya!</h1>
        <p className={styles.bio}>
          A passionate developer exploring full-stack development, AI/ML, and creative coding.  
          Always building something new — driven by curiosity, creativity, and clean code.
        </p>

        <div className={styles.badges}>
          {/* Optional: add your tech tags here */}
        </div>

        <p className={styles.quote}>
          “Turning ideas into beautiful code.”
        </p>

        <div className={styles.socials}>
          <a href="https://github.com/piyabhalla" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/piya-bhalla-b67903336?trk=contact-info" target="_blank"><FaLinkedin /></a>
          <a href="mailto:piyabhalla000@gmail.com"><FaEnvelope /></a>
        </div>

        <div className={styles.divider}></div>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} Piya Bhalla. All rights reserved.
        </footer>
      </div>
    </div>
  )
}