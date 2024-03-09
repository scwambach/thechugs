import { slugify } from '@utils/slugify'
import { FormFieldProps } from '@utils/types/modules/FormFieldProps'
import { AiFillCaretDown } from 'react-icons/ai'
import { FaCheck } from 'react-icons/fa'
import { GoDotFill } from 'react-icons/go'

export const FormField = ({
  _key,
  choices,
  description,
  disabled,
  hideLabel,
  fieldIndex,
  initialValue,
  label,
  onChange,
  onChangeArea,
  onChangeSelect,
  placeholder,
  readOnly,
  required,
  type,
}: FormFieldProps) => {
  const fieldId = `${label ? slugify(label) : 'input'}_${_key}`
  return (
    <div className="formField">
      <>
        {type === 'textarea' ? (
          <label className={type} htmlFor={fieldId}>
            {label && (
              <span className={`labelTag${hideLabel ? ' hidden' : ''}`}>
                {label}
                {required && <span className="required">*</span>}
              </span>
            )}
            {description && <p className="description">{description}</p>}
            <textarea
              name={fieldId}
              id={fieldId}
              rows={4}
              className="fieldInput"
              disabled={disabled}
              readOnly={readOnly}
              required={required}
              onChange={onChangeArea}
              placeholder={
                hideLabel && required
                  ? `${placeholder || label} (required)`
                  : placeholder
              }
              defaultValue={initialValue}
            />
          </label>
        ) : type === 'select' ? (
          <label className={type} htmlFor={fieldId}>
            {label && (
              <span className={`labelTag${hideLabel ? ' hidden' : ''}`}>
                {label}
                {required && <span className="required">*</span>}
              </span>
            )}
            <AiFillCaretDown />
            {description && <p className="description">{description}</p>}
            <select name={fieldId} onChange={onChangeSelect} id={fieldId}>
              {placeholder && (
                <option value="">
                  -{' '}
                  {hideLabel && required
                    ? `${placeholder || label} (required)`
                    : placeholder}{' '}
                  -
                </option>
              )}
              {choices?.map((option) => (
                <option key={option._key} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        ) : type === 'checkbox' || type === 'radio' ? (
          <div className={type}>
            {label && (
              <p className={`labelTag${hideLabel ? ' hidden' : ''}`}>
                {label}
                {required && <span className="required">*</span>}
              </p>
            )}
            {description && <p className="description">{description}</p>}
            <div className="choices">
              {choices?.map(
                (choice) =>
                  choice.label && (
                    <label
                      key={choice._key}
                      htmlFor={`${slugify(choice.label)}_${
                        choice._key
                      }-${fieldIndex}`}
                    >
                      <input
                        type={type}
                        id={`${slugify(choice.label)}_${
                          choice._key
                        }-${fieldIndex}`}
                        name={fieldId}
                        onChange={onChange}
                        value={choice.value}
                      />
                      <div className={`${type}-indicator`}>
                        {type === 'radio' && <GoDotFill size={15} />}
                        {type === 'checkbox' && <FaCheck size={12} />}
                      </div>
                      <span>{choice.label}</span>
                    </label>
                  )
              )}
            </div>
          </div>
        ) : (
          <label className={type} htmlFor={fieldId}>
            {label && (
              <span className={`labelTag${hideLabel ? ' hidden' : ''}`}>
                {label}
                {required && <span className="required">*</span>}
              </span>
            )}
            {description && <p className="description">{description}</p>}
            <input
              name={fieldId}
              id={fieldId}
              className="fieldInput"
              type={type}
              disabled={disabled}
              onChange={onChange}
              readOnly={readOnly}
              required={required}
              placeholder={
                hideLabel && required
                  ? `${placeholder || label} (required)`
                  : placeholder
              }
              defaultValue={initialValue}
            />
          </label>
        )}
      </>
    </div>
  )
}
