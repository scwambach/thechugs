'use client'
import { PageBlock } from '@components/blocks/PageBlock'

export const PageFactory = ({ components }: { components: any[] }) => {
  const isEventsEmpty = components.some(
    (component) => component._type === 'events' && component.events.length === 0
  )

  const sansEventsComponents = components.filter(
    (component) => component._type !== 'events'
  )

  return (
    <>
      {(isEventsEmpty ? sansEventsComponents : components).map(
        (component: any) => (
          <PageBlock {...component} key={component._key} />
        )
      )}
    </>
  )
}
