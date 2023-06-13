import { useState } from 'react'
import Search from './Search'
import Button from '@/components/UI/Button'
import { useModalContext } from '@/context/ModalContext'
import { useAccountInfoContext } from '@/context/AccountInfoContext'
import styles from './ToolBar.module.scss'

function ToolBar() {
  const [sort, setSort] = useState(false)
  const { data, setData, currentData } = useAccountInfoContext()
  const { setOpen } = useModalContext()
  const handleSort = () => {
    setSort((prev) => !prev)
    const sortedData = sort ? currentData : [...data].sort((a, b) => a.name.localeCompare(b.name))
    setData(sortedData);
  }

  return (
    <div className={styles.toolBar}>
      <div className={styles.filterTool}>
        <Search />
        <Button
          onClick={handleSort}
          variant='tertiary'
          icon={sort ? 'filter' : 'filteroutline'}
          size={20}
        />
      </div>
      <Button onClick={() => setOpen(true)} variant='primary' icon='plus' size={20}>
        Yeni Hesap Ekle
      </Button>
    </div>
  )
}

export default ToolBar

/*DESCRIPTION
- handleSort only sort to data by data.name
*/
