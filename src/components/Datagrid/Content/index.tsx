import React from 'react'
import clsx from 'clsx'
import Button from '@/components/UI/Button'
import { MOCK } from '@/utils/helpers/mock'
import Link from '@/components/UI/Link'
import { useAccountInfoContext } from '@/context/AccountInfoContext'
import styles from './Content.module.scss'

function Content() {
  const { data } = useAccountInfoContext()

  return (
    <table className={styles.table}>
      <tbody className={styles.content}>
        <tr className={styles.headerGroup}>
          <th className={styles.header}>
            Sosyal Medya Linki
            <Button icon='arrowdown' />
          </th>
          <th className={styles.header}>
            Sosyal Medya Adı
            <Button icon='arrowdown' />
          </th>
          <th className={styles.header}>
            Açıklama
            <Button icon='arrowup' />
          </th>
        </tr>
          {data.map((accountInfo, index) => (
            <tr key={accountInfo.description} className={clsx(styles.listItem, index % 2 === 0 ? '' : styles.c)}>
            <td className={styles.item}>
              <Link variant='underline' href={accountInfo.link} target='_blank'>
                {accountInfo.link}
              </Link>
            </td>
            <td className={styles.item}>{accountInfo.name}</td>
            <td className={styles.item}>{accountInfo.description}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default Content
