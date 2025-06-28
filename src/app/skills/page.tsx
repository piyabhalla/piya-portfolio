'use client';
import styles from './page.module.css';
// @ts-ignore
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  FaPython, FaJava, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaCloud, FaBrain, FaLaptopCode,
} from 'react-icons/fa';
import {
  SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiFirebase, SiTypescript,
  SiNumpy, SiScikitlearn, SiTensorflow, SiOpencv, SiMysql, SiPostgresql, SiPandas,
} from 'react-icons/si';
import { MdOutlineDraw, MdOutlineTipsAndUpdates } from 'react-icons/md';
import { GiBrain, GiTalk } from 'react-icons/gi';

const sections = [
  {
    title: 'LANGUAGES',
    skills: [
      { name: 'C++', icon: <SiCplusplus color="#004482" /> },
      { name: 'Python', icon: <FaPython color="#3776AB" /> },
      { name: 'Java', icon: <FaJava color="#5382a1" /> },
      { name: 'SQL', icon: <FaDatabase color="#cc2927" /> },
    ],
  },
  {
    title: 'TOOLS',
    skills: [
      { name: 'Git', icon: <FaGitAlt color="#f34f29" /> },
      { name: 'GitHub', icon: <FaGithub color="#000000" /> },
      { name: 'VS Code', icon: <FaCloud color="#007ACC" /> },
    ],
  },
  {
    title: 'BACK-END',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs color="#3c873a" /> },
      { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
      { name: 'Firebase Auth', icon: <SiFirebase color="#FFA000" /> },
    ],
  },
  {
    title: 'FRONT-END',
    skills: [
      { name: 'HTML', icon: <SiHtml5 color="#E34F26" /> },
      { name: 'CSS', icon: <SiCss3 color="#1572B6" /> },
      { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
      { name: 'React', icon: <FaReact color="#61DBFB" /> },
      { name: 'Next.js', icon: <SiNextdotjs color="#000000" /> },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'Deep Learning', icon: <FaBrain color="#f06292" /> },
      { name: 'Computer Vision', icon: <SiOpencv color="#5c5cff" /> },
      { name: 'NLP', icon: <GiTalk color="#00ACC1" /> },
      { name: 'Data Science', icon: <SiPandas color="#150458" /> },
    ],
  },
  {
    title: 'CORE CONCEPTS',
    skills: [
      { name: 'DSA', icon: <MdOutlineDraw color="#e53935" /> },
      { name: 'DBMS', icon: <FaDatabase color="#8e24aa" /> },
      { name: 'OOPs', icon: <SiTypescript color="#1E90FF" /> },
      { name: 'Operating Systems', icon: <FaLaptopCode color="#0097A7" /> },
      { name: 'Computer Networks', icon: <FaCloud color="#3949AB" /> },
    ],
  },
  {
    title: 'SOFT SKILLS',
    skills: [
      { name: 'Leadership', icon: <GiBrain color="#ec407a" /> },
      { name: 'Communication', icon: <GiTalk color="#29b6f6" /> },
      { name: 'Adaptability', icon: <MdOutlineTipsAndUpdates color="#66bb6a" /> },
      { name: 'Problem Solving', icon: <FaBrain color="#e91e63" /> },
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>🚀 My Skills 🚀</h1>

      <div className={styles.container}>
        <div className={styles.row}>
          {sections.slice(0, 2).map((section, i) => (
            <Section key={i} {...section} />
          ))}
        </div>
        <div className={styles.row}>
          {sections.slice(2, 5).map((section, i) => (
            <Section key={i} {...section} />
          ))}
        </div>
        <div className={styles.row}>
          {sections.slice(5).map((section, i) => (
            <Section key={i} {...section} />
          ))}
        </div>
      </div>

      {/* Back to Home Button */}
      <Link href="/" className={styles.backButton}>
        ⬅ Back to Home
      </Link>
    </main>
  );
}

function Section({ title, skills }: { title: string; skills: any[] }) {
  return (
    <motion.div className={styles.section} whileHover={{ scale: 1.02 }}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={styles.icon}>{skill.icon}</div>
            <div>{skill.name}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}