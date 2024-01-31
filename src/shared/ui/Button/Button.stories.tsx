import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ThemeButton } from './Button';
// 👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Выбрать',
    },
};

export const ClearDark: Story = {
    args: {
        children: 'Выбрать',
        theme: ThemeButton.CLEAR,
    },
    decorators: [ThemeDecorator('dark')],
};
export const Clear: Story = {
    args: {
        children: 'Выбрать',
        theme: ThemeButton.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Выбрать',
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Выбрать',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator('dark')],

};
