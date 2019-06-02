import React from 'react';
import { render } from 'test';
import { createErrorMessage } from '../../models';
import { PopupMessage } from './PopupMessage';

const handleClose = jest.fn();

describe('<PopupMessage />', () => {
    it('does not render a popup if there is no message', () => {
        const { queryByRole } = render(<PopupMessage onClose={handleClose} />);
        expect(queryByRole('alertdialog')).toBeNull();
    });

    it('renders a popup with the specified message', () => {
        const messageText = 'Username or password did not match';
        const message = createErrorMessage(messageText);
        const { getByText, queryByRole } = render(
            <PopupMessage
                data-testid="login-failed"
                message={message}
                onClose={handleClose}
            />
        );
        expect(queryByRole('alertdialog')).toBeInTheDocument();
        expect(getByText(messageText)).toBeInTheDocument();
    });
});
