'use client'
import { Button } from '@components/modules/Button'
import { FormField } from '@components/modules/FormField'
import { ImageBlock } from '@components/modules/ImageBlock'
import { Markdown } from '@components/modules/Markdown'
import { getTypeOfVariant } from '@utils/getTypeOfVariant'
import { slugify } from '@utils/slugify'
import { toUsCurrency } from '@utils/toUsCurrency'
import { ProductPageProps, VariantProps } from '@utils/types/merch'
import Image, { ImageProps } from 'next/image'
import { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsArrowLeft } from 'react-icons/bs'
import { FaSpinner } from 'react-icons/fa'

interface DetailsProps {
  content: ProductPageProps['page']
  initialVariantId?: string
}

export const Details = ({ content, initialVariantId }: DetailsProps) => {
  const [disableButton, setDisableButton] = useState(true)
  const [printfulProduct, setPrintfulProduct] = useState(false)
  const [loading, setLoading] = useState(!!initialVariantId)
  const [activeVariant, setActiveVariant] = useState<VariantProps | undefined>(
    content.variants ? content.variants[0] : undefined
  )
  const [activeImage, setActiveImage] = useState<ImageProps | undefined>()

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
    if (content.externalId) setPrintfulProduct(true)
    /* @ts-expect-error */
    if (content?.variants?.length > 1 || content.outOfStockMsg)
      setDisableButton(true)
    else setDisableButton(false)
    if (typeof window !== 'undefined') {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0)
      }
    }
  }, [])

  useEffect(() => {
    if (!activeVariant && content.images) {
      setActiveImage(content.images[0].image as ImageProps)
    }
  }, [activeVariant])

  useEffect(() => {
    if (initialVariantId) {
      const variant = content.variants?.find(
        (variant) => variant.externalId === initialVariantId
      )

      if (variant) {
        setActiveVariant(variant)
        setDisableButton(false) // Enable button when variant is set from URL
      }
      setLoading(false) // Set loading to false after processing variant
    }
  }, [initialVariantId, content.variants])

  const isGarageSale =
    content.category._id === '1b10042f-e887-40cf-a102-77e48b31e58b'

  return (
    <div className="container">
      <Button
        className="back"
        url={isGarageSale ? '/garage-sale' : '/merch'}
        tagType="a"
      >
        <BsArrowLeft />
        Back to {isGarageSale ? 'the Garage' : 'Store'}
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
              <>
                {activeImage && <ImageBlock image={activeImage} alt="" />}
                {content.images.length > 1 && (
                  <div className="image-thumbnails">
                    {content.images.map(({ _key, image }) => (
                      <button
                        key={_key}
                        onClick={(e) => {
                          e.preventDefault()
                          setActiveImage(image)
                        }}
                      >
                        <Image
                          priority
                          src={image.src}
                          alt=""
                          width={100}
                          height={100}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </>
            )
          )}
        </div>

        <div>
          {loading ? (
            <div className="loading relative">
              <FaSpinner />
            </div>
          ) : (
            <>
              {activeVariant && (
                <span>PRODUCT ID: #{activeVariant.variantId}</span>
              )}
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
                    initialValue={activeVariant?.externalId || ''}
                    onChangeSelect={(e) => {
                      setDisableButton(true)
                      if (e.target.value) setDisableButton(false)
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
                {content.localOnly ? (
                  <a
                    href={`mailto:thechugsband@gmail.com?subject=Interested in ${content.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      !content.outOfStockMsg
                        ? `snipcart-add-item button white`
                        : `button white`
                    }
                  >
                    Contact Us About This Item
                  </a>
                ) : (
                  <button
                    disabled={disableButton}
                    className={
                      !content.outOfStockMsg
                        ? `snipcart-add-item button white`
                        : `button white`
                    }
                    data-item-id={
                      printfulProduct ? activeVariant?.externalId : content._id
                    }
                    data-item-price={
                      printfulProduct ? activeVariant?.price : content.price
                    }
                    data-item-url={`/api/products/${
                      printfulProduct ? activeVariant?.externalId : content._id
                    }`}
                    data-item-description={
                      printfulProduct ? activeVariant?.title : content.title
                    }
                    data-item-image={activeVariant?.image || undefined}
                    data-item-name={`${
                      printfulProduct ? activeVariant?.title : content.title
                    }`}
                    data-item-custom1-type="hidden"
                    data-item-custom1-name="PrintfulProduct"
                    data-item-custom1-value={printfulProduct}
                  >
                    {!content.outOfStockMsg ? (
                      <>
                        Add to <AiOutlineShoppingCart size={20} />
                      </>
                    ) : (
                      <>{content.outOfStockMsg}</>
                    )}
                  </button>
                )}
              </div>
              {content.description && (
                <Markdown>{content.description}</Markdown>
              )}
            </>
          )}
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
