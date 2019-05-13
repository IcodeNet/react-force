import React from 'react';
import Typography from '@material-ui/core/Typography';
import { ViewHeightCenteredContainer } from '..';
import { errorToString } from '../../utils';

export interface ErrorFallbackComponentProps {
    error: any;
}

export const ErrorFallbackComponent = ({
    error
}: ErrorFallbackComponentProps) => (
    <ViewHeightCenteredContainer dark={true}>
        <Typography component="h1" variant="h3">
            {errorToString(error)}
        </Typography>
    </ViewHeightCenteredContainer>
);
