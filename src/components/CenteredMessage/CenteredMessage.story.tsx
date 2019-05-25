import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryDecorator } from '../../test/StoryDecorator';
import { CenteredMessage } from './CenteredMessage';
import { Loading } from './Loading';
import { NotFound } from './NotFound';

storiesOf('CenteredMessage', module)
    .addDecorator(StoryDecorator)
    .add('Default', () => <CenteredMessage>Hello!</CenteredMessage>)
    .add('Loading', () => <Loading />)
    .add('NotFound', () => <NotFound />);
