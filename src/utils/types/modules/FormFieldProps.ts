import { ChangeEvent } from 'react'
import { InputTypes } from '..'

export interface FormFieldProps {
  _key: string
  choices?: {
    _key: string
    label: string
    value: string
  }[]
  description?: string
  disabled?: boolean
  hideLabel?: boolean
  fieldIndex?: number
  initialValue?: string
  label: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeArea?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onChangeSelect?: (e: ChangeEvent<HTMLSelectElement>) => void
  placeholder?: string
  readOnly?: boolean
  required?: boolean
  type: InputTypes
}
