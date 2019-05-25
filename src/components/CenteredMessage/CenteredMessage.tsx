import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ViewCenteredContainer } from '..';

export const CenteredMessage: React.FC = ({ children }) => {
    return (
        <ViewCenteredContainer p={2}>
            <Typography component="h1" variant="h3">
                {children}
            </Typography>
        </ViewCenteredContainer>
    );
};
