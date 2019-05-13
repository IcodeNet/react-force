export const errorToString = (error: any) => {
    let result = 'Something went wrong';

    if (error instanceof Error) {
        result = error.message;
    } else if (typeof error === 'string') {
        result = error;
    }

    return result;
};
