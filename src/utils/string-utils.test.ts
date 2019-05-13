import { errorToString } from './string-utils';

describe('errorToString()', () => {
    it('returns error.message for Error objects', () => {
        const errorMessage = 'Network Error';
        expect(errorToString(new Error(errorMessage))).toBe(errorMessage);
    });

    it('returns strings as is', () => {
        const errorMessage = 'Network Error';
        expect(errorToString(errorMessage)).toBe(errorMessage);
    });

    it('returns "Something went wrong" for all other types', () => {
        const errorMessage = 'Something went wrong';
        expect(errorToString({ code: 404, message: 'Not Found' })).toBe(
            errorMessage
        );
    });
});
