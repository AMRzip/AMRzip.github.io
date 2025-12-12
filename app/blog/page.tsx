'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './page.module.css'

export default function Blog() {
  const featuredPost = {
    title: 'The Complete Guide to Website Internationalization in 2024',
    excerpt: 'Learn everything you need to know about making your website accessible to global audiences.',
    category: 'Guide',
    readTime: '12 min read',
    date: 'Dec 10, 2024',
    image: '📚',
  }

  const posts = [
    {
      title: '10 Best Practices for Multilingual SEO',
      excerpt: 'Optimize your multilingual website for search engines and reach more customers.',
      category: 'SEO',
      readTime: '8 min read',
      date: 'Dec 8, 2024',
      image: '🔍',
    },
    {
      title: 'How AI Translation is Transforming E-Commerce',
      excerpt: 'Discover how AI-powered translation can boost your e-commerce sales.',
      category: 'Technology',
      readTime: '6 min read',
      date: 'Dec 5, 2024',
      image: '🤖',
    },
    {
      title: 'Case Study: 300% Revenue Growth with Multilingual Sites',
      excerpt: 'Learn how one company tripled their revenue by going multilingual.',
      category: 'Case Study',
      readTime: '10 min read',
      date: 'Dec 3, 2024',
      image: '📈',
    },
    {
      title: 'Choosing the Right Languages for Your Website',
      excerpt: 'A data-driven approach to selecting languages for translation.',
      category: 'Strategy',
      readTime: '7 min read',
      date: 'Nov 28, 2024',
      image: '🌍',
    },
    {
      title: 'Technical SEO for Multilingual WordPress Sites',
      excerpt: 'Master the technical aspects of multilingual SEO implementation.',
      category: 'Technical',
      readTime: '15 min read',
      date: 'Nov 25, 2024',
      image: '⚙️',
    },
    {
      title: 'The Future of Website Translation: Trends for 2025',
      excerpt: 'Stay ahead of the curve with these emerging translation trends.',
      category: 'Trends',
      readTime: '9 min read',
      date: 'Nov 20, 2024',
      image: '🚀',
    },
  ]

  const categories = ['All', 'Guide', 'SEO', 'Technology', 'Case Study', 'Strategy', 'Technical', 'Trends']

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>
          Blog & <span className={styles.gradient}>Resources</span>
        </h1>
        <p className={styles.subtitle}>
          Insights, guides, and best practices for multilingual websites
        </p>
      </motion.div>

      <div className={styles.categories}>
        {categories.map((category, index) => (
          <button key={index} className={styles.categoryButton}>
            {category}
          </button>
        ))}
      </div>

      <motion.div
        className={styles.featured}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className={styles.featuredImage}>{featuredPost.image}</div>
        <div className={styles.featuredContent}>
          <div className={styles.featuredMeta}>
            <span className={styles.category}>{featuredPost.category}</span>
            <span className={styles.dot}>•</span>
            <span className={styles.readTime}>{featuredPost.readTime}</span>
            <span className={styles.dot}>•</span>
            <span className={styles.date}>{featuredPost.date}</span>
          </div>
          <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
          <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
          <Link href="#" className={styles.readMore}>
            Read Full Article →
          </Link>
        </div>
      </motion.div>

      <div className={styles.postsGrid}>
        {posts.map((post, index) => (
          <motion.article
            key={index}
            className={styles.postCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.postImage}>{post.image}</div>
            <div className={styles.postContent}>
              <div className={styles.postMeta}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.dot}>•</span>
                <span className={styles.readTime}>{post.readTime}</span>
              </div>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              <div className={styles.postFooter}>
                <span className={styles.date}>{post.date}</span>
                <Link href="#" className={styles.postLink}>
                  Read more →
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className={styles.newsletter}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.newsletterTitle}>Stay Updated</h2>
        <p className={styles.newsletterText}>
          Get the latest insights on website translation and internationalization
        </p>
        <form className={styles.newsletterForm}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className={styles.emailInput}
          />
          <button type="submit" className={styles.subscribeButton}>
            Subscribe
          </button>
        </form>
      </motion.div>
    </div>
  )
}
