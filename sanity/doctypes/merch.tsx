import React from 'react'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const merch = defineType({
  name: 'merch',
  title: 'Merch',
  type: 'document',
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      images: 'images',
      variants: 'variants',
    },
    prepare({ title, media, images, variants }: any) {
      const hasImages = images && images.length > 0
      const subtitle =
        variants && variants.length > 0 ? `Variants: ${variants.length}` : ''
      return {
        title,
        subtitle,
        media: hasImages ? images[0].image : <img src={media} />,
      }
    },
  },
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      validation: (Rule: any) => Rule.required(),
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'merchCategory' }],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags for item',
      of: [
        defineArrayMember({
          type: 'string',
          name: 'tag',
          title: 'Tag',
        }),
      ],
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      hidden: ({ parent }: any) => !!parent.productId,
    }),
    defineField({
      name: 'outOfStockMsg',
      title: 'Out of Stock Message',
      type: 'string',
      hidden: ({ parent }: any) => !!parent.productId,
    }),
    defineField({
      name: 'localOnly',
      title: 'Local Only',
      type: 'boolean',
      initialValue: false,
      hidden: ({ parent }: any) => {
        console.log('parent', parent.category)
        return parent.category?._ref !== '1b10042f-e887-40cf-a102-77e48b31e58b'
      },
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      options: {
        layout: 'grid',
      },
      hidden: ({ parent }: any) => !!parent.productId,
      of: [
        defineArrayMember({
          name: 'productImage',
          title: 'Product Image',
          type: 'object',
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
            prepare({ title, media }: any) {
              return {
                title,
                media,
              }
            },
          },
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'productId',
      readOnly: true,
      hidden: ({ parent }: any) => !!parent.images,
      title: 'Product ID',
      type: 'number',
    }),
    defineField({
      name: 'externalId',
      title: 'External ID',
      readOnly: true,
      hidden: ({ parent }: any) => !!parent.images,
      type: 'string',
    }),
    defineField({
      name: 'thumbnail',
      readOnly: true,
      hidden: ({ parent }: any) => !!parent.images,
      title: 'Thumbnail',
      type: 'url',
    }),
    defineField({
      name: 'variants',
      title: 'Variants',
      readOnly: true,
      hidden: ({ parent }: any) => !!parent.images,
      type: 'array',
      of: [
        defineArrayMember({
          name: 'variant',
          title: 'Variant',
          readOnly: true,
          type: 'object',
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
            prepare({ title, media }: any) {
              return {
                title,
                media: <img src={media} />,
              }
            },
          },
          fields: [
            defineField({
              name: 'title',
              readOnly: true,
              title: 'Title',
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
              hidden: ({ parent }: any) => !!parent.images,
              title: 'Image',
              type: 'url',
            }),
            defineField({
              name: 'externalId',
              title: 'External ID',
              readOnly: true,
              hidden: ({ parent }: any) => !!parent.images,
              type: 'string',
            }),
            defineField({
              name: 'sku',
              readOnly: true,
              hidden: ({ parent }: any) => !!parent.images,
              title: 'SKU',
              type: 'string',
            }),
            defineField({
              name: 'syncProductId',
              readOnly: true,
              hidden: ({ parent }: any) => !!parent.images,
              title: 'Sync Product ID',
              type: 'number',
            }),
            defineField({
              name: 'variantId',
              title: 'Variant ID',
              readOnly: true,
              hidden: ({ parent }: any) => !!parent.images,
              type: 'number',
            }),
            defineField({
              name: 'itemId',
              readOnly: true,
              hidden: ({ parent }: any) => !!parent.images,
              title: 'Item ID',
              type: 'number',
            }),
          ],
        }),
      ],
    }),
  ],
})
