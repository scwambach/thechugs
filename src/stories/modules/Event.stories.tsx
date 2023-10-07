import { Event as EventItem } from '@components/modules/Event'
import type { Meta, StoryObj } from '@storybook/react'
import { mockEvents } from 'stories/mock/mockEvents'

const meta: Meta<typeof EventItem> = {
  title: 'Components/Modules',
  component: EventItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EventItem>

export const Event: Story = {
  args: { ...mockEvents.events[2] },
}
