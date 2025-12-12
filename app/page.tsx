'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Translation',
      description: 'Advanced neural machine translation that understands context and maintains your brand voice.',
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized for performance with CDN caching and smart preloading.',
    },
    {
      icon: '🎨',
      title: 'SEO Optimized',
      description: 'Automatic hreflang tags, translated meta data, and sitemap generation.',
    },
    {
      icon: '🔧',
      title: 'Easy Integration',
      description: 'One-click installation with zero configuration needed to get started.',
    },
    {
      icon: '🌍',
      title: '100+ Languages',
      description: 'Support for all major languages with automatic language detection.',
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Track visitor languages, translation quality, and engagement metrics.',
    },
  ]

  const stats = [
    { value: '10M+', label: 'Translations' },
    { value: '50K+', label: 'Active Sites' },
    { value: '100+', label: 'Languages' },
    { value: '99.9%', label: 'Uptime' },
  ]

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.badge}>
            ✨ Trusted by 50,000+ WordPress sites worldwide
          </div>
          
          <h1 className={styles.title}>
            Transform Your WordPress Site Into a
            <span className={styles.gradient}> Global Platform</span>
          </h1>
          
          <p className={styles.subtitle}>
            The most powerful translation plugin for WordPress. Reach international audiences 
            with AI-powered translations that maintain your brand voice and SEO rankings.
          </p>
          
          <div className={styles.cta}>
            <Link href="/pricing" className={styles.primaryButton}>
              Start Free Trial
            </Link>
            <Link href="/solutions" className={styles.secondaryButton}>
              View Demo
            </Link>
          </div>

          <div className={styles.socialProof}>
            <div className={styles.avatars}>
              <div className={styles.avatar}>👤</div>
              <div className={styles.avatar}>👤</div>
              <div className={styles.avatar}>👤</div>
              <div className={styles.avatar}>👤</div>
              <div className={styles.avatar}>+50K</div>
            </div>
            <p className={styles.socialProofText}>
              Join thousands of satisfied users
            </p>
          </div>
        </motion.div>

        <div className={styles.heroVisual}>
          <div className={styles.glowOrb}></div>
          <div className={styles.floatingCard}>
            <div className={styles.cardHeader}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.langFlag}>🇬🇧 EN → 🇪🇸 ES</div>
              <div className={styles.translationBar}>
                <div className={styles.translationProgress}></div>
              </div>
              <div className={styles.translationText}>Translating...</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </motion.div>
        ))}
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>
            Everything You Need to Go Global
          </h2>
          <p className={styles.sectionSubtitle}>
            Powerful features designed to make translation effortless
          </p>
        </motion.div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>
            Get Started in Minutes
          </h2>
          <p className={styles.sectionSubtitle}>
            Simple three-step process to make your site multilingual
          </p>
        </motion.div>

        <div className={styles.steps}>
          {[
            {
              step: '01',
              title: 'Install Plugin',
              description: 'Download and activate the plugin from WordPress dashboard in one click.',
            },
            {
              step: '02',
              title: 'Select Languages',
              description: 'Choose which languages you want to translate your content into.',
            },
            {
              step: '03',
              title: 'Go Live',
              description: 'Your site is now multilingual! Visitors see content in their language automatically.',
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className={styles.stepCard}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.stepNumber}>{step.step}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.finalCta}>
        <motion.div
          className={styles.ctaCard}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.ctaTitle}>
            Ready to Go Global?
          </h2>
          <p className={styles.ctaSubtitle}>
            Start your free 14-day trial. No credit card required.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/pricing" className={styles.primaryButton}>
              Start Free Trial
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Contact Sales
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
