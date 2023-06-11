import React from 'react'
import Search from './Search'
import Button from '@/components/UI/Button'
import styles from './ToolBar.module.scss'

function ToolBar() {
  return (
    <div className={styles.toolBar}>
      <div className={styles.filterTool}>
        <Search />
        <Button variant='tertiary' icon='filteroutline' size={20}/>
      </div>
      <Button variant='primary' icon='plus' size={20}>
        Yeni Hesap Ekle
      </Button>
    </div>
  )
}

export default ToolBar
