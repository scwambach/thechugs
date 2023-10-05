import { LinkProps, LinkTypes } from '@utils/types'

export const mockRiver = {
  _key: '85806ce8e978',
  _type: 'river',
  items: [
    {
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-2c5f7965a2853af0f91b992a60a6e905edb0056c-4160x6240-jpg',
          _type: 'reference',
        },
        lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAeABQDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAcEBQYBAv/EACYQAAICAgECBQUAAAAAAAAAAAECAwQAEQUSMQYHEyJRMlJhcYH/xAAWAQEBAQAAAAAAAAAAAAAAAAAEBQP/xAAiEQACAQMCBwAAAAAAAAAAAAABAgADEiERMgQFIjFRYXH/2gAMAwEAAhEDEQA/AEFyKQTTNGh6pk9pHycgrSKSRyy7jXq1o9zjAuL4XjpJPUhsS25V6ta0VYZyG5RFATXeMFqx2jVjoD5JyWtW3Ghj2W7OJRX+L4uzMsrcisBZAfT+3DM3zNdrXJTTQRemjH6d9sM3VMbpiWztnrkrbjXpuyBR0r+Rm/8ALQm7Cxt6mhRCoBGyMVtuRpT1OdnGD5X+JZeEp3FigilLr3cb6f1lDgkW7qUN9kzml7UiEcp7HeUXiYwrzltYUKxq5AC9hhkLlLLT8hPKw90jlj/cMHUNzkjzH0FspKpOugE//9k=',
      },
      heading: 'Nullam imperdiet, ipsum in ultrices.',
      links: [
        {
          _key: 'e8769e40245b',
          _type: 'link',
          buttonStyle: 'tertiary',
          linkType: 'url' as LinkTypes,
          text: 'Cras ornare.',
          url: 'https://google.com',
        },
        {
          _key: '0d7aa6900a8a',
          _type: 'link',
          linkType: 'social' as LinkTypes,
          text: 'Suspendisse ac.',
          url: 'https://facebook.com',
        },
        {
          _key: 'e75ac02484af',
          _type: 'link',
          linkType: 'social' as LinkTypes,
          url: 'https://bandcamp.com',
        },
      ] as LinkProps[],
      copy: [
        {
          markDefs: [],
          children: [
            {
              _type: 'span',
              marks: [],
              text: 'Phasellus lobortis luctus massa. Aenean sit amet libero tempus, sodales urna eget, mollis enim. Maecenas porta nec nunc non facilisis. Proin blandit lacinia lectus nec varius. Curabitur quis eleifend augue. Sed eleifend scelerisque vestibulum. Curabitur.',
              _key: 'c5aec0c651de0',
            },
          ],
          _type: 'block',
          style: 'normal',
          _key: '9ef76f7ddcdf',
        },
      ],
    },
    {
      image: {
        _type: 'image',
        asset: {
          _ref: 'image-bd5828be723d8073237a788af9e8dee122a0507d-6000x4000-jpg',
          _type: 'reference',
        },
        lqip: 'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAUGBP/EACQQAAEDBAIBBQEAAAAAAAAAAAQBAgMABRESBiEiBxMUI0FR/8QAFgEBAQEAAAAAAAAAAAAAAAAABAMF/8QAHxEAAQMDBQAAAAAAAAAAAAAAAgABAwQRExIhMkHw/9oADAMBAAIRAxEAPwBufEnFjUtRY6yM29v5OfHukpx/H+BHSl2wQg24SY3RyaR9/qVceoThFHiPkDa8hv2Jl64z/cVluVnt9841MeQNqTCMj0crtsrSaocggDqlLLjIzf11IG8vMuZClSSuYr0TxRekSipiUlN/CNGtx0maKM0EFuDLT1zdFsv/2Q==',
      },
      heading: 'Donec in magna vitae orci.',
      links: [
        {
          _key: 'ee1b9fbedeae',
          _type: 'link',
          linkType: 'url' as LinkTypes,
          text: 'Suspendisse potenti.',
          url: 'https://google.com',
        },
      ] as LinkProps[],
      copy: [
        {
          style: 'normal',
          _key: 'efde23230c0c',
          markDefs: [],
          children: [
            {
              _type: 'span',
              marks: [],
              text: 'Fusce placerat mauris et convallis imperdiet. Pellentesque auctor libero pharetra sollicitudin lobortis. Curabitur a mi vitae odio congue fermentum. Nam quis pellentesque metus. Praesent ut lacinia mi. Nam eu hendrerit ipsum. Aliquam volutpat, dui et mattis gravida, tellus magna egestas.',
              _key: '579d063c021b0',
            },
          ],
          _type: 'block',
        },
      ],
    },
  ],
}
