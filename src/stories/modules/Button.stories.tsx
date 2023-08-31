import { Button } from '@components/modules/Button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Components/Modules/Buttons',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    tagType: 'a',
    onClick: () => console.log('clicked'),
    text: 'Click me',
    buttonStyle: 'primary',
    url: 'https://www.google.com',
  },
}

export const PrimaryOutline: Story = {
  args: {
    tagType: 'a',
    onClick: () => console.log('clicked'),
    text: 'Click me',
    buttonStyle: 'primary-outline',
    url: 'https://www.google.com',
  },
}

export const Secondary: Story = {
  args: {
    tagType: 'a',
    onClick: () => console.log('clicked'),
    text: 'Click me',
    buttonStyle: 'secondary',
    url: 'https://www.google.com',
  },
}

export const SecondaryOutline: Story = {
  args: {
    tagType: 'a',
    onClick: () => console.log('clicked'),
    text: 'Click me',
    buttonStyle: 'secondary-outline',
    url: 'https://www.google.com',
  },
}

export const Tertiary: Story = {
  args: {
    tagType: 'a',
    onClick: () => console.log('clicked'),
    text: 'Click me',
    buttonStyle: 'tertiary',
    url: 'https://www.google.com',
  },
}

export const TertiaryOutline: Story = {
  args: {
    tagType: 'a',
    onClick: () => console.log('clicked'),
    text: 'Click me',
    buttonStyle: 'tertiary-outline',
    url: 'https://www.google.com',
  },
}

export const Black: Story = {
  args: {
    tagType: 'a',
    onClick: () => console.log('clicked'),
    text: 'Click me',
    buttonStyle: 'black',
    url: 'https://www.google.com',
  },
}

export const BlackOutline: Story = {
  args: {
    tagType: 'a',
    onClick: () => console.log('clicked'),
    text: 'Click me',
    buttonStyle: 'black-outline',
    url: 'https://www.google.com',
  },
}

export const White: Story = {
  args: {
    tagType: 'a',
    onClick: () => console.log('clicked'),
    text: 'Click me',
    buttonStyle: 'white',
    url: 'https://www.google.com',
  },
}

export const WhiteOutline: Story = {
  args: {
    tagType: 'a',
    onClick: () => console.log('clicked'),
    text: 'Click me',
    buttonStyle: 'white-outline',
    url: 'https://www.google.com',
  },
}
