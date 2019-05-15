import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryDecorator } from '../../test/StoryDecorator';
import { Loading } from './Loading';

storiesOf('Loading', module)
    .addDecorator(StoryDecorator)
    .add('Default', () => <Loading />);
