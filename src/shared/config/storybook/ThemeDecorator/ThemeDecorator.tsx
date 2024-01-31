import 'app/styles/index.scss';
import { ReactRenderer } from '@storybook/react';
import { PartialStoryFn } from '@storybook/csf';
import { Theme } from 'app/provider/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: PartialStoryFn<ReactRenderer, {[p: string]: any}>) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
