import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotFound } from './NotFound';

export default { component: NotFound };
const meta: Meta<typeof NotFound> = {
    title: 'pages/NotFound',
    component: NotFound,
};
type Story = StoryObj<typeof NotFound>;
export const Normal: Story = {
    args: {},
};
export const NormalDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')],
};
