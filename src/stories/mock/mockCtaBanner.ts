import { BackgroundColor, HeadingLevel } from '@utils/types'

export const mockCtaBanner = {
  heading: 'Quisque ex sem, rutrum sed',
  _type: 'ctaBanner',
  links: [
    {
      linkType: 'url',
      text: 'Morbi pulvinar',
      _key: 'd6358de4d956',
      url: 'https://google.com',
      buttonStyle: 'quaternary',
      _type: 'link',
    },
    {
      _type: 'link',
      linkType: 'social',
      _key: '0eebc4388bf0',
      url: 'https://instagram.com',
    },
    {
      _type: 'link',
      linkType: 'social',
      _key: '38ir9ofi30980',
      url: 'https://facebook.com',
    },
  ],
  backgroundImage: {
    _type: 'image',
    asset: {
      _ref: 'image-55df9f7b44ab4b1679649e957e2f82c4b5844073-5290x4000-jpg',
      _type: 'reference',
    },
    lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAPABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIEBQYH/8QAIhAAAQMEAgMBAQAAAAAAAAAAAQIDBAAFBhEhQRMxcRIU/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAbEQACAgMBAAAAAAAAAAAAAAABAwARAiFRE//aAAwDAQACEQMRAD8AvHMTtlvxhMq6tKW60S6p4Eg8+k/KfFL875ittsNRFDa0pIHGuPdJkT94v389ijltqIdKcUTv13ULKrRJihlqFKUqWUJ1sAJAT39qxC8CLJo8kzGZXQ2OzQrukGWQ9NYWHVdFRGh1RXN0y8gnjzLlJc5/IKgN6FFKWtGgYXgk7OM//9k=',
  },
  _key: 'b9e755371f16',
  headingLevel: '2' as HeadingLevel,
  subheading: 'Nam dignissim nunc vitae sapien',
  backgroundColor: 'blue' as BackgroundColor,
  copy: [
    {
      markDefs: [],
      children: [
        {
          _type: 'span',
          marks: [],
          text: 'Sed ligula libero, bibendum id vestibulum at, ultricies eu lorem. Quisque nisl massa, convallis ac quam eu, molestie scelerisque tellus. Suspendisse ac elementum est. Aenean.',
          _key: '446e166a90370',
        },
      ],
      _type: 'block',
      style: 'normal',
      _key: 'e2fc36607587',
    },
  ],
}
