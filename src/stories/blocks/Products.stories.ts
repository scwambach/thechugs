import { Products as ProductsItem } from '@components/blocks/Products'
import type { Meta, StoryObj } from '@storybook/react'
import { mockProducts } from 'stories/mock/mockProducts'

const meta: Meta<typeof ProductsItem> = {
  title: 'Components/Blocks/Products',
  component: ProductsItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProductsItem>

export const SelectedProducts: Story = {
  args: {
    ...mockProducts,
    products: mockProducts.products.slice(6, 10),
  },
}

export const AllProducts: Story = {
  args: {
    ...mockProducts,
    filter: true,
  },
}
