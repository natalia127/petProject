import { ReactRenderer } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { PartialStoryFn } from '@storybook/csf';

export const RouterDecorator = (story: PartialStoryFn<ReactRenderer, {[p: string]: any}>) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
