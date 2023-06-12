import React, { useState } from 'react'
import Icon from '../Icon'
import BrandLogo from '../BrandLogo'
import MainContainer from '@/containers/MainContainer'
import Navbar from './Navbar'
import MediaLinks from './MediaLinks'
import Button from '../UI/Button'
import { useGetBreakPoint } from '@/utils/hooks/useGetBreakPoint'
import styles from './Header.module.scss'

function Header() {
  const SM = useGetBreakPoint('SM')
  const MobileHeader = () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen((prev) => !prev)} icon='hm' size={20} />
        {open && (
          <div className={styles.mobileMenu}>
            <Button onClick={() => setOpen(false)} icon='close' size={24} />
            <Navbar />
            <MediaLinks />
          </div>
        )}
      </>
    )
  }

  const MainHeader = () => {
    return (
      <>
        <Navbar />
        <MediaLinks />
      </>
    )
  }

  return (
    <header className={styles.header}>
      <MainContainer className={styles.headerContainer}>
        <BrandLogo />
        {SM ? <MobileHeader /> : <MainHeader />}
      </MainContainer>
    </header>
  )
}

export default Header
