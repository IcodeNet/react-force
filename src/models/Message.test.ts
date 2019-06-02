import {
    createSuccessMessage,
    createWarningMessage,
    createErrorMessage,
    createInfoMessage
} from './Message';

const messageText = 'Sample message';

describe('Message', () => {
    it('createSuccessMessage creates a success message', () => {
        expect(createSuccessMessage(messageText)).toEqual({
            type: 'success',
            text: messageText
        });
    });

    it('createWarningMessage creates a warning message', () => {
        expect(createWarningMessage(messageText)).toEqual({
            type: 'warning',
            text: messageText
        });
    });

    it('createErrorMessage creates an error message', () => {
        expect(createErrorMessage(messageText)).toEqual({
            type: 'error',
            text: messageText
        });
    });

    it('createInfoMessage creates an info message', () => {
        expect(createInfoMessage(messageText)).toEqual({
            type: 'info',
            text: messageText
        });
    });
});
