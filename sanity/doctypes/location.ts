import { FaMapMarkerAlt } from 'react-icons/fa'

export const location = {
  title: 'Location',
  name: 'location',
  type: 'document',
  icon: FaMapMarkerAlt,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'City, State Zip',
      name: 'cityStateZip',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
