'use client'
import {
  ProductCardProps,
  VariantProps,
} from '@utils/types/modules/ProductCardProps'
import { ImageBlock } from './ImageBlock'
import Image from 'next/image'
import { useState } from 'react'
import { FormField } from './FormField'
import { toUsCurrency } from '@utils/toUsCurrency'
import { slugify } from '@utils/slugify'
import { Button } from './Button'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { getTypeOfVariant } from '@utils/getTypeOfVariant'
import { LinkObject } from './LinkObject'

// TODO: disable "Add to cart" button if no variant is selected

export const ProductCard = (props: ProductCardProps) => {
  const [activeVariant, setActiveVariant] = useState<VariantProps | undefined>(
    props.variants ? props.variants[0] : undefined
  )

  const removeTitleFromVariantName = (variantName: string) => {
    return variantName.replace(`${props.title} - `, '')
  }

  const variantKeyValuePair = props.variants
    ? props.variants.map((variant) => {
        return {
          _key: variant._id,
          label: removeTitleFromVariantName(variant.title),
          value: variant.externalId,
        }
      })
    : []

  const imageLogic = (
    <>
      {props.thumbnail && !activeVariant ? (
        <Image src={props.thumbnail} alt="" width={300} height={300} />
      ) : (
        activeVariant && (
          <Image src={activeVariant?.image} alt="" width={300} height={300} />
        )
      )}
      {props.images && !props.thumbnail && !activeVariant && (
        <ImageBlock image={props.images[0].image} height={300} width={300} />
      )}
    </>
  )

  const content = (
    <>
      <div className="image">
        {props.minimal ? (
          imageLogic
        ) : (
          <LinkObject
            href={`/merch/${props.slug}?variant=${activeVariant?.externalId}`}
          >
            {imageLogic}
          </LinkObject>
        )}
      </div>
      <div className="content">
        <p className="title">{props.title}</p>
        {!props.minimal && props.variants && props.variants.length > 1 ? (
          <FormField
            type="select"
            choices={[
              {
                _key: `${slugify(props.title)}-select-variant`,
                label: `Select ${getTypeOfVariant(
                  props.variants.map((v) => v.title)
                )}`,
                value: '',
              },
              ...variantKeyValuePair,
            ]}
            onChangeSelect={(e) => {
              const variant = props.variants?.find(
                (variant) => variant.externalId === e.target.value
              )
              setActiveVariant(variant)
            }}
            _key="jneklfvbhwo3409n"
            label=""
          />
        ) : !props.minimal ? (
          <div className="spacer" />
        ) : (
          <></>
        )}
        {!props.minimal && (
          <>
            <div className="button-group">
              <Button text="Add to Cart" buttonStyle="white" tagType="button">
                Add to <AiOutlineShoppingCart size={20} />
              </Button>
              <Button
                text="View Details"
                buttonStyle="white"
                tagType="a"
                url={`/merch/${props.slug}?variant=${activeVariant?.externalId}`}
              />
            </div>
          </>
        )}
        <p className="price">
          {toUsCurrency(activeVariant?.price || props.price)}
        </p>
      </div>
    </>
  )

  return (
    <div
      className={`productCard${
        props.variants && props.variants.length > 1 ? ' hasVariants' : ''
      }${props.minimal ? ' minimal' : ''}`}
    >
      {props.minimal ? (
        <LinkObject
          href={`/merch/${props.slug}?variant=${activeVariant?.externalId}`}
        >
          {content}
        </LinkObject>
      ) : (
        content
      )}
    </div>
  )
}
