'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './page.module.css'

export default function Solutions() {
  const solutions = [
    {
      icon: '🛒',
      title: 'E-Commerce',
      description: 'Sell globally with multilingual product pages, checkout, and customer support.',
      features: ['Product translations', 'Multi-currency support', 'Localized checkout', 'Customer reviews'],
      stats: { label: 'Revenue increase', value: '+156%' },
    },
    {
      icon: '📰',
      title: 'Publishing & Media',
      description: 'Reach international audiences with translated articles, blogs, and news.',
      features: ['Content translation', 'SEO optimization', 'RSS feeds', 'Author profiles'],
      stats: { label: 'Audience growth', value: '+230%' },
    },
    {
      icon: '🎓',
      title: 'Education & E-Learning',
      description: 'Make learning accessible globally with multilingual courses and materials.',
      features: ['Course translation', 'Video subtitles', 'Interactive quizzes', 'Certificates'],
      stats: { label: 'Student enrollment', value: '+180%' },
    },
    {
      icon: '🏢',
      title: 'Corporate Websites',
      description: 'Professional multilingual presence for global enterprises.',
      features: ['Corporate content', 'Team profiles', 'Career pages', 'Investor relations'],
      stats: { label: 'Global reach', value: '+300%' },
    },
    {
      icon: '🍽️',
      title: 'Hospitality & Tourism',
      description: 'Welcome international guests with multilingual booking and information.',
      features: ['Booking systems', 'Menu translation', 'Local guides', 'Reviews'],
      stats: { label: 'Bookings increase', value: '+145%' },
    },
    {
      icon: '💼',
      title: 'Professional Services',
      description: 'Expand your services internationally with localized content.',
      features: ['Service pages', 'Case studies', 'Client testimonials', 'Contact forms'],
      stats: { label: 'Lead generation', value: '+210%' },
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
          Solutions for Every <span className={styles.gradient}>Business</span>
        </h1>
        <p className={styles.subtitle}>
          Tailored translation solutions that drive real results across industries
        </p>
      </motion.div>

      <div className={styles.solutionsGrid}>
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            className={styles.solutionCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.solutionIcon}>{solution.icon}</div>
            <h3 className={styles.solutionTitle}>{solution.title}</h3>
            <p className={styles.solutionDescription}>{solution.description}</p>
            
            <ul className={styles.featuresList}>
              {solution.features.map((feature, idx) => (
                <li key={idx} className={styles.feature}>
                  <span className={styles.check}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className={styles.stats}>
              <div className={styles.statsLabel}>{solution.stats.label}</div>
              <div className={styles.statsValue}>{solution.stats.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.section
        className={styles.caseStudies}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionTitle}>Success Stories</h2>
        <div className={styles.casesGrid}>
          <div className={styles.caseCard}>
            <div className={styles.caseLogo}>🏪</div>
            <h3>Global Fashion Store</h3>
            <p>Expanded to 25 countries and increased revenue by 300%</p>
            <Link href="#" className={styles.caseLink}>Read case study →</Link>
          </div>
          <div className={styles.caseCard}>
            <div className={styles.caseLogo}>📚</div>
            <h3>Online Learning Platform</h3>
            <p>Reached 1M+ international students across 50 languages</p>
            <Link href="#" className={styles.caseLink}>Read case study →</Link>
          </div>
          <div className={styles.caseCard}>
            <div className={styles.caseLogo}>🌐</div>
            <h3>Tech Company</h3>
            <p>Achieved 500% ROI with multilingual product documentation</p>
            <Link href="#" className={styles.caseLink}>Read case study →</Link>
          </div>
        </div>
      </motion.section>

      <motion.div
        className={styles.finalCta}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
        <p className={styles.ctaText}>Start reaching global audiences today</p>
        <div className={styles.ctaButtons}>
          <Link href="/pricing" className={styles.primaryButton}>
            View Pricing
          </Link>
          <Link href="/contact" className={styles.secondaryButton}>
            Talk to Sales
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
