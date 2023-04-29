/* eslint-disable */
import { useState } from 'react'
import Image from 'next/image'

import useWishlistDispatch from '@hooks/useWishlistDispatch'
import useWishlistState from '@hooks/useWishlistState'

import VariantPicker from '../modules/VariantPicker'
import React from 'react'

const PrintfulProduct = (product: any) => {
  const { addItem } = useWishlistDispatch()
  const { isSaved } = useWishlistState()

  const { id, name, variants } = product
  const [firstVariant] = variants
  const oneStyle = variants.length === 1

  const [activeVariantExternalId, setActiveVariantExternalId] = useState(
    firstVariant.external_id
  )

  const activeVariant = variants.find(
    (v: any) => v.external_id === activeVariantExternalId
  )

  const activeVariantFile = activeVariant.files.find(
    ({ type }: { type: any }) => type === 'preview'
  )

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: activeVariant.currency,
  }).format(activeVariant.retail_price)

  //@ts-ignore
  const addToWishlist = () => addItem(product)

  //@ts-ignore
  const onWishlist = isSaved(id)

  return (
    <article className="product-item">
      <div className="product-img">
        {activeVariantFile && (
          <Image
            src={activeVariantFile.preview_url}
            width={250}
            height={250}
            alt={`${activeVariant.name} ${name}`}
            title={`${activeVariant.name} ${name}`}
          />
        )}
      </div>
      <h4>{name.replace('The Chugs', '')}</h4>
      <div className="product-info">
        <p className="price">{formattedPrice}</p>
        <VariantPicker
          value={activeVariantExternalId}
          onChange={(value: string) => setActiveVariantExternalId(value)}
          variants={variants}
          disabled={oneStyle}
        />
      </div>
      <button
        className="snipcart-add-item button"
        data-item-id={activeVariantExternalId}
        data-item-price={activeVariant.retail_price}
        data-item-url={`/api/products/${activeVariantExternalId}`}
        data-item-description={activeVariant.name}
        data-item-image={activeVariantFile?.preview_url || undefined}
        data-item-name={`${name} - ${activeVariant.name}`}
        data-item-custom1-type="hidden"
        data-item-custom1-name="PrintfulProduct"
        data-item-custom1-value="true"
      >
        Add to Cart
      </button>
    </article>
  )
}

export default PrintfulProduct
