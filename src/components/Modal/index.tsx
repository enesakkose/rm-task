import React from 'react'
import Button from '../UI/Button'
import styles from './Modal.module.scss'

function Modal() {
  return (
    <div className={styles.modal}>
      Modal
      <div className={styles.actionBtns}>
        <Button variant='tertiary'>
          Vazgeç
        </Button>
        <Button variant='primary'>
          Kaydet
        </Button>
      </div>
    </div>
  )
}

export default Modal