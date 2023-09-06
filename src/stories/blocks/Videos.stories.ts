import { Videos as VideosItem } from '@components/blocks/Videos'
import type { Meta, StoryObj } from '@storybook/react'
import { mockVideos } from 'stories/mock/mockVideos'

const meta: Meta<typeof VideosItem> = {
  title: 'Components/Blocks',
  component: VideosItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof VideosItem>

export const Videos: Story = {
  args: mockVideos,
}
