import React from 'react'
import Button from '@/components/UI/Button'
import styles from './Search.module.scss'

function Search() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder='Search Objects...' />
      <Button variant='primary' icon='search' size={20} className={styles.searchBtn}/>
    </div>
  )
}

export default Search