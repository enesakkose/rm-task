import React from 'react'
import Button from '@/components/UI/Button'
import Input from '@/components/UI/Input'
import { Formik, Form, FormikHelpers } from 'formik'
import { useAccountInfoContext } from '@/context/AccountInfoContext'
import styles from './Search.module.scss'

function Search() {
  const { setData, defaultArray, setCurrentData } = useAccountInfoContext()

  const filterData = (query: string) => {
    const filteredData = defaultArray.filter(
      (item) =>
        item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        item.description.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        item.link.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    setData(filteredData)
    setCurrentData(filteredData)
  }

  const onSubmit = (
    values: { query: string },
    { setSubmitting }: FormikHelpers<{ query: string }>
  ) => {
    new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    }).then(() => {
      filterData(values.query)
      setSubmitting(false)
    })
  }

  return (
    <Formik initialValues={{ query: '' }} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <Input autoComplete='off' type='text' placeholder='Search Objects...' name='query' />
          <Button
            disabled={isSubmitting}
            type='submit'
            variant='primary'
            icon='s'
            size={20}
            className={styles.searchBtn}
          />
        </Form>
      )}
    </Formik>
  )
}

export default Search

/*DESCRIPTION
- This search input filtered data from localStorage
- filteredData() function filtered by query parameter and then update to setData state
- Formik used for search input
- Fake promise used for loading state in onSubmit function
- The search implementation usually works more efficiently with the api endpoint
- To run the search implementation: Enter query in search input then click search button or enter keyword on your keyboard
*/