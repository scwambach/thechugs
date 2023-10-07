import { BigBanner as BigBannerItem } from '@components/blocks/BigBanner'
import type { Meta, StoryObj } from '@storybook/react'
import { mockBigBanner } from 'stories/mock/mockBigBanner'

const meta: Meta<typeof BigBannerItem> = {
  title: 'Components/Blocks',
  component: BigBannerItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BigBannerItem>

export const BigBanner: Story = {
  args: mockBigBanner,
}
