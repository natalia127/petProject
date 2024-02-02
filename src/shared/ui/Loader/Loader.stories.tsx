import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Loader } from './Loader';

export default { component: Loader };
const meta: Meta<typeof Loader> = {
    title: 'shared/AppLink',
    component: Loader,
};
type Story = StoryObj<typeof Loader>;
export const Normal: Story = {
    args: {},
};
export const NormalDark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')],
};
