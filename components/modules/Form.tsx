import { useEffect, useState } from 'react'
import { Field } from './Field'

const Form = ({ _id }: { _id: string }) => {
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [payload, setPayload] = useState<any>({})
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [checkedBoxes, setCheckedBoxes] = useState<
    { label: string; value: string }[]
  >([])

  const findChecked = () => {
    const thisForm = document.getElementById(`form_${_id}`)
    const checkedBoxes = thisForm?.querySelectorAll('input:checked')

    if (checkedBoxes) {
      const boxes = Array.from(checkedBoxes).map((b: any) => {
        const label = b.getAttribute('data-label')
        const value = b.value
        return { label, value }
      })
      setCheckedBoxes(boxes)
    }
  }

  const collectData = () => {
    const form = global.document.getElementById(`form_${_id}`)
    const inputs = form?.querySelectorAll('input')
    const selects = form?.querySelectorAll('select')
    const textareas = form?.querySelectorAll('textarea')

    const serial = {
      subject: 'New form submission',
      recipient: 'thechugsband@gmail.com',
      currentPath: window.location.pathname,
    }

    inputs?.forEach((input) => {
      if ((input.type !== 'checkbox', input.type !== 'submit')) {
        //@ts-ignore
        serial[input.name.split('_')[0]] = input.value
      }
    })

    selects?.forEach((input) => {
      //@ts-ignore
      serial[input.name.split('_')[0]] = input.value
    })

    textareas?.forEach((input) => {
      //@ts-ignore
      serial[input.name.split('_')[0]] = input.value
    })

    checkedBoxes?.forEach((input) => {
      //@ts-ignore
      serial[input.label] = input.value
    })

    setPayload(serial)
  }

  const postForm = async () => {
    const formData = await fetch(`${process.env.SITE_URL}/api/mailer`, {
      method: 'POST',
      body: JSON.stringify(payload),
    })

    const data = await formData.json()

    if (data.message) {
      setLoading(false)
      setSubmitted(true)

      if (data.message === 'Success') {
        setError(false)
        setSuccess(true)
      } else {
        setSuccess(false)
        setError(true)
      }
    } else {
      setSubmitted(true)
      setSuccess(false)
      setError(true)
    }
  }

  useEffect(() => {
    collectData()
  }, [checkedBoxes])

  return (
    <form
      id={`form_${_id}`}
      onSubmit={(e) => {
        e.preventDefault()
        console.log('submitting form')
        setLoading(true)
        postForm()
      }}
    >
      <fieldset
        disabled={loading}
        onChange={() => {
          findChecked()
          collectData()
        }}
      >
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
            {JSON.stringify(payload, null, '    ')}
          </pre>
        </code>

        <Field type="text" label="name" required />
        <Field type="email" label="email" required />
        <Field
          type="select"
          label="favorite beer"
          required
          choices={[
            {
              copy: "Hamm's",
              value: "Hamm's",
              _key: 'sdfkjshi3sdvcnb',
            },
            {
              copy: "Hamm's",
              value: "Hamm's",
              _key: 'sdfgpo432ujefdgdnm8',
            },
            {
              copy: "Hamm's",
              value: "Hamm's",
              _key: 'sdfkjshi34rgbsf',
            },
            {
              copy: "Hamm's",
              value: "Hamm's",
              _key: 'sdfgpo432ujsdcvhsasf2122',
            },
          ]}
        />
        <Field required type="textarea" label="message to the boiz:" />
      </fieldset>
      <input className="button" type="submit" value="Submit this form" />
    </form>
  )
}

export { Form }
