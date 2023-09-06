import { mockCtaBanner } from './../mock/mockCtaBanner'
import { CtaBanner as CtaBannerItem } from '@components/blocks/CtaBanner'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CtaBannerItem> = {
  title: 'Components/Blocks',
  component: CtaBannerItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CtaBannerItem>

export const CtaBanner: Story = {
  args: mockCtaBanner,
}
