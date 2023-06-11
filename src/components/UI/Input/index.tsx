import React from 'react'
import { useField } from 'formik'
import styles from './Input.module.scss'

type InputPropsType = {
  label?: string
  name: string
} & React.InputHTMLAttributes<HTMLInputElement>

function Input({ label, name, ...props }: InputPropsType) {
  const [ field, meta ] = useField(name)
  return (
    <label className={styles.formInput}>
      <span className={styles.label}>{label}</span>
      <input {...field} {...props} />
      {meta.touched && meta.error && <span className={styles.errorText}>{meta.error}</span>}
    </label>
  )
}

export default Input
