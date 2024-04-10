import {GiGuitar} from 'react-icons/gi'
export const otherBand = {
  title: 'Other Band',
  name: 'otherBand',
  type: 'document',
  icon: GiGuitar,
  fields: [
    {
      title: 'Band Name',
      name: 'bandName',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
    },
  ],
}
