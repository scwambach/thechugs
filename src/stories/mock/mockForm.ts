import { InputTypes } from '@utils/types'

export const mockForm = {
  _type: 'form',
  description: [
    {
      style: 'normal',
      _key: '715af662db12',
      markDefs: [],
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Pellentesque sollicitudin tempus dui a porta. Donec vitae tempor velit. Cras ut lorem sit amet lectus vulputate elementum. Aenean et.',
          _key: '94fcfe017d640',
        },
      ],
      _type: 'block',
    },
  ],
  thankYouMessage:
    'Thank you! We appreciate you contacting us. We will get back in touch with you soon! Have a great day!',
  recipients: 'thechugsband@gmail.com',
  errorMessage:
    'Oh no! Looks like something has gone wrong. Our engineer has been alerted to the issue and will attend to the problem as soon as possible.',
  _key: '63c667a1849e',
  title: 'Morbi turpis.',
  beforeSubmit: [
    {
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Proin placerat nulla nec massa pellentesque, dignissim bibendum elit iaculis. Maecenas iaculis finibus diam. Maecenas mi odio, facilisis a mattis.',
          _key: 'e3d9775c26e10',
        },
      ],
      _type: 'block',
      style: 'normal',
      _key: 'dc0eade4d231',
      markDefs: [],
    },
  ],
  formFields: [
    {
      _key: 'as87dvgais76dcgv4478jd',
      readOnly: false,
      type: 'text' as InputTypes,
      required: true,
      label: 'Nunc pharetra.',
      description: undefined,
      placeholder: 'In hac habitasse',
      hideLabel: false,
      initialValue: 'Maecenas vestibulum, ante quis accumsan.',
    },
    {
      _key: '4d57e2d7bda59',
      choices: [
        {
          _type: 'choice',
          label: 'Nunc vel orci vitae.',
          _key: '246b7f7b4aac',
          value: 'Curabitur ut.',
        },
        {
          label: 'Nullam scelerisque mollis rutrum.',
          _key: '4efd19597acd',
          value: 'In id.',
          _type: 'choice',
        },
        {
          _type: 'choice',
          label: 'Vivamus vehicula vulputate ligula.',
          _key: '5e36c74f9b99',
          value: 'Mauris bibendum.',
        },
      ],
      type: 'select' as InputTypes,
      required: true,
      desciprtion:
        'Aenean orci neque, semper in ligula eget, luctus porta nunc. Nam ullamcorper cursus semper. Nulla.',
      _type: 'field',
      label: 'Maecenas eu quam non.',
    },
    {
      _key: '4d57e27bda59',
      choices: [
        {
          _type: 'choice',
          label: 'Nunc vel orci vitae.',
          _key: '246b7f7b4aac',
          value: 'Curabitur ut.',
        },
        {
          label: 'Nullam scelerisque mollis rutrum.',
          _key: '4efd19597acd',
          value: 'In id.',
          _type: 'choice',
        },
        {
          _type: 'choice',
          label: 'Vivamus vehicula vulputate ligula.',
          _key: '5e36c74f9b99',
          value: 'Mauris bibendum.',
        },
      ],
      type: 'radio' as InputTypes,
      required: true,
      desciprtion:
        'Aliquam erat volutpat. Donec aliquet erat arcu, sit amet fringilla sem elementum ac. Suspendisse.',
      _type: 'field',
      label: 'Mauris eget tempus tortor.',
    },
    {
      _key: '34twg456e4hsr6j',
      initialValue: undefined,
      readOnly: undefined,
      type: 'checkbox' as InputTypes,
      required: undefined,
      label: 'Quisque ac',
      description: undefined,
      placeholder: undefined,
      hideLabel: undefined,
      choices: [
        {
          _type: 'choice',
          label: 'Donec venenatis.',
          _key: '1a75a9c00932',
          value: 'Aliquam dolor',
        },
        {
          _key: '02aa1e415c1e',
          value: 'Nunc malesuada',
          _type: 'choice',
          label: 'Proin ut.',
        },
      ],
    },
    {
      _key: '9p8dyfu98dfho7vs87fb',
      type: 'textarea' as InputTypes,
      required: true,
      label: 'Phasellus bibendum',
      description: undefined,
      placeholder:
        'Quisque at mollis mi. Nulla porta neque at lorem interdum, vitae imperdiet urna posuere.',
      hideLabel: undefined,
      initialValue: undefined,
      readOnly: undefined,
    },
  ],
}
