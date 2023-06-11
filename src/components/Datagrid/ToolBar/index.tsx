import React from 'react'
import Search from './Search'
import Button from '@/components/UI/Button'
import { useModalContext } from '@/context/ModalContext'
import styles from './ToolBar.module.scss'

function ToolBar() {
  const { setOpen } = useModalContext()
  return (
    <div className={styles.toolBar}>
      <div className={styles.filterTool}>
        <Search />
        <Button variant='tertiary' icon='filteroutline' size={20}/>
      </div>
      <Button onClick={() => setOpen(true)} variant='primary' icon='plus' size={20}>
        Yeni Hesap Ekle
      </Button>
    </div>
  )
}

export default ToolBar
