import { Posts as PostsItem } from '@components/blocks/Posts'
import type { Meta, StoryObj } from '@storybook/react'
import { mockPosts } from 'stories/mock/mockPosts'

const meta: Meta<typeof PostsItem> = {
  title: 'Components/Blocks',
  component: PostsItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PostsItem>

export const Posts: Story = {
  args: mockPosts,
}
