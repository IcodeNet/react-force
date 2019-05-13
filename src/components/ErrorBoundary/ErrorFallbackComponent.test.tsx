import React from 'react';
import { render } from 'test';
import { ErrorFallbackComponent } from './ErrorFallbackComponent';

// TODO: Move these imports to setupTests.ts
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

describe('<ErrorFallbackComponent />', () => {
    it('renders error.message for Error objects', () => {
        const errorMessage = 'Network Error';
        const { getByText } = render(
            <ErrorFallbackComponent error={new Error(errorMessage)} />
        );
        expect(getByText(errorMessage)).toBeInTheDocument();
    });

    it('renders strings as is', () => {
        const errorMessage = 'Network Error';
        const { getByText } = render(
            <ErrorFallbackComponent error={errorMessage} />
        );
        expect(getByText(errorMessage)).toBeInTheDocument();
    });

    it('renders "Something went wrong" for all other types', () => {
        const errorMessage = 'Something went wrong';
        const { getByText } = render(
            <ErrorFallbackComponent
                error={{ code: 404, message: 'Not Found' }}
            />
        );
        expect(getByText(errorMessage)).toBeInTheDocument();
    });
});
