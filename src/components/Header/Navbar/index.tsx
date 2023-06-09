import React from 'react'
import styles from './Navbar.module.scss'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span>Hakkımızda</span>
      <span>Jüri-Yarışma Yazılımı</span>
      <span>Word Ninja</span>
      <span>World Pyramids</span>
    </nav>
  )
}

export default Navbar