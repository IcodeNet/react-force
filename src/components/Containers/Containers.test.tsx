import React from 'react';
import { render } from 'test';
import {
    FlexContainer,
    CenteredContainer,
    HorizontalContainer,
    VerticalContainer,
    ViewCenteredContainer,
    ViewHorizontalContainer,
    ViewVerticalContainer
} from './Containers';

// TODO: Move these imports to setupTests.ts
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

const content = 'Test Content';

describe('Containers', () => {
    it('FlexContainer renders its content', () => {
        const { getByText } = render(<FlexContainer>{content}</FlexContainer>);
        expect(getByText(content)).toBeInTheDocument();
    });

    it('CenteredContainer renders its content', () => {
        const { getByText } = render(
            <CenteredContainer>{content}</CenteredContainer>
        );
        expect(getByText(content)).toBeInTheDocument();
    });

    it('HorizontalContainer renders its content', () => {
        const { getByText } = render(
            <HorizontalContainer>{content}</HorizontalContainer>
        );
        expect(getByText(content)).toBeInTheDocument();
    });

    it('VerticalContainer renders its content', () => {
        const { getByText } = render(
            <VerticalContainer>{content}</VerticalContainer>
        );
        expect(getByText(content)).toBeInTheDocument();
    });

    it('ViewCenteredContainer renders its content', () => {
        const { getByText } = render(
            <ViewCenteredContainer>{content}</ViewCenteredContainer>
        );
        expect(getByText(content)).toBeInTheDocument();
    });

    it('ViewHorizontalContainer renders its content', () => {
        const { getByText } = render(
            <ViewHorizontalContainer>{content}</ViewHorizontalContainer>
        );
        expect(getByText(content)).toBeInTheDocument();
    });

    it('ViewVerticalContainer renders its content', () => {
        const { getByText } = render(
            <ViewVerticalContainer>{content}</ViewVerticalContainer>
        );
        expect(getByText(content)).toBeInTheDocument();
    });
});
