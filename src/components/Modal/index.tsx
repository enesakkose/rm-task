import Button from '../UI/Button'
import Input from '../UI/Input'
import { Formik, Form, FormikHelpers } from 'formik'
import { useModalContext } from '@/context/ModalContext'
import { useClickOutside } from '@/utils/hooks/useClickOutside'
import { useAccountInfoContext } from '@/context/AccountInfoContext'
import { createAccountSchema } from '@/utils/helpers/formSchema'
import styles from './Modal.module.scss'

export type CreateAccountObjectType = {
  link: string
  name: string
  description: string
}

function Modal() {
  const { setOpen } = useModalContext()
  const closeHandle = () => setOpen(false)
  const { setSearchData, searchData } = useAccountInfoContext()
  const modalRef = useClickOutside<HTMLDivElement>(closeHandle)
  const onSubmit = (
    values: CreateAccountObjectType,
    { setSubmitting }: FormikHelpers<CreateAccountObjectType>
  ) => {
    let storageData = JSON.parse(localStorage.getItem('accountsInfo') || 'null')

    if (storageData === null) { storageData = [] }
    storageData = [...storageData, values]
    localStorage.setItem('accountsInfo', JSON.stringify(storageData))
    new Promise<void>((resolve) => {
      setTimeout(() => { resolve() }, 2000)
    }).then(() => {
      setSearchData([values, ...searchData])
      setSubmitting(false)
      closeHandle()
    })
  }



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
                autoComplete='off'
                type='text'
                name='link'
                label='Sosyal medya linki'
                placeholder='Sosyal medya linkinizi girin...'
              />
              <Input
                autoComplete='off'
                type='text'
                name='name'
                label='Sosyal medya adı'
                placeholder='Sosyal medya adınızı girin...'
              />
              <Input
                autoComplete='off'
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
