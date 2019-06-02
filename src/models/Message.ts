type MessageType = 'success' | 'warning' | 'error' | 'info';

export interface Message {
    type: MessageType;
    text: string;
}

export const createSuccessMessage = (text: string): Message => ({
    type: 'success',
    text
});

export const createWarningMessage = (text: string): Message => ({
    type: 'warning',
    text
});

export const createErrorMessage = (text: string): Message => ({
    type: 'error',
    text
});

export const createInfoMessage = (text: string): Message => ({
    type: 'info',
    text
});
