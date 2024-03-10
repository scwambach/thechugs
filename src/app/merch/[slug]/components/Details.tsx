'use client'
import { Button } from '@components/modules/Button'
import { FormField } from '@components/modules/FormField'
import { ImageBlock } from '@components/modules/ImageBlock'
import { Markdown } from '@components/modules/Markdown'
import { getTypeOfVariant } from '@utils/getTypeOfVariant'
import { slugify } from '@utils/slugify'
import { toUsCurrency } from '@utils/toUsCurrency'
import { ProductPageProps, VariantProps } from '@utils/types/merch'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'

interface DetailsProps {
  content: ProductPageProps['page']
  initialVariantId?: string
}

export const Details = ({ content, initialVariantId }: DetailsProps) => {
  const [activeVariant, setActiveVariant] = useState<VariantProps | undefined>(
    content.variants ? content.variants[0] : undefined
  )

  const removeTitleFromVariantName = (variantName: string) => {
    return variantName.replace(`${content.title} - `, '')
  }

  const variantKeyValuePair = content.variants
    ? content.variants.map((variant) => {
        return {
          _key: variant._key,
          label: removeTitleFromVariantName(variant.title),
          value: variant.externalId,
        }
      })
    : []

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0)
      }
    }
  }, [])

  useEffect(() => {
    if (initialVariantId) {
      const variant = content.variants?.find(
        (variant) => variant.externalId === initialVariantId
      )

      if (variant) {
        setActiveVariant(variant)
      }
    }
  }, [initialVariantId])

  return (
    <div className="container">
      <Button className="back" url="/merch" tagType="a">
        <BsArrowLeft />
        Back to Store
      </Button>
      <h1>{content.title}</h1>

      <div className="flex-row">
        <div>
          {activeVariant ? (
            <Image
              priority
              src={activeVariant.image}
              alt=""
              width={700}
              height={700}
            />
          ) : (
            content.images && (
              <ImageBlock
                image={content.images[0].image}
                alt=""
                priority
                width={700}
                height={700}
              />
            )
          )}
        </div>
        <div>
          {activeVariant && <span>PRODUCT ID: #{activeVariant.variantId}</span>}
          <span className="price">
            {toUsCurrency(activeVariant?.price || content.price || 0)}
          </span>

          <div className="field-group">
            {content.variants && content.variants.length > 1 && (
              <FormField
                type="select"
                choices={[
                  {
                    _key: `${slugify(content.title)}-select-variant`,
                    label: `Select ${getTypeOfVariant(
                      content.variants.map((v) => v.title)
                    )}`,
                    value: '',
                  },
                  ...variantKeyValuePair,
                ]}
                onChangeSelect={(e) => {
                  const variant = content.variants?.find(
                    (variant) => variant.externalId === e.target.value
                  )
                  setActiveVariant(
                    variant || (content.variants && content.variants[0])
                  )
                }}
                _key="jneklfvbhwo3409n"
                label=""
              />
            )}
            <Button text="Add to Cart" buttonStyle="white" tagType="button">
              Add to <AiOutlineShoppingCart size={20} />
            </Button>
          </div>
          {content.description && <Markdown>{content.description}</Markdown>}
        </div>
      </div>
      {content.category.title === 'Clothing' && (
        <div className="disclaimer">
          <p>* All clothing is made to order and time varies for shipping</p>
        </div>
      )}
    </div>
  )
}
