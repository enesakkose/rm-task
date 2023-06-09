import React from 'react'

type LinkPropsType = {
  href: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>

function Link({ href, children, ...props }: LinkPropsType) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}

export default Link