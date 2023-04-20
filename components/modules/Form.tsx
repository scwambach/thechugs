import { Field } from './Field'

const Form = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <fieldset>
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
