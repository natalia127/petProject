import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AboutPage from './AboutPage';

export default { component: AboutPage };
const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
};
type Story = StoryObj<typeof AboutPage>;
export const Normal: Story = {
    args: {},
};
export const NormalDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')],
};
