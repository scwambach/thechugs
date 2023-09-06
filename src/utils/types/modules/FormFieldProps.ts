import { InputTypes } from '..'

export interface FormFieldProps {
  type: InputTypes
  label: string
  hideLanel?: boolean
  description?: string
  choices?: {
    label: string
    value: string
  }[]
  required?: boolean
  initialValue?: string
  placeholder?: string
  readonly?: boolean
  disabled?: boolean
}
