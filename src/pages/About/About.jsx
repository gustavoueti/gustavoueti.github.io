import capybara from '../../assets/capybara.png'
import styles from './About.module.css'

export default function About() {
  return (
    <div className="container">
      <div className={styles.page}>
        <div className={styles.hero}>
          <img src={capybara} alt="Capybara mascot" className={styles.mascot} />
          <div>
            <h1>Hey, I'm Ueti</h1>
            <p className={styles.tagline}>Data Engineer · Powered by coffee</p>
          </div>
        </div>

        <p>
          After 5+ years working with data, I figured it was time to stop letting my learnings
          disappear into Slack threads and notebook cells. So I built this — a place to document
          (and share) the things I pick up day to day.
        </p>

        <p>
          No grand editorial plan. No posting schedule. Just voices from my head.
        </p>

        <div className={styles.links}>
          <a href="https://github.com/gustavoueti" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/gustavoueti" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}
