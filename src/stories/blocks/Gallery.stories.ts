import { Gallery as GalleryItem } from '@components/blocks/Gallery'
import type { Meta, StoryObj } from '@storybook/react'
import { mockGallery } from 'stories/mock/mockGallery'

const meta: Meta<typeof GalleryItem> = {
  title: 'Components/Blocks',
  component: GalleryItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GalleryItem>

export const Gallery: Story = {
  args: mockGallery,
}
