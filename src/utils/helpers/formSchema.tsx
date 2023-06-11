import * as yup from 'yup'

export const createAccountSchema = yup.object().shape({
  link: yup
    .string()
    .url('Please enter valid url')
    .required("Please enter your social media link"),
  name: yup
    .string()
    .required("Please enter your social media name"),  
  description: yup
    .string()
    .optional()
})