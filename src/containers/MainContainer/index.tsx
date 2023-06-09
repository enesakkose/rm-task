import React from 'react'
import clsx from 'clsx'
import styles from './MainContainer.module.scss'

type MainContainerPropType = {
  children: React.ReactNode
  className?: string
}

function MainContainer({ children, className }: MainContainerPropType) {
  return (
    <div className={clsx(styles.mainContainer, className)}>
      {children}
    </div>
  )
}

export default MainContainer