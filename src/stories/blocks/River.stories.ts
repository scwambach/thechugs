import { River as RiverItem } from '@components/blocks/River'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RiverItem> = {
  title: 'Components/Blocks',
  component: RiverItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RiverItem>

export const River: Story = {
  args: {},
}
