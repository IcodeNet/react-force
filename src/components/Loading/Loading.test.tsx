import React from 'react';
import { render } from 'test';
import { Loading } from './Loading';

// TODO: Move these imports to setupTests.ts
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

describe('<Loading />', () => {
    it('renders the loading message', () => {
        const { getByText } = render(<Loading />);
        expect(getByText('Loading...')).toBeInTheDocument();
    });
});
