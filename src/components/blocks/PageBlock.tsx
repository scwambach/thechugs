'use client'
import { Heading } from '@components/modules/Heading'
import * as Block from '.'
import { HeadingLevel } from '@utils/types'

interface PageBlockProps {
  _type: string
  _key: string
  heading?: string
  headingLevel?: string
  subheading?: string
  backgroundColor?: string
  backgroundImage?: any
  events?: any[]
}

export const PageBlock = (props: PageBlockProps) => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const isUniqueBlock =
    props._type === 'ctaBanner' || props._type === 'pageBanner'

  const componentName = capitalizeFirstLetter(props._type)

  const PageBlock = Block[componentName as keyof typeof Block] as any

  return (
    <section
      id={`component_${props._type}_${props._key}`}
      className={`page-component component_${props._type}${
        props.backgroundColor ? ` bg-${props.backgroundColor}` : ' no-bg'
      }`}
    >
      {(props.heading || props.subheading) && !isUniqueBlock && (
        <div className="heading-container container wide">
          <div className="inner">
            {props.heading && (
              <Heading level={(props.headingLevel || '2') as HeadingLevel}>
                {props.heading}
              </Heading>
            )}
            {props.subheading && (
              <p className="subheading">{props.subheading}</p>
            )}
          </div>
        </div>
      )}

      <PageBlock {...props} />
    </section>
  )
}
