import { yup } from '../yupInit'

export const contactInitialValue = {
  name: '',
  email: '',
  content: ''
}

export const contactSchema = yup.object().shape({
  name: yup.string().max(10).required(),
  email: yup.string().email().required(),
  content: yup.string().max(1000).required()
})
