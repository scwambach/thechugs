'use client'
import { ProductPageProps, VariantProps } from '@utils/types/merch'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface DetailsProps {
  content: ProductPageProps['page']
  initialVariantId?: string
}

export const Details = ({ content, initialVariantId }: DetailsProps) => {
  // const [activeVariant, setActiveVariant] = useState<VariantProps>()

  // useEffect(() => {
  //   if (initialVariantId) {
  //     const variant = content.variants.find(
  //       (variant) => variant.externalId === initialVariantId
  //     )

  //     if (variant) {
  //       setActiveVariant(variant)
  //     }
  //   }
  // }, [initialVariantId])

  return (
    <div className="container">
      <h1>{content.title}</h1>
      {/* <Image
        src={activeVariant ? activeVariant.image : content.thumbnail}
        alt=""
        width={300}
        height={300}
      /> */}
      {content.variants?.map((variant) => {
        return (
          <div key={variant._key}>
            <p>{variant.title}</p>
          </div>
        )
      })}
    </div>
  )
}
