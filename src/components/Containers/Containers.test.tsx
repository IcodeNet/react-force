import React from 'react';
import { render } from 'test';
import {
    FullHeightCenteredContainer,
    ViewHeightCenteredContainer
} from './Containers';

// TODO: Move these imports to setupTests.ts
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

const content = 'Test Content';

describe('Containers', () => {
    it('FullHeightCenteredContainer renders its content', () => {
        const { getByText } = render(
            <FullHeightCenteredContainer>{content}</FullHeightCenteredContainer>
        );
        expect(getByText(content)).toBeInTheDocument();
    });

    it('ViewHeightCenteredContainer renders its content', () => {
        const { getByText } = render(
            <ViewHeightCenteredContainer>{content}</ViewHeightCenteredContainer>
        );
        expect(getByText(content)).toBeInTheDocument();
    });
});
