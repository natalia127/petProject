import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
    },
};
export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Text',
        theme: 'primary',
    },
};
export const Secondary: Story = {
    args: {
        children: 'Text',
        theme: 'secondary',
    },
};

export const Red: Story = {
    args: {
        children: 'Text',
        theme: 'red',
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
        theme: 'primary',
    },
    decorators: [ThemeDecorator('dark')],
};
export const SecondaryDark: Story = {
    args: {
        children: 'Text',
        theme: 'secondary',
    },
    decorators: [ThemeDecorator('dark')],
};

export const RedDark: Story = {
    args: {
        children: 'Text',
        theme: 'red',
    },
    decorators: [ThemeDecorator('dark')],
};
