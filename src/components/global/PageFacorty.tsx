import { PageBlock } from '@components/blocks/PageBlock'

export const PageFactory = ({ components }: { components: any[] }) => {
  return (
    <>
      {components.map((component: any) => (
        <PageBlock {...component} key={component._key} />
      ))}
    </>
  )
}
