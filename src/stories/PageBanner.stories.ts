import { PageBanner as PageBannerItem } from '@components/blocks/PageBanner'
import type { Meta, StoryObj } from '@storybook/react'
import { mockPageBanner } from './mock/mockPageBanner'

const meta: Meta<typeof PageBannerItem> = {
  title: 'Components',
  component: PageBannerItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PageBannerItem>

export const PageBanner: Story = {
  args: mockPageBanner,
}
