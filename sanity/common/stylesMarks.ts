export const stylesMarks = {
  styles: [
    {title: 'Normal', value: 'normal'},
    {title: 'H2', value: 'h2'},
    {title: 'H3', value: 'h3'},
    {title: 'H4', value: 'h4'},
    {title: 'H5', value: 'h5'},
    {title: 'H6', value: 'h6'},
    {title: 'Quote', value: 'blockquote'},
  ],
  marks: {
    annotations: [
      {
        name: 'link',
        type: 'object',
        title: 'Link',
        fields: [
          {
            name: 'href',
            type: 'url',
            title: 'URL',
            validation: (Rule: any) =>
              Rule.uri({
                allowRelative: true,
                scheme: ['http', 'https', 'mailto', 'tel'],
              }),
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

export const customBlocks: any = [
  {
    type: 'image',
    options: {
      hotspot: true,
    },
  },
  {
    type: 'object',
    name: 'videoEmbed',
    title: 'Video Embed',
    fields: [
      {
        name: 'featureVideo',
        validation: (Rule: any) => Rule.required(),
        title: 'Feature Video',
        type: 'reference',
        to: [{type: 'video'}],
      },
      {
        name: 'caption',
        type: 'string',
        title: 'Caption',
      },
    ],
    preview: {
      select: {
        title: 'featureVideo.title',
        subtitle: 'featureVideo.url',
        media: 'featureVideo.poster',
      },
      prepare({title, subtitle, media}: any) {
        return {
          media,
          title,
          subtitle,
        }
      },
    },
  },
  {
    type: 'object',
    name: 'generalEmbed',
    title: 'General Embed',
    description: 'This could be from SoundCloud, Spotify, or anything.',
    fields: [
      {
        name: 'code',
        type: 'text',
        title: 'Code',
        description: 'Paste code here',
      },
    ],
    preview: {
      select: {
        subtitle: 'code',
      },
      prepare({subtitle}: any) {
        return {
          title: 'General Embed',
          subtitle,
        }
      },
    },
  },
]
