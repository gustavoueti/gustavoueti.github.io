import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {new Date().getFullYear()} Gustavo Ueti — built with React &amp; Vite</p>
      </div>
    </footer>
  )
}
