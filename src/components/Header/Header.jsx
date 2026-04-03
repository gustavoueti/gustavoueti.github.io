import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { VscGithubInverted } from "react-icons/vsc"
import { TbBrandLinkedinFilled } from "react-icons/tb"
import TextField from "@mui/material/TextField"
import InputAdornment from "@mui/material/InputAdornment"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import List from "../List/List"

export default function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [menuAnchor, setMenuAnchor] = useState(null)
  const searchRef = useRef(null)

  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        searchRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const themeIcon = {
    dark: <DarkModeIcon fontSize="small" />,
    light: <LightModeIcon fontSize="small" />,
    system: <SettingsBrightnessIcon fontSize="small" />,
  }

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
              <div className="search" style={{ width: '220px', position: 'relative' }}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  inputRef={searchRef}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <span style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2px',
                            marginLeft: '25%',
                            fontSize: '0.6rem',
                            color: 'var(--color-text-muted)',
                            border: '1px solid var(--color-border)',
                            borderRadius: '4px',
                            padding: '2px 5px',
                            whiteSpace: 'nowrap',
                            lineHeight: 1.2,
                          }}>
                            {navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'} K
                          </span>
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'var(--color-text)',
                      height: '27px',
                      fontSize: '0.875rem',
                      '& fieldset': {
                        borderColor: 'var(--color-border)',
                        borderWidth: '1.5px',
                      },
                      '&:hover fieldset': {
                        borderColor: 'var(--color-text-muted)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'var(--color-accent)',
                      },
                    },
                    '& input::placeholder': {
                      color: 'var(--color-text-muted)',
                      opacity: 1,
                    },
                  }}
                />
                <List query={query} onSelect={() => setQuery('')} />
              </div>
            </li>

            <li>
              <a href="https://github.com/gustavoueti" target="_blank" rel="noopener noreferrer">
                <VscGithubInverted size={18} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/gustavoueti" target="_blank" rel="noopener noreferrer">
                <TbBrandLinkedinFilled size={20} />
              </a>
            </li>
            <li>
              <Link to="/" onClick={() => setOpen(false)}>Posts</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            </li>
            <li>
              <button
                className={styles.themeBtn}
                onClick={(e) => setMenuAnchor(e.currentTarget)}
                aria-label="Theme"
              >
                {themeIcon[theme]}
              </button>
              <Menu
                anchorEl={menuAnchor}
                open={Boolean(menuAnchor)}
                onClose={() => setMenuAnchor(null)}
                slotProps={{
                  paper: {
                    sx: {
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-text)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                      minWidth: '140px',
                    },
                  },
                }}
              >
                {[
                  { value: 'dark', label: 'Dark', icon: <DarkModeIcon fontSize="small" /> },
                  { value: 'light', label: 'Light', icon: <LightModeIcon fontSize="small" /> },
                  { value: 'system', label: 'System', icon: <SettingsBrightnessIcon fontSize="small" /> },
                ].map(({ value, label, icon }) => (
                  <MenuItem
                    key={value}
                    selected={theme === value}
                    onClick={() => { setTheme(value); setMenuAnchor(null) }}
                    sx={{
                      gap: '8px',
                      fontSize: '0.875rem',
                      color: 'var(--color-text)',
                      '&.Mui-selected': {
                        background: 'var(--color-accent-dim)',
                        color: 'var(--color-accent)',
                      },
                      '&:hover': {
                        background: 'var(--color-surface-2)',
                      },
                    }}
                  >
                    {icon} {label}
                  </MenuItem>
                ))}
              </Menu>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
