import React from 'react'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { AiOutlineSync } from 'react-icons/ai'
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'

// Kicks off the Printful to Sanity sync handled by /api/getProducts
let syncInFlight = false

const syncFromPrintful = async () => {
  if (syncInFlight) return
  syncInFlight = true

  try {
    const res = await fetch('/api/getProducts')
    const data = await res.json()

    if (!res.ok || data?.status !== 200) {
      throw new Error(
        typeof data?.body === 'string'
          ? data.body
          : `Request failed (${res.status})`
      )
    }

    const added = Array.isArray(data.body) ? data.body.length : 0

    window.alert(
      added > 0
        ? `Synced ${added} new product${added === 1 ? '' : 's'} from Printful. Reload the studio to see them.`
        : 'Printful is already in sync — no new products found.'
    )
  } catch (error: any) {
    window.alert(`Printful sync failed: ${error?.message ?? 'Unknown error'}`)
  } finally {
    syncInFlight = false
  }
}

// "Sync from Printful" pane button. showAsAction promotes it out of the
// overflow menu so it renders beside the "+" create button, with the title as
// its tooltip.
export const printfulSyncMenuItem = (S: any) =>
  S.menuItem()
    .title('Sync from Printful')
    .icon(AiOutlineSync)
    .showAsAction(true)
    .action(syncFromPrintful)

export const merch = defineType({
  name: 'merch',
  title: 'Merch',
  type: 'document',
  orderings: [orderRankOrdering],
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
    // Hidden, read-only string the orderable list pane drags around.
    // newItemPosition 'before' puts studio-created merch at the top.
    orderRankField({ type: 'merch', newItemPosition: 'before' }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      title: 'merchBooth',
      name: 'merchBooth',
      type: 'boolean',
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
