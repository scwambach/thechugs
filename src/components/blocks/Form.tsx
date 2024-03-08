'use client'
import { Container } from '@components/modules/Container'
import { FormField } from '@components/modules/FormField'
import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import { PageBlockProps } from '@utils/types'
import { FormFieldProps } from '@utils/types/modules/FormFieldProps'
import { useState } from 'react'

interface FormProps extends PageBlockProps {
  _key: string
  beforeSubmit?: PortableTextBlock[]
  description?: PortableTextBlock[]
  errorMessage: string
  formFields: FormFieldProps[]
  recipients: string
  submitCopy?: string
  thankYouMessage: string
  title?: string
}

export const Form = ({
  _key,
  beforeSubmit,
  description,
  errorMessage,
  formFields,
  recipients,
  heading,
  submitCopy = 'Submit',
  thankYouMessage,
  title,
}: FormProps) => {
  const [formFieldsValues, setFormFieldsValues] = useState<any>({})
  const [formResponse, setFormResponse] = useState<any>(null)

  const handleSubmit = async () => {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      body: JSON.stringify({
        fields: {
          ...formFieldsValues,
        },
        recipients,
        subject: title || heading,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    setFormResponse(data)

    return data
  }

  return (
    <div className="form">
      <Container size="narrow">
        {!heading && title && <p className="title">{title}</p>}
        {description && (
          <div className="description">
            <PortableText value={description} />
          </div>
        )}
        {formResponse ? (
          <div className="response">
            {formResponse.status === 200 ? (
              <div className="success">
                <p>{thankYouMessage}</p>
              </div>
            ) : (
              <div className="error">
                <p>{errorMessage}</p>
              </div>
            )}
          </div>
        ) : (
          <form
            id={`form_${_key}`}
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
            onChange={() => {
              const form = document.getElementById(
                `form_${_key}`
              ) as HTMLFormElement
              if (form) {
                const formValues = new FormData(form)
                const values: any = {}
                formValues.forEach((value, key) => {
                  values[key] = value
                })
                setFormFieldsValues(values)
              }
            }}
          >
            <div className="fields">
              {formFields.map((field, index) => (
                <FormField key={field._key} {...field} fieldIndex={index} />
              ))}
              {beforeSubmit && (
                <div className="beforeSubmit">
                  <PortableText value={beforeSubmit} />
                </div>
              )}
            </div>
            <button type="submit">{submitCopy}</button>
          </form>
        )}
      </Container>
    </div>
  )
}
