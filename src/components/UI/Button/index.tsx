import React, { ButtonHTMLAttributes, forwardRef } from 'react'
import clsx from 'clsx'
import styles from './Button.module.scss'
import Icon from '@/components/Icon'

export type ButtonTypes = {
  children: React.ReactNode
  variant: 'unstyled' | 'primary' | 'secondary' | 'tertiary' | 'outline' | 'underline'
  icon: string
  size: string | number
} & ButtonHTMLAttributes<HTMLButtonElement>

function Button(
  { children, variant = 'unstyled', icon, size, className, ...props }: Partial<ButtonTypes>,
  ref: React.Ref<HTMLButtonElement>
) {
  if (icon)
    return (
      <button
        ref={ref}
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
      ref={ref}
      type='button'
      className={clsx(styles.button, styles[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default forwardRef(Button)

/*DESCRIPTION 
- Button component occurs with 'unstyled' | 'primary' | 'outline' | 'underline' | 'icon' variants
- If you want to add new variant to this Button component. Please add to new variant to ButtonTypes and set your style in Button.module.scss file.
- 'size' prop valid only 'icon' variant 
- If this component use in the form, please change type attribute with 'submit'
- Many props can be added according to button's needs.
*/
