export const form = `_type == 'form' => {
  title,
  recipients,
  description,
  beforeSubmit,
  thankYouMessage,
  errorMessage,
  formFields[] {
    _key,
    type,
    label,
    description,
    placeholder,
    hideLabel,
    required,
    readOnly,
    initialValue,
    choices[] {
      _type,
      _key,
      label,
      value
    }
  }
}`
