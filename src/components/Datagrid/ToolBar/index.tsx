import React from 'react'
import Search from './Search'
import Button from '@/components/UI/Button'
import styles from './ToolBar.module.scss'

function ToolBar() {
  return (
    <div className={styles.toolBar}>
      <Search/>
    </div>
  )
}

export default ToolBar