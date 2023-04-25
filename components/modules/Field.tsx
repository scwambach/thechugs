import { slugify } from '@utils/slugify'
import { GoPrimitiveDot } from '@meronex/icons/go'
import { FaCheck } from '@meronex/icons/fa'

interface FieldProps {
  choices?: {
    _key: string
    copy: string
    value?: string
  }[]
  description?: string
  disabled?: boolean
  _key?: string
  label: string
  placeholder?: string
  readOnly?: boolean
  required?: boolean
  type?:
    | 'checkbox'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'hidden'
    | 'month'
    | 'number'
    | 'radio'
    | 'select'
    | 'tel'
    | 'text'
    | 'textarea'
    | 'time'
    | 'url'
    | 'week'
}

const Label = ({
  label,
  description,
}: {
  label: string
  description?: string
}) => {
  return (
    <>
      <span>{label}</span>
      {description && <p>{description}</p>}
    </>
  )
}

const Field = ({
  choices,
  description,
  disabled,
  _key,
  label,
  placeholder,
  readOnly,
  required,
  type,
}: FieldProps) => {
  const fieldId = `${label ? slugify(label) : 'input'}_${_key}`
  const fieldArgs = {
    name: fieldId,
    id: fieldId,
    disabled,
    required,
    readOnly,
    placeholder,
  }
  return (
    <>
      {type === 'textarea' ? (
        <label className={`form-field ${type}`} htmlFor={fieldId}>
          <Label label={label} description={description} />
          <textarea {...fieldArgs} rows={4} />
        </label>
      ) : type === 'select' ? (
        <label className={`form-field ${type}`}>
          <Label label={label} description={description} />
          <select {...fieldArgs}>
            <option></option>
            {choices?.map((choice) => (
              <option key={choice._key} value={choice.value}>
                {choice.copy}
              </option>
            ))}
          </select>
        </label>
      ) : type === 'checkbox' || type === 'radio' ? (
        <div className={`form-field ${type}`}>
          <Label label={label} description={description} />
          <div className="choices">
            {choices?.map((choice) => (
              <label
                key={choice._key}
                htmlFor={`${slugify(choice.copy)}_${choice._key}`}
              >
                <span>{choice.copy}</span>
                <input
                  type={type}
                  id={`${slugify(choice.copy)}_${choice._key}`}
                  name={fieldId}
                />
                <div className={`${type}-indicator`}>
                  {type === 'radio' && <GoPrimitiveDot size={15} />}
                  {type === 'checkbox' && <FaCheck size={12} />}
                </div>
              </label>
            ))}
          </div>
        </div>
      ) : (
        <label htmlFor={fieldId} className={`form-field ${type}`}>
          <Label label={label} description={description} />
          <input {...fieldArgs} type={type} />
        </label>
      )}
    </>
  )
}

export { Field }
