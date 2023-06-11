import React from 'react'
import Button from '@/components/UI/Button'
import styles from './SetPage.module.scss'

function SetPage() {
  return (
    <div className={styles.setPage}>
      <Button icon='leftChevron' size={12} />
      <div className={styles.currentPage}>1</div>
      <span>of</span>
      <span className={styles.lastPage}>4</span>
      <Button icon='rightChevron' size={12} />
    </div>
  )
}

export default SetPage
//LAST YOKSA $SECONDARY-100