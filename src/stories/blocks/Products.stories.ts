import { Products as ProductsItem } from '@components/blocks/Products'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ProductsItem> = {
  title: 'Components/Blocks',
  component: ProductsItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProductsItem>

export const Products: Story = {
  args: {},
}
