import {
    type Meta, type StoryObj,
} from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ErrorPage } from './ErrorPage';

const meta: Meta<typeof ErrorPage> = {
    component: ErrorPage,
};
export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Light: Story = {
    args: {},
};
export const Dark: Story = {
    args: {},
    decorators: [ThemeDecorator('dark')],
};
