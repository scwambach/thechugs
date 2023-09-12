import {defineArrayMember, defineField, defineType} from 'sanity'
import {stylesMarks} from '../common/stylesMarks'
import {AiOutlineForm} from 'react-icons/ai'
import {MdInput} from 'react-icons/md'
import {BsCheckSquare} from 'react-icons/bs'

export const form = defineType({
  name: 'form',
  title: 'Form',
  icon: AiOutlineForm,
  type: 'object',
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Form',
        subtitle: title ? 'Form' : undefined,
      }
    },
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'recipients',
      title: 'Recipients',
      type: 'string',
      description: 'Comma separated list of email addresses',
      validation: (Rule: any) => Rule.required(),
      initialValue: 'thechugsband@gmail.com',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
          ...stylesMarks,
        }),
      ],
    }),
    defineField({
      name: 'formFields',
      title: 'Form Fields',
      validation: (Rule: any) => Rule.required(),
      type: 'array',
      of: [
        defineArrayMember({
          name: 'field',
          title: 'Field',
          type: 'object',
          icon: MdInput,
          preview: {
            select: {
              title: 'label',
              subtitle: 'type',
            },
            prepare({title, subtitle}) {
              return {
                title,
                subtitle,
              }
            },
          },
          fields: [
            defineField({
              name: 'type',
              title: 'Type',
              validation: (Rule) => Rule.required(),
              type: 'string',
              options: {
                list: [
                  {title: 'checkbox', value: 'checkbox'},
                  {title: 'date', value: 'date'},
                  {title: 'datetime-local', value: 'datetime-local'},
                  {title: 'email', value: 'email'},
                  {title: 'hidden', value: 'hidden'},
                  {title: 'month', value: 'month'},
                  {title: 'number', value: 'number'},
                  {title: 'radio', value: 'radio'},
                  {title: 'tel', value: 'tel'},
                  {title: 'text', value: 'text'},
                  {title: 'textarea', value: 'textarea'},
                  {title: 'time', value: 'time'},
                  {title: 'url', value: 'url'},
                  {title: 'week', value: 'week'},
                  {title: 'select', value: 'select'},
                ],
              },
            }),
            defineField({
              name: 'label',
              title: 'Label',
              validation: (Rule) => Rule.required(),
              type: 'string',
            }),
            defineField({
              name: 'hideLabel',
              title: 'Hide Label',
              type: 'boolean',
            }),
            defineField({
              name: 'desciprtion',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'choices',
              title: 'Choices',
              type: 'array',
              hidden: ({parent}: any) =>
                parent?.type !== 'radio' &&
                parent?.type !== 'checkbox' &&
                parent?.type !== 'select',
              of: [
                defineArrayMember({
                  name: 'choice',
                  title: 'Choice',
                  type: 'object',
                  icon: BsCheckSquare,
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Label',
                      validation: (Rule) => Rule.required(),
                      type: 'string',
                    }),
                    defineField({
                      name: 'value',
                      title: 'Value',
                      validation: (Rule) => Rule.required(),
                      type: 'string',
                    }),
                  ],
                }),
              ],
            }),
            defineField({
              name: 'required',
              title: 'Required',
              type: 'boolean',
            }),
            defineField({
              name: 'initialValue',
              title: 'Initial Value',
              type: 'string',
              hidden: ({parent}: any) =>
                parent?.type === 'radio' &&
                parent?.type === 'checkbox' &&
                parent?.type === 'select',
            }),
            defineField({
              name: 'placeholder',
              title: 'Placeholder',
              type: 'string',
              hidden: ({parent}: any) =>
                parent?.type === 'radio' &&
                parent?.type === 'checkbox' &&
                parent?.type === 'select',
            }),
            defineField({
              name: 'readOnly',
              title: 'Read Only',
              type: 'boolean',
              hidden: ({parent}: any) =>
                parent?.type === 'radio' &&
                parent?.type === 'checkbox' &&
                parent?.type === 'select',
            }),
            defineField({
              name: 'disabled',
              title: 'Disabled',
              type: 'boolean',
              hidden: ({parent}: any) =>
                parent?.type === 'radio' &&
                parent?.type === 'checkbox' &&
                parent?.type === 'select',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'beforeSubmit',
      title: 'Before Submit',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          type: 'block',
          ...stylesMarks,
        }),
      ],
    }),
    defineField({
      name: 'thankYouMessage',
      title: 'Thank You Message',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
      initialValue:
        'Thank you! We appreciate you contacting us. We will get back in touch with you soon! Have a great day!',
      rows: 3,
    }),
    defineField({
      name: 'errorMessage',
      title: 'Error Message',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
      initialValue:
        'Oh no! Looks like something has gone wrong. Our engineer has been alerted to the issue and will attend to the problem as soon as possible.',
      rows: 3,
    }),
  ],
})
