import React from 'react'
import clsx from 'clsx'
import styles from './MainContainer.module.scss'

type MainContainerPropType = {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
}

function MainContainer({ as: Component = 'div', children, className }: MainContainerPropType) {
  return (
    <Component className={clsx(styles.mainContainer, className)}>
      {children}
    </Component>
  )
}

export default MainContainer