import { useState } from 'react'
import Icon from '@/components/Icon'
import Button from '@/components/UI/Button'
import { useAccountInfoContext } from '@/context/AccountInfoContext'
import styles from './SortBtn.module.scss'

enum SORT {
  ASC = 'asc',
  DESC = 'desc',
  DEFAULT = 'default',
}

type SortBtnPropsType = {
  title: string
  sortBy: 'link' | 'name' | 'description'
}

function SortBtn({ title, sortBy }: SortBtnPropsType) {
  const { data, setData, currentData } = useAccountInfoContext()
  const [sort, setSort] = useState<'asc' | 'desc' | 'default'>('default')
  const handleClick = () => {
    if (sort === SORT.DEFAULT) {
      setData([...data].sort((a, b) => a[sortBy].localeCompare(b[sortBy])))
      setSort(SORT.ASC)
    } else if (sort === SORT.ASC) {
      setData([...data].sort((a, b) => b[sortBy].localeCompare(a[sortBy])))
      setSort(SORT.DESC)
    } else {
      setData(currentData)// for sorting visible data
      setSort(SORT.DEFAULT)
    }
  }

  return (
    <Button onClick={handleClick} className={styles.sortBtn}>
      {title}
      {sort !== SORT.DEFAULT && (
        <Icon
          className={styles.icon}
          icon={sort === SORT.ASC ? 'arrowup' : sort === SORT.DESC ? 'arrowdown' : ''}
        />
      )}
    </Button>
  )
}

export default SortBtn

/*DESCRIPTION
- This component sort account info datas by three type 'asc', 'desc, 'default'
- defaultArray added to useAccountInfoContext() for show undordered data list
- sortBy prop is added to specify which data element to sort by. (for example, when sortBy = 'link', data will be sort by link key in data object. Data shape: {link: 'example.com',   name: 'example', description: 'example'})
*/
