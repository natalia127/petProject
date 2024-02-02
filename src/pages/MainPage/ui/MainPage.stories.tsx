import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import MainPage from './MainPage';

export default { component: MainPage };
const meta: Meta<typeof MainPage> = {
    title: 'pages/AboutPage',
    component: MainPage,
};
type Story = StoryObj<typeof MainPage>;
export const Normal: Story = {
    args: {},
};
export const NormalDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')],
};
