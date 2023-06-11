import React from 'react'
import clsx from 'clsx'
import Button from '@/components/UI/Button'
import styles from './Content.module.scss'

function Content() {
  return (
    <table className={styles.table}>
      <tbody className={styles.content}>
        <tr className={styles.group}>
          <th className={styles.header}>
            1.başlık
            <Button icon='arrowdown' />
          </th>
          <td className={clsx(styles.item, styles.c)}>İNstagram</td>
          <td className={styles.item}>İNstagram</td>
          <td className={clsx(styles.item, styles.c)}>İNstagram</td>
          <td className={styles.item}>İNstagram</td>
          <td className={clsx(styles.item, styles.c)}>İNstagram</td>
        </tr>
        <tr className={styles.group}>
          <th className={styles.header}>
            2.başlık
            <Button icon='arrowdown' />
          </th>
          <td className={clsx(styles.item, styles.c)}>İNstagram</td>
          <td className={styles.item}>İNstagram</td>
          <td className={clsx(styles.item, styles.c)}>İNstagram</td>
          <td className={styles.item}>İNstagram</td>
          <td className={clsx(styles.item, styles.c)}>İNstagram</td>
        </tr>
        <tr className={styles.group}>
          <th className={styles.header}>
            3.başlık
            <Button icon='arrowup' />
          </th>
          <td className={clsx(styles.item, styles.c)}>İNstagram</td>
          <td className={styles.item}>İNstagram</td>
          <td className={clsx(styles.item, styles.c)}>İNstagram</td>
          <td className={styles.item}>İNstagram</td>
          <td className={clsx(styles.item, styles.c)}>İNstagram</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Content
