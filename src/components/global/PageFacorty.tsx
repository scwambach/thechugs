'use client'
import { PageBlock } from '@components/blocks/PageBlock'
import { Fragment } from 'react'

export const PageFactory = ({ components }: { components: any[] }) => {
  const isEventsEmpty = components.some(
    (component) => component._type === 'events' && component.events.length === 0
  )

  const sansEventsComponents = components.filter(
    (component) => component._type !== 'events'
  )

  return (
    <div className="innerPage">
      {(isEventsEmpty ? sansEventsComponents : components).map(
        (component: any, index: number) => (
          <Fragment key={component._key}>
            {component._type === 'events' &&
            component.events &&
            component.events.length === 0 ? null : (
              <PageBlock {...component} className={`pageOrder_${index + 1}`} />
            )}
          </Fragment>
        )
      )}
    </div>
  )
}
