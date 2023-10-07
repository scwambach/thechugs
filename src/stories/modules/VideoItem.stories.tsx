import { VideoItem as VideoItemItem } from '@components/modules/VideoItem'
import type { Meta, StoryObj } from '@storybook/react'
import { mockVideos } from 'stories/mock/mockVideos'

const meta: Meta<typeof VideoItemItem> = {
  title: 'Components/Modules',
  component: VideoItemItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof VideoItemItem>

export const VideoItem: Story = {
  args: { ...mockVideos.items[0] },
}
