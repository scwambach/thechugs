import { Container } from '@components/modules/Container'
import { FormField } from '@components/modules/FormField'
import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import { PageBlockProps } from '@utils/types'
import { FormFieldProps } from '@utils/types/modules/FormFieldProps'

interface FormProps {
  beforeSubmit?: PortableTextBlock[]
  description?: PortableTextBlock[]
  errorMessage: string
  formFields: FormFieldProps[]
  recipients: string
  submitCopy?: string
  thankYouMessage: string
  title: string
}

// TODO: Add form functionality

export const Form = ({
  beforeSubmit,
  description,
  errorMessage,
  formFields,
  recipients,
  submitCopy = 'Submit',
  thankYouMessage,
  title,
}: FormProps) => {
  return (
    <div className="form">
      <Container size="wide">
        <p className="title">{title}</p>
        {description && (
          <div className="description">
            <PortableText value={description} />
          </div>
        )}
        <form>
          <div className="fields">
            {formFields.map((field, index) => (
              <FormField key={field._key} {...field} index={index} />
            ))}
            {beforeSubmit && (
              <div className="beforeSubmit">
                <PortableText value={beforeSubmit} />
              </div>
            )}
          </div>
          <button type="submit">{submitCopy}</button>
        </form>
      </Container>
    </div>
  )
}
