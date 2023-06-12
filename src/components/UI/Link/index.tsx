import React from 'react'
import clsx from 'clsx'
import styles from './Link.module.scss'

type LinkPropsType = {
  href: string;
  children: React.ReactNode;
  variant?: 'unstyled' | 'underline'
  className?: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

function Link({ href, children, variant = 'unstyled', className, ...props }: LinkPropsType) {
  return (
    <a href={href} className={clsx(styles.link, styles[variant], className)} {...props}>
      {children}
    </a>
  )
}

export default Link