import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ViewHeightCenteredContainer } from '..';

export const Loading = () => {
    return (
        <ViewHeightCenteredContainer data-testid="loading">
            <Typography variant="h5">Loading...</Typography>
        </ViewHeightCenteredContainer>
    );
};
