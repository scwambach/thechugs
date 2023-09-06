import { Container } from '@components/modules/Container'
import { PortableTextBlock } from '@portabletext/types'
import { PageBlockProps } from '@utils/types'
import { FormFieldProps } from '@utils/types/modules/FormFieldProps'

interface FormProps extends PageBlockProps {
  description?: PortableTextBlock[]
  beforeSubmit?: PortableTextBlock[]
  thankYouMessage: string
  errorMessage: string
  recipients: string
  title: string
  formFields: FormFieldProps[]
}

export const Form = (props: FormProps) => {
  return (
    <div className="form">
      <Container size="wide">
        <code>
          <pre
            style={{
              fontFamily: 'monospace',
              display: 'block',
              padding: '50px',
              color: '#88ffbf',
              backgroundColor: 'black',
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
            }}
          >
            {JSON.stringify(props, null, '    ')}
          </pre>
        </code>
      </Container>
    </div>
  )
}
