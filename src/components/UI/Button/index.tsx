import React, { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'
import Icon from '@/components/Icon'

type ButtonTypes = {
  children: React.ReactNode
  variant: 'unstyled' | 'primary' | 'secondary' | 'underline'
  icon: string
  size: string | number
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button({
  children,
  variant = 'unstyled',
  icon,
  size,
  className,
  ...props
}: Partial<ButtonTypes>) {
  if (icon)
    return (
      <button
        type='button'
        className={clsx(styles.button, styles[variant], styles.icon, className)}
        {...props}
      >
        <Icon icon={icon} size={size} />
        {children}
      </button>
    )

  return (
    <button
      type='button'
      className={clsx(
        styles.button,
        styles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

/*DESCRIPTION 
- Button component occurs with 'unstyled' | 'primary' | 'outline' | 'underline' | 'icon' variants
- If you want to add new variant to this Button component. Please add to new variant to ButtonTypes and set your style in Button.module.scss file.
- 'size' prop valid only 'icon' variant 
- If this component use in the form, please change type attribute with 'submit'
- Many props can be added according to button's needs.
*/ 