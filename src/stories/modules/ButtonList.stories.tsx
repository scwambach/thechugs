import { ButtonList as ButtonListItem } from '@components/modules/ButtonList'
import type { Meta, StoryObj } from '@storybook/react'
import { mockCtaBanner } from 'stories/mock/mockCtaBanner'

const meta: Meta<typeof ButtonListItem> = {
  title: 'Components/Modules',
  component: ButtonListItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ButtonListItem>

export const ButtonList: Story = {
  args: {
    items: mockCtaBanner.links,
  },
}
