import SEO from '../../components/SEO/SEO.jsx'
import capybara from '../../assets/capybara.png'
import styles from './About.module.css'

export default function About() {
  return (
    <div className="container">
      <SEO
        title="About"
        description="Hey, I'm Ueti — a data engineer with 5+ years of experience writing about pipelines, data, and the things he picks up along the way."
        url="/about"
      />
      <div className={styles.page}>
        <div className={styles.hero}>
          <img src={capybara} alt="Capybara mascot" className={styles.mascot} loading="lazy" />
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
      </div>
    </div>
  )
}
