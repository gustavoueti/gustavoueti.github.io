import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoDot} />
          uetistack.dev
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={`${styles.bar} ${open ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barMid : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barBot : ''}`} />
        </button>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li>
              <Link to="/" onClick={() => setOpen(false)}>Posts</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
