import React, { useState } from 'react'
import Button from '../UI/Button'
import ToolBar from './ToolBar'
import MainContainer from '@/containers/MainContainer'
import Pagination from './Pagination'
import Content from './Content'
import styles from './Datagrid.module.scss'

function Datagrid() {
  return (
    <MainContainer as='main' className={styles.datagrid}>
      <ToolBar/>
      <Content/>
      <Pagination/>
    </MainContainer>
  )
}

export default Datagrid