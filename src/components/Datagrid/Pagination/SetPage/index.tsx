import { useState, useEffect } from 'react'
import Button from '@/components/UI/Button'
import { useAccountInfoContext } from '@/context/AccountInfoContext'
import { useRowContext } from '@/context/RowContext'
import styles from './SetPage.module.scss'

function SetPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const { row } = useRowContext()
  const { setData, setCurrentData, searchData, data } = useAccountInfoContext()
  const totalPage = Math.ceil((searchData.length) / Number(row.value))
  
  useEffect(() => {
    setCurrentPage(1)
    setData(searchData.slice(0, Number(row.value)))
    setCurrentData(searchData.slice(0, Number(row.value)))
  }, [row.value, searchData])

  const handleNextPage = () => {
    const nextPage = currentPage + 1
    const startIndex = (nextPage - 1) * Number(row.value)
    const endIndex = startIndex + Number(row.value)
    setData(searchData.slice(startIndex, endIndex))
    setCurrentData(searchData.slice(startIndex, endIndex))
    setCurrentPage(nextPage)
  }

  const handlePrevPage = () => {
    const prevPage = currentPage - 1
    const startIndex = (prevPage - 1) * Number(row.value)
    const endIndex = startIndex + Number(row.value)
    setData(searchData.slice(startIndex, endIndex))
    setCurrentData(searchData.slice(startIndex, endIndex))
    setCurrentPage(prevPage)
  }
  return (
    <div className={styles.setPage}>
      <Button onClick={handlePrevPage} disabled={currentPage === 1} icon='leftChevron' size={12} />
      <div className={styles.currentPage}>{currentPage}</div>
      <span>of</span>
      <span className={styles.lastPage}>{totalPage}</span>
      <Button
        onClick={handleNextPage}
        disabled={currentPage === totalPage}
        icon='rightChevron'
        size={12}
      />
    </div>
  )
}

export default SetPage

