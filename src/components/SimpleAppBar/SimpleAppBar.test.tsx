import React from 'react';
import { render } from 'test';
import { SimpleAppBar } from './SimpleAppBar';

// TODO: Move these imports to setupTests.ts
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

describe('<SimpleAppBar />', () => {
    it('renders an AppBar with title', () => {
        const title = 'React Force';
        const { getByText } = render(<SimpleAppBar>{title}</SimpleAppBar>);
        expect(getByText(title)).toBeInTheDocument();
    });
});
