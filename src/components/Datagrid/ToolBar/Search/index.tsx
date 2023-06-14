import React, { useState } from 'react'
import Button from '@/components/UI/Button'
import { useAccountInfoContext } from '@/context/AccountInfoContext'
import styles from './Search.module.scss'

function Search() {
  const { defaultArray, setCurrentData, setSearchData } = useAccountInfoContext()
  const [query, setQuery] = useState('')

  const filterData = (query: string) => {
    const filteredData = defaultArray.filter(
      (item) =>
        item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        item.description.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        item.link.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    setCurrentData(filteredData)
    setSearchData(filteredData)
  }

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    filterData(e.target.value)
  }

  return (
    <div className={styles.form}>
      <input
        autoComplete='off'
        type='text'
        value={query}
        placeholder='Search Objects...'
        name='query'
        onChange={handleQuery}
      />
      <Button type='submit' variant='primary' icon='s' size={20} className={styles.searchBtn} />
    </div>
  )
}

export default Search

/*DESCRIPTION
- This search input filtered data from localStorage
- filteredData() function filtered by query parameter and then update to setCurrenData and setSearchData states
- To run the search implementation: Enter query in search input
*/
