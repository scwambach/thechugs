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
  heading: 'Maecenas finibus molestie finibus.',
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
      readOnly: false,
      type: 'text' as InputTypes,
      required: true,
      label: 'Nunc pharetra.',
      description: null,
      placeholder: 'In hac habitasse',
      hideLabel: false,
      initialValue: 'Maecenas vestibulum, ante quis accumsan.',
    },
    {
      initialValue: null,
      readOnly: null,
      type: 'checkbox' as InputTypes,
      required: null,
      label: 'Quisque ac',
      description: null,
      placeholder: null,
      hideLabel: null,
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
      type: 'textarea' as InputTypes,
      required: true,
      label: 'Phasellus bibendum',
      description: null,
      placeholder:
        'Quisque at mollis mi. Nulla porta neque at lorem interdum, vitae imperdiet urna posuere.',
      hideLabel: null,
      initialValue: null,
      readOnly: null,
    },
  ],
}
