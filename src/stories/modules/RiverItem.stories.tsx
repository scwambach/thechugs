import { RiverItem as RiverItemItem } from '@components/modules/RiverItem'
import type { Meta, StoryObj } from '@storybook/react'
import { mockRiver } from 'stories/mock/mockRiver'

const meta: Meta<typeof RiverItemItem> = {
  title: 'Components/Modules',
  component: RiverItemItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RiverItemItem>

export const RiverItem: Story = {
  args: { ...mockRiver.items[0] },
}
