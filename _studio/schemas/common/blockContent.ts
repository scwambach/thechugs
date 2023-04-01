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
        styles: [
          {title: 'Normal', value: 'normal'},
          {title: 'H2', value: 'h2'},
          {title: 'H3', value: 'h3'},
          {title: 'H4', value: 'h4'},
          {title: 'Quote', value: 'blockquote'},
        ],
        marks: {
          annotations: [
            {
              name: 'link',
              type: 'object',
              title: 'External link',
              fields: [
                {
                  name: 'href',
                  type: 'url',
                  title: 'URL',
                },
                {
                  title: 'Open in new tab',
                  name: 'blank',
                  description: 'Read https://css-tricks.com/use-target_blank/',
                  type: 'boolean',
                  initialValue: false,
                },
              ],
            },
          ],
        },
      },
    ],
  }
}
