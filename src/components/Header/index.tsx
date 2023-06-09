import React from 'react'
import Icon from '../Icon'
import BrandLogo from '../BrandLogo'
import MainContainer from '@/containers/MainContainer'
import Navbar from './Navbar'
import MediaLinks from './MediaLinks'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <MainContainer className={styles.headerContainer}>
        <BrandLogo />
        <Navbar />
        <MediaLinks />
      </MainContainer>
    </header>
  )
}

export default Header
