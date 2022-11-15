import styles from './Header.module.css'

import logo from '../assets/social-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Social Feed Logo" />
    </header>
  )
}
