import { Field } from './Field'

const Form = () => {
  return (
    <form>
      <fieldset>
        <Field type="text" _key="2i34y2oihebf" label="Field 1" />
        <Field type="textarea" _key="sdfkjshi3" label="Field 2" />
        <Field
          type="checkbox"
          _key="sdfksdfgsjshi3"
          label="Field 2"
          choices={[
            {
              copy: 'Choice 1',
              value: 'choice-1',
              _key: 'sdfkjshi3',
            },
            {
              copy: 'Choice 2',
              value: 'choice-2',
              _key: 'sdfgpo432uj',
            },
          ]}
        />
        <Field
          type="radio"
          _key="sdflsndvl23"
          label="Field 2"
          choices={[
            {
              copy: 'Choice 1',
              value: 'choice-1',
              _key: 'i2uy3ibjkf',
            },
            {
              copy: 'Choice 2',
              value: 'choice-2',
              _key: 'olkbv8749820',
            },
          ]}
        />
      </fieldset>
      <input className="button" type="submit" value="Submit this form" />
    </form>
  )
}

export { Form }
