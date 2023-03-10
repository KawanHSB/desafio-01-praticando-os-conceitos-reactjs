import styles from './styles.module.scss'
import Logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="" />
    </header>
  )
}
