import Row from './Row'
import SetPage from './SetPage'
import styles from './Pagination.module.scss'

function Pagination() {
  return (
    <div className={styles.pagination}>
      <Row/>
      <SetPage/>
    </div>
  )
}

export default Pagination