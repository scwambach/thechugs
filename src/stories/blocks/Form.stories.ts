import { Form as FormItem } from '@components/blocks/Form'
import type { Meta, StoryObj } from '@storybook/react'
import { mockForm } from 'stories/mock/mockForm'

const meta: Meta<typeof FormItem> = {
  title: 'Components/Blocks',
  component: FormItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FormItem>

export const Form: Story = {
  args: mockForm,
}
