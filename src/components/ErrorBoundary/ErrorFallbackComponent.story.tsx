import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryDecorator } from '../../test/StoryDecorator';
import { ErrorFallbackComponent } from './ErrorFallbackComponent';

storiesOf('ErrorFallbackComponent', module)
    .addDecorator(StoryDecorator)
    .add('Default', () => <ErrorFallbackComponent error="Network Error" />);
