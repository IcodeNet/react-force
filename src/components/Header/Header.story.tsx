import React from 'react';
import { storiesOf } from '@storybook/react';
import { StoryDecorator } from '../../test/StoryDecorator';
import { Header } from './Header';
import { HeaderTitle } from './HeaderTitle';

storiesOf('Header', module)
    .addDecorator(StoryDecorator)
    .add('With title', () => (
        <Header>
            <HeaderTitle>React Force</HeaderTitle>
        </Header>
    ));
