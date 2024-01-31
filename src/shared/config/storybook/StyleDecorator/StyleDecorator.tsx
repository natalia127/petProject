import 'app/styles/index.scss';
import { ReactRenderer } from '@storybook/react';
import { PartialStoryFn } from '@storybook/csf';

export const StyleDecorator = (Story: PartialStoryFn<ReactRenderer, {[p: string]: any}>) => Story();
