'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './page.module.css'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'forever',
      description: 'Perfect for small websites and personal blogs',
      features: [
        '1 website',
        'Up to 3 languages',
        '10,000 page views/month',
        'Basic translations',
        'Community support',
        'Multilingual sitemap',
      ],
      cta: 'Start Free',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$29',
      period: 'per month',
      description: 'Ideal for growing businesses and e-commerce',
      features: [
        '5 websites',
        'Unlimited languages',
        '100,000 page views/month',
        'AI-powered translations',
        'Priority support',
        'Advanced SEO features',
        'Custom translations',
        'Analytics dashboard',
      ],
      cta: 'Start Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'per month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited websites',
        'Unlimited languages',
        'Unlimited page views',
        'Premium AI translations',
        'Dedicated support',
        'White-label solution',
        'Custom integrations',
        'SLA guarantee',
        'Team collaboration',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ]

  const faqs = [
    {
      question: 'Can I upgrade or downgrade my plan anytime?',
      answer: 'Yes! You can change your plan at any time. Changes take effect immediately, and we\'ll prorate any charges.',
    },
    {
      question: 'What happens if I exceed my page view limit?',
      answer: 'We\'ll notify you when you\'re approaching your limit. Your site will continue working, and we\'ll help you upgrade to a suitable plan.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee for all paid plans. No questions asked.',
    },
    {
      question: 'How accurate are the translations?',
      answer: 'Our AI-powered translations achieve 95%+ accuracy for most language pairs. You can always review and customize translations.',
    },
    {
      question: 'Can I use my own translation team?',
      answer: 'Absolutely! You can manually edit translations or upload your own translations in all plans.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees, no hidden charges. What you see is what you pay.',
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
          Simple, Transparent <span className={styles.gradient}>Pricing</span>
        </h1>
        <p className={styles.subtitle}>
          Choose the perfect plan for your business. All plans include a 14-day free trial.
        </p>
      </motion.div>

      <div className={styles.plansContainer}>
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            {plan.popular && (
              <div className={styles.popularBadge}>Most Popular</div>
            )}
            
            <div className={styles.planHeader}>
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.priceContainer}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>/{plan.period}</span>
              </div>
              <p className={styles.planDescription}>{plan.description}</p>
            </div>

            <ul className={styles.featuresList}>
              {plan.features.map((feature, idx) => (
                <li key={idx} className={styles.feature}>
                  <span className={styles.checkmark}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Link 
              href="/contact" 
              className={plan.popular ? styles.ctaPrimary : styles.ctaSecondary}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.section
        className={styles.comparison}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.comparisonTitle}>All Plans Include</h2>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonItem}>
            <span className={styles.comparisonIcon}>🔒</span>
            <h4>SSL & Security</h4>
            <p>Enterprise-grade security for all sites</p>
          </div>
          <div className={styles.comparisonItem}>
            <span className={styles.comparisonIcon}>⚡</span>
            <h4>99.9% Uptime</h4>
            <p>Reliable service with SLA guarantee</p>
          </div>
          <div className={styles.comparisonItem}>
            <span className={styles.comparisonIcon}>🌍</span>
            <h4>Global CDN</h4>
            <p>Fast loading times worldwide</p>
          </div>
          <div className={styles.comparisonItem}>
            <span className={styles.comparisonIcon}>📱</span>
            <h4>Mobile Optimized</h4>
            <p>Perfect experience on all devices</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        className={styles.faq}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={styles.faqItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={styles.faqQuestion}>{faq.question}</h3>
              <p className={styles.faqAnswer}>{faq.answer}</p>
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
        <h2 className={styles.finalCtaTitle}>Still have questions?</h2>
        <p className={styles.finalCtaText}>
          Our team is here to help you find the perfect plan
        </p>
        <Link href="/contact" className={styles.contactButton}>
          Contact Us
        </Link>
      </motion.div>
    </div>
  )
}
