import { Events as EventsItem } from '@components/blocks/Events'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EventsItem> = {
  title: 'Components/Blocks',
  component: EventsItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EventsItem>

export const Events: Story = {
  args: {},
}
