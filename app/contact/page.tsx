'use client'

import { motion } from 'framer-motion'
import styles from './page.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>
          Get in <span className={styles.gradient}>Touch</span>
        </h1>
        <p className={styles.subtitle}>
          We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
        </p>
      </motion.div>

      <div className={styles.content}>
        <motion.div
          className={styles.contactInfo}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className={styles.infoTitle}>Contact Information</h2>
          <p className={styles.infoText}>
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          <div className={styles.infoItems}>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📧</div>
              <div>
                <h3 className={styles.infoItemTitle}>Email</h3>
                <p className={styles.infoItemText}>support@multilingual.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>💬</div>
              <div>
                <h3 className={styles.infoItemTitle}>Live Chat</h3>
                <p className={styles.infoItemText}>Available 24/7</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div>
                <h3 className={styles.infoItemTitle}>Office</h3>
                <p className={styles.infoItemText}>San Francisco, CA</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🌐</div>
              <div>
                <h3 className={styles.infoItemTitle}>Social</h3>
                <div className={styles.socialLinks}>
                  <a href="#" className={styles.socialLink}>Twitter</a>
                  <a href="#" className={styles.socialLink}>LinkedIn</a>
                  <a href="#" className={styles.socialLink}>GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          className={styles.form}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.label}>First Name</label>
              <input
                type="text"
                id="firstName"
                className={styles.input}
                placeholder="John"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.label}>Last Name</label>
              <input
                type="text"
                id="lastName"
                className={styles.input}
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="john@example.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="company" className={styles.label}>Company (Optional)</label>
            <input
              type="text"
              id="company"
              className={styles.input}
              placeholder="Your company name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.label}>Subject</label>
            <select id="subject" className={styles.select} required>
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="sales">Sales Question</option>
              <option value="support">Technical Support</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              className={styles.textarea}
              rows={6}
              placeholder="Tell us how we can help you..."
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </motion.form>
      </div>

      <motion.section
        className={styles.faq}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.faqTitle}>Quick Answers</h2>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>How quickly will I get a response?</h3>
            <p className={styles.faqAnswer}>
              We typically respond within 24 hours during business days. For urgent matters, 
              use our live chat for instant support.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Do you offer phone support?</h3>
            <p className={styles.faqAnswer}>
              Yes! Enterprise customers get dedicated phone support. Contact sales for details.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Can I schedule a demo?</h3>
            <p className={styles.faqAnswer}>
              Absolutely! Select &quot;Sales Question&quot; in the form and mention demo in your message.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>Where is your team located?</h3>
            <p className={styles.faqAnswer}>
              We&apos;re a global team with headquarters in San Francisco and team members worldwide.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
