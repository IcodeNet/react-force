import React from 'react';
import { render } from 'test';
import { Header } from './Header';
import { HeaderTitle } from './HeaderTitle';

// TODO: Move these imports to setupTests.ts
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

describe('<Header />', () => {
    it('renders a title using <HeaderTitle />', () => {
        const title = 'React Force';
        const { getByText } = render(
            <Header>
                <HeaderTitle>{title}</HeaderTitle>
            </Header>
        );
        expect(getByText(title)).toBeInTheDocument();
    });
});
