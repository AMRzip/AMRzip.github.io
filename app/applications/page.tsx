'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './page.module.css'

export default function Applications() {
  const integrations = [
    {
      icon: '🔧',
      name: 'WordPress',
      description: 'Seamless integration with your WordPress site',
      features: ['One-click install', 'Auto updates', 'All themes supported'],
    },
    {
      icon: '🛍️',
      name: 'WooCommerce',
      description: 'Complete e-commerce translation solution',
      features: ['Product pages', 'Checkout', 'Customer emails'],
    },
    {
      icon: '📝',
      name: 'Elementor',
      description: 'Visual page builder compatibility',
      features: ['Widget translation', 'Dynamic content', 'Global widgets'],
    },
    {
      icon: '🎨',
      name: 'Gutenberg',
      description: 'Full block editor support',
      features: ['Block translation', 'Reusable blocks', 'Custom blocks'],
    },
    {
      icon: '🚀',
      name: 'Yoast SEO',
      description: 'SEO optimization for all languages',
      features: ['Meta translation', 'XML sitemaps', 'Schema markup'],
    },
    {
      icon: '📱',
      name: 'Contact Form 7',
      description: 'Multilingual contact forms',
      features: ['Form translation', 'Email templates', 'Validation messages'],
    },
  ]

  const useCases = [
    {
      icon: '🌐',
      title: 'Global Content Distribution',
      description: 'Automatically distribute your content in multiple languages across different regions.',
      benefits: ['Faster market entry', 'Consistent messaging', 'Reduced costs'],
    },
    {
      icon: '🎯',
      title: 'Localized Marketing',
      description: 'Create targeted marketing campaigns for different language markets.',
      benefits: ['Higher conversion', 'Better engagement', 'Cultural relevance'],
    },
    {
      icon: '📊',
      title: 'Analytics & Insights',
      description: 'Track performance across different language versions of your site.',
      benefits: ['Data-driven decisions', 'ROI tracking', 'A/B testing'],
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Enterprise-grade security features for large organizations.',
      benefits: ['SOC 2 compliance', 'Data encryption', 'Role management'],
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
          Powerful <span className={styles.gradient}>Integrations</span>
        </h1>
        <p className={styles.subtitle}>
          Works seamlessly with your favorite WordPress tools and plugins
        </p>
      </motion.div>

      <div className={styles.integrationsGrid}>
        {integrations.map((integration, index) => (
          <motion.div
            key={index}
            className={styles.integrationCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.integrationIcon}>{integration.icon}</div>
            <h3 className={styles.integrationName}>{integration.name}</h3>
            <p className={styles.integrationDescription}>{integration.description}</p>
            <ul className={styles.featuresList}>
              {integration.features.map((feature, idx) => (
                <li key={idx} className={styles.feature}>
                  <span className={styles.bullet}>•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.section
        className={styles.useCases}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.sectionTitle}>Real-World Applications</h2>
        <div className={styles.useCasesGrid}>
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className={styles.useCaseCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.useCaseIcon}>{useCase.icon}</div>
              <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
              <p className={styles.useCaseDescription}>{useCase.description}</p>
              <div className={styles.benefits}>
                {useCase.benefits.map((benefit, idx) => (
                  <span key={idx} className={styles.benefit}>{benefit}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={styles.api}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.apiContent}>
          <h2 className={styles.apiTitle}>Powerful API</h2>
          <p className={styles.apiDescription}>
            Build custom integrations with our comprehensive REST API. Perfect for developers 
            who need advanced customization and automation.
          </p>
          <div className={styles.apiFeatures}>
            <div className={styles.apiFeature}>
              <span className={styles.apiIcon}>🔑</span>
              <div>
                <h4>Secure Authentication</h4>
                <p>OAuth 2.0 and API key support</p>
              </div>
            </div>
            <div className={styles.apiFeature}>
              <span className={styles.apiIcon}>📚</span>
              <div>
                <h4>Complete Documentation</h4>
                <p>Detailed guides and examples</p>
              </div>
            </div>
            <div className={styles.apiFeature}>
              <span className={styles.apiIcon}>⚡</span>
              <div>
                <h4>Rate Limiting</h4>
                <p>Generous limits for all plans</p>
              </div>
            </div>
          </div>
          <Link href="#" className={styles.apiButton}>
            View API Documentation
          </Link>
        </div>
        <div className={styles.apiCode}>
          <pre className={styles.codeBlock}>
            <code>{`// Initialize the API
const api = new MultilingualAPI({
  apiKey: 'your-api-key'
});

// Translate content
const result = await api.translate({
  text: 'Hello World',
  from: 'en',
  to: ['es', 'fr', 'de']
});

console.log(result);
// {
//   es: 'Hola Mundo',
//   fr: 'Bonjour le monde',
//   de: 'Hallo Welt'
// }`}</code>
          </pre>
        </div>
      </motion.section>

      <motion.div
        className={styles.finalCta}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.ctaTitle}>Ready to Integrate?</h2>
        <p className={styles.ctaText}>Get started with our powerful integrations today</p>
        <div className={styles.ctaButtons}>
          <Link href="/pricing" className={styles.primaryButton}>
            Start Free Trial
          </Link>
          <Link href="/contact" className={styles.secondaryButton}>
            Contact Support
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
