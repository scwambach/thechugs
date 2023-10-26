import { ProductCard as ProductCardItem } from '@components/modules/ProductCard'
import type { Meta, StoryObj } from '@storybook/react'
import { mockProducts } from 'stories/mock/mockProducts'

const meta: Meta<typeof ProductCardItem> = {
  title: 'Components/Modules',
  component: ProductCardItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProductCardItem>

export const ProductCard: Story = {
  args: mockProducts.products[5],
}
