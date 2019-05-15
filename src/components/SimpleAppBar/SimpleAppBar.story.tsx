import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryDecorator } from '../../test/StoryDecorator';
import { SimpleAppBar } from './SimpleAppBar';

storiesOf('SimpleAppBar', module)
    .addDecorator(StoryDecorator)
    .add('Default', () => <SimpleAppBar>React Force</SimpleAppBar>);
