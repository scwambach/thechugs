export const stylesMarks = {
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
}
