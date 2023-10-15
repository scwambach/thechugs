import React from 'react'
import {defineArrayMember, defineField} from 'sanity'

export const merch = {
  name: 'merch',
  title: 'Merch',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      variants: 'variants',
    },
    prepare({title, media, variants}: any) {
      const subtitle = variants && variants.length > 0 ? `Variants: ${variants.length}` : ''
      return {
        title,
        subtitle,
        media: <img src={media} />,
      }
    },
  },
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      readOnly: true,

      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      readOnly: true,
      title: 'Slug',
      type: 'slug',
    }),
    defineField({
      name: 'productId',
      readOnly: true,
      title: 'Product ID',
      type: 'number',
    }),
    defineField({
      name: 'externalId',
      title: 'External ID',
      readOnly: true,
      type: 'string',
    }),
    defineField({
      name: 'thumbnail',
      readOnly: true,
      title: 'Thumbnail',
      type: 'url',
    }),
    defineField({
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'variant',
          title: 'Variant',
          type: 'object',
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
            prepare({title, media}: any) {
              return {
                title,
                media: <img src={media} />,
              }
            },
          },
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              readOnly: true,
              type: 'string',
            }),
            defineField({
              name: 'price',
              readOnly: true,
              title: 'Price',
              type: 'number',
            }),
            defineField({
              name: 'image',
              readOnly: true,
              title: 'Image',
              type: 'url',
            }),
            defineField({
              name: 'externalId',
              title: 'External ID',
              readOnly: true,
              type: 'string',
            }),
            defineField({
              name: 'sku',
              readOnly: true,
              title: 'SKU',
              type: 'string',
            }),
            defineField({
              name: 'syncProductId',
              readOnly: true,
              title: 'Sync Product ID',
              type: 'number',
            }),
            defineField({
              name: 'variantId',
              title: 'Variant ID',
              readOnly: true,
              type: 'number',
            }),
            defineField({
              name: 'itemId',
              readOnly: true,
              title: 'Item ID',
              type: 'number',
            }),
          ],
        }),
      ],
    }),
  ],
}
