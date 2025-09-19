'use client'
import {
  ProductCardProps,
  VariantProps,
} from '@utils/types/modules/ProductCardProps'
import { ImageBlock } from './ImageBlock'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { FormField } from './FormField'
import { toUsCurrency } from '@utils/toUsCurrency'
import { slugify } from '@utils/slugify'
import { AiFillStar } from 'react-icons/ai'
import { getTypeOfVariant } from '@utils/getTypeOfVariant'
import { LinkObject } from './LinkObject'
import QRCode from 'react-qr-code'

export const ProductScanner = (props: ProductCardProps) => {
  // Keep your initial behavior (default to first variant)…
  const [activeVariant, setActiveVariant] = useState<VariantProps | undefined>(
    props.variants ? props.variants[0] : undefined
  )
  // …but only show QR after a user manually changes the select
  const [wasManuallySelected, setWasManuallySelected] = useState(false)
  const [showQR, setShowQR] = useState(false)

  const removeTitleFromVariantName = (variantName: string) => {
    return variantName.replace(`${props.title} - `, '')
  }

  const variantKeyValuePair = props.variants
    ? props.variants.map((variant) => ({
        _key: variant._id,
        label: removeTitleFromVariantName(variant.title),
        value: variant.externalId,
      }))
    : []

  const targetHref = useMemo(() => {
    const base = `${process.env.SITE_URL}/merch/${props.slug}`
    return activeVariant?.externalId
      ? `${base}?variant=${activeVariant.externalId}`
      : base
  }, [props.slug, activeVariant?.externalId])

  // ORIGINAL image logic kept as-is for "Image" mode
  const imageLogic = (
    <>
      {props.thumbnail && !activeVariant ? (
        <Image
          src={props.thumbnail}
          alt=""
          width={300}
          height={300}
          unoptimized
        />
      ) : (
        activeVariant && (
          <Image
            src={activeVariant.image}
            alt=""
            width={300}
            height={300}
            unoptimized
          />
        )
      )}
      {props.images && !props.thumbnail && !activeVariant && (
        <ImageBlock
          image={props.images[0].image}
          height={300}
          width={300}
          fill
        />
      )}
    </>
  )

  // QR logic for "QR" mode (only meaningful once a variant is selected)
  const qrLogic = (
    <div className="qr-wrapper" aria-label="Scan to view product">
      <QRCode value={targetHref} size={300} />
    </div>
  )

  // Decide what to render in the visual area:
  // - Before any manual selection: always show image
  // - After manual selection: show QR if toggled on, otherwise image
  const showQRNow = wasManuallySelected && showQR

  const visualBlock = props.minimal ? (
    showQRNow ? (
      qrLogic
    ) : (
      imageLogic
    )
  ) : showQRNow ? (
    <div>{qrLogic}</div>
  ) : (
    <div>{imageLogic}</div>
  )

  const content = (
    <>
      <div className="image">
        {props.localOnly && (
          <span className="local-only">
            <AiFillStar /> Local Only
          </span>
        )}

        {visualBlock}
      </div>

      <div className="content">
        <p className="title">{props.title}</p>
        <p className="price">
          {toUsCurrency(activeVariant?.price || props.price)}
        </p>

        {!props.minimal && props.variants && props.variants.length > 1 ? (
          <FormField
            type="select"
            choices={[
              {
                _key: `${slugify(props.title)}-select-variant`,
                label: `Select ${getTypeOfVariant(props.variants.map((v) => v.title))}`,
                value: '',
              },
              ...variantKeyValuePair,
            ]}
            onChangeSelect={(e) => {
              const val = e.target.value
              if (!val) {
                // User picked the placeholder
                setWasManuallySelected(false)
                setShowQR(false)
                setActiveVariant(undefined)
                return
              }
              const variant = props.variants?.find((v) => v.externalId === val)
              setActiveVariant(variant)
              setWasManuallySelected(true)
              setShowQR(true) // immediately switch to QR after a selection
            }}
            _key="jneklfvbhwo3409n"
            label=""
          />
        ) : !props.minimal ? (
          <div className="spacer" />
        ) : null}
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
        <LinkObject href={targetHref}>{content}</LinkObject>
      ) : (
        content
      )}
    </div>
  )
}
