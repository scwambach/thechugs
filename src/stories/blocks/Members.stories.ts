import { Members as MembersItem } from '@components/blocks/Members'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MembersItem> = {
  title: 'Components/Blocks',
  component: MembersItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MembersItem>

export const Members: Story = {
  args: {},
}
