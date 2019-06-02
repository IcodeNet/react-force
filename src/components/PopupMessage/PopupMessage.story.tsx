import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { storiesOf } from '@storybook/react';
import { createErrorMessage, Message } from '../../models';
import { StoryDecorator } from '../../test/StoryDecorator';
import { ViewCenteredContainer } from '../Containers';
import { PopupMessage } from './PopupMessage';

const PopupMessageExample = () => {
    const [message, setMessage] = useState<Message>();
    return (
        <ViewCenteredContainer>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    setMessage(
                        createErrorMessage('Username or password did not match')
                    );
                }}
            >
                Sign In
            </Button>
            <PopupMessage
                message={message}
                onClose={() => {
                    setMessage(undefined);
                }}
            />
        </ViewCenteredContainer>
    );
};

storiesOf('PopupMessage', module)
    .addDecorator(StoryDecorator)
    .add('Error message', () => <PopupMessageExample />);
