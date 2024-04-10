import {stylesMarks} from './stylesMarks'

export const blockContent = (props: {
  title?: string
  name?: string
  description?: any
  fieldset?: any[]
  hidden?: boolean
}) => {
  return {
    title: props.title || 'Block Content',
    name: props.name || 'blockContent',
    description: props.description,
    fieldset: props.fieldset,
    hidden: props.hidden,
    type: 'array',
    of: [
      {
        title: 'Block',
        type: 'block',
        ...stylesMarks,
      },
    ],
  }
}
