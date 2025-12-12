import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>
              <span className={styles.icon}>🌐</span>
              Multilingual
            </h3>
            <p className={styles.description}>
              Transform your WordPress site into a global platform with AI-powered translations.
            </p>
            <div className={styles.social}>
              <a href="https://twitter.com" className={styles.socialLink} aria-label="Twitter">𝕏</a>
              <a href="https://github.com" className={styles.socialLink} aria-label="GitHub">⚙</a>
              <a href="https://linkedin.com" className={styles.socialLink} aria-label="LinkedIn">in</a>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Product</h4>
            <Link href="/solutions" className={styles.link}>Solutions</Link>
            <Link href="/applications" className={styles.link}>Applications</Link>
            <Link href="/pricing" className={styles.link}>Pricing</Link>
            <Link href="/blog" className={styles.link}>Blog</Link>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Company</h4>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
            <a href="#" className={styles.link}>Careers</a>
            <a href="#" className={styles.link}>Press Kit</a>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Resources</h4>
            <a href="#" className={styles.link}>Documentation</a>
            <a href="#" className={styles.link}>API Reference</a>
            <a href="#" className={styles.link}>Support</a>
            <a href="#" className={styles.link}>Community</a>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Legal</h4>
            <a href="#" className={styles.link}>Privacy Policy</a>
            <a href="#" className={styles.link}>Terms of Service</a>
            <a href="#" className={styles.link}>Cookie Policy</a>
            <a href="#" className={styles.link}>GDPR</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Multilingual. All rights reserved.
          </p>
          <p className={styles.tagline}>
            Made with ❤️ for the global web
          </p>
        </div>
      </div>
    </footer>
  )
}
