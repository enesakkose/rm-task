import React from 'react'
import Icon from '@/components/Icon'
import {
  DropdownRoot,
  DropdownContainer,
  DropdownTrigger,
  DropdownList,
  DropdownItem,
} from '@/components/Dropdown'
import { useRowContext } from '@/context/RowContext'
import { useAccountInfoContext } from '@/context/AccountInfoContext'
import { type RowType } from '@/context/RowContext'
import styles from './Row.module.scss'

function Row() {
  const { row, setRow } = useRowContext()
  const { setData } = useAccountInfoContext()
  const SelectRows: RowType[] = [
    { value: '4', piece: '4 rows' },
    { value: '8', piece: '8 rows' },
    { value: '12', piece: '12 rows' },
    { value: '20', piece: '20 rows' },
  ]

  return (
    <div className={styles.row}>
      <span className={styles.showText}>Show:</span>
      <DropdownRoot>
        <DropdownContainer className={styles.selectRowDropdown}>
          <DropdownTrigger variant='outline' className={styles.setRow}>
            <span className={styles.rowInfo}>{row.piece}</span>
            <div className={styles.icon}>
              <Icon icon='uparrowd' size={10} />
              <Icon icon='downarrowd' size={10} />
            </div>
          </DropdownTrigger>
          <DropdownList className={styles.selectRows}>
            {SelectRows.map((select) => (
              <DropdownItem
                onClick={() => setRow(select)}
                className={styles.select}
                key={select.value}
              >
                {select.piece}
              </DropdownItem>
            ))}
          </DropdownList>
        </DropdownContainer>
      </DropdownRoot>
    </div>
  )
}

export default Row
