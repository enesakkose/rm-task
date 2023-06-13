import clsx from 'clsx'
import SortBtn from './SortBtn'
import Link from '@/components/UI/Link'
import { useAccountInfoContext } from '@/context/AccountInfoContext'
import { useRowContext } from '@/context/RowContext'
import styles from './Content.module.scss'

function Content() {
  const { data } = useAccountInfoContext()
  const { row } = useRowContext()

  return (
    <table className={styles.table}>
      <tbody className={styles.content}>
        <tr className={styles.headerGroup}>
          <th className={styles.header}>
            <SortBtn sortBy='link' title='Sosyal Medya Linki' />
          </th>
          <th className={styles.header}>
            <SortBtn sortBy='name' title='Sosyal Medya Adı' />
          </th>
          <th className={styles.header}>
            <SortBtn sortBy='description' title='Açıklama' />
          </th>
        </tr>
        {data.reverse().map((accountInfo, index) => (
          <tr
            key={index}
            className={clsx(styles.listItem, index % 2 === 0 ? '' : styles.c)}
          >
            <td className={styles.item}>
              <Link variant='underline' href={accountInfo.link} target='_blank'>
                {accountInfo.link}
              </Link>
            </td>
            <td className={styles.item}>{accountInfo.name}</td>
            <td className={styles.item}>{accountInfo.description}</td>
          </tr>
        ))}
        {Number(row.value) > data.length && Array(Number(row.value) - data.length)
        .fill(null)
        .map((_, index) => (
          <tr
            key={index}
            className={clsx(styles.listItem, (index +  data.length) % 2 === 0 ? '' : styles.c)}
          >
            <td className={styles.item}>
            </td>
            <td className={styles.item}></td>
            <td className={styles.item}></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Content
