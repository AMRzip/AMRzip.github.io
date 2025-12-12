'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './page.module.css'

export default function About() {
  const team = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', emoji: '👩‍💼' },
    { name: 'Michael Chen', role: 'CTO', emoji: '👨‍💻' },
    { name: 'Emily Rodriguez', role: 'Head of Product', emoji: '👩‍🎨' },
    { name: 'David Kim', role: 'Lead Engineer', emoji: '👨‍🔬' },
  ]

  const values = [
    {
      icon: '🌍',
      title: 'Global First',
      description: 'We believe every website deserves a global audience.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Pushing boundaries with AI and cutting-edge technology.',
    },
    {
      icon: '🤝',
      title: 'Customer Success',
      description: 'Your success is our mission and our measure.',
    },
    {
      icon: '🔒',
      title: 'Privacy & Security',
      description: 'Enterprise-grade security and data protection.',
    },
  ]

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>
          About <span className={styles.gradient}>Multilingual</span>
        </h1>
        <p className={styles.subtitle}>
          We're on a mission to make the web accessible to everyone, everywhere
        </p>
      </motion.div>

      <motion.section
        className={styles.story}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.storyContent}>
          <h2 className={styles.sectionTitle}>Our Story</h2>
          <p className={styles.storyText}>
            Founded in 2020, Multilingual started with a simple observation: most of the 
            web was only accessible in English, leaving billions of people unable to access 
            valuable content and services.
          </p>
          <p className={styles.storyText}>
            We set out to change that. Today, we help over 50,000 websites reach global 
            audiences with AI-powered translation technology that maintains quality, SEO, 
            and user experience across all languages.
          </p>
          <p className={styles.storyText}>
            Our team combines expertise in machine learning, linguistics, and web development 
            to create the most powerful translation solution for WordPress.
          </p>
        </div>
        <div className={styles.storyStats}>
          <div className={styles.statBox}>
            <div className={styles.statValue}>10M+</div>
            <div className={styles.statLabel}>Translations</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statValue}>50K+</div>
            <div className={styles.statLabel}>Active Sites</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statValue}>100+</div>
            <div className={styles.statLabel}>Languages</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statValue}>99.9%</div>
            <div className={styles.statLabel}>Uptime</div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className={styles.values}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionTitle}>Our Values</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <motion.div
              key={index}
              className={styles.valueCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <p className={styles.valueDescription}>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={styles.team}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionTitle}>Meet the Team</h2>
        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <motion.div
              key={index}
              className={styles.teamCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.teamAvatar}>{member.emoji}</div>
              <h3 className={styles.teamName}>{member.name}</h3>
              <p className={styles.teamRole}>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div
        className={styles.finalCta}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.ctaTitle}>Join Us on Our Mission</h2>
        <p className={styles.ctaText}>
          Be part of the global web revolution
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/pricing" className={styles.primaryButton}>
            Get Started
          </Link>
          <Link href="/contact" className={styles.secondaryButton}>
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
