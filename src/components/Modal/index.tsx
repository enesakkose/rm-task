import React from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import { Formik, Form } from 'formik'
import { useModalContext } from '@/context/ModalContext'
import { useClickOutside } from '@/utils/hooks/useClickOutside'
import { createAccountSchema } from '@/utils/helpers/formSchema'
import styles from './Modal.module.scss'

function Modal() {
  const { setOpen } = useModalContext()
  const closeHandle = () => {
    setOpen(false)
  }
  const modalRef = useClickOutside<HTMLDivElement>(closeHandle)
  const onSubmit = () => {}

  return (
    <div className={styles.modalContainer}>
      <div ref={modalRef} className={styles.modal}>
        <header className={styles.header}>
          <Button onClick={closeHandle} className={styles.closeBtn} icon='close' size={20} />
        </header>
        <Formik
          initialValues={{ link: '', name: '', description: '' }}
          validationSchema={createAccountSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <Input
                type='text'
                name='link'
                label='Sosyal medya linki'
                placeholder='Sosyal medya linkinizi girin...'
              />
              <Input
                type='text'
                name='name'
                label='Sosyal medya adı'
                placeholder='Sosyal medya adınızı girin...'
              />
              <Input 
                type='text' 
                name='description' 
                label='Açıklama' 
                placeholder='Açıklamanızı girin...' 
              />
              <div className={styles.actionBtns}>
                <Button onClick={closeHandle} variant='secondary'>
                  Vazgeç
                </Button>
                <Button type='submit' variant='primary' disabled={isSubmitting}>
                  Kaydet
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Modal
