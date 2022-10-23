import * as Yup from 'yup'
import { setLocale } from 'yup'

setLocale({
  mixed: {
    required: 'required.',
  },
  string: {
    max: '${path} must be at least ${max} characters',
    email: '${path} must be a valid email'
  }
})

export const yup = Yup