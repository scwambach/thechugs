import { Articles as ArticlesItem } from '@components/blocks/Articles'
import type { Meta, StoryObj } from '@storybook/react'
import { mockArticles } from 'stories/mock/mockArticles'

const meta: Meta<typeof ArticlesItem> = {
  title: 'Components/Blocks',
  component: ArticlesItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ArticlesItem>

export const Articles: Story = {
  args: mockArticles,
}
