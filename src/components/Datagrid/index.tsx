import React from 'react'
import Button from '../UI/Button'
import ToolBar from './ToolBar'
import styles from './Datagrid.module.scss'

function Datagrid() {
  return (
    <main className={styles.datagrid}>
      <ToolBar/>
    </main>
  )
}

export default Datagrid