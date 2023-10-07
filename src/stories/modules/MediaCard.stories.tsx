import { MediaCard as MediaCardItem } from '@components/modules/MediaCard'
import type { Meta, StoryObj } from '@storybook/react'
import { mockArticles } from 'stories/mock/mockArticles'

const meta: Meta<typeof MediaCardItem> = {
  title: 'Components/Modules',
  component: MediaCardItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MediaCardItem>

export const MediaCard: Story = {
  args: {
    ...mockArticles.articles[0],
    title: 'Lorem ipsum dolor sit amet',
    info: 'Mauris eleifend nisi neque, sed',
  },
}
