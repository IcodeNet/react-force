import React from 'react';
import { render } from 'test';
import { CenteredMessage } from './CenteredMessage';

// TODO: Move these imports to setupTests.ts
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

describe('<CenteredMessage />', () => {
    it('renders a centered message', () => {
        const message = 'Hello!';
        const { getByText } = render(
            <CenteredMessage>{message}</CenteredMessage>
        );
        expect(getByText(message)).toBeInTheDocument();
    });
});
