import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ViewCenteredContainer } from '..';

export const Loading = () => {
    return (
        <ViewCenteredContainer data-testid="loading" p={2}>
            <Typography component="h1" variant="h3">
                Loading...
            </Typography>
        </ViewCenteredContainer>
    );
};
