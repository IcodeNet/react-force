import React from 'react';
import { Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { ViewCenteredContainer } from '..';
import { errorToString } from '../../utils';

const useStyles = makeStyles((theme: Theme) => ({
    dark: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.grey.A400
    }
}));

export interface ErrorFallbackComponentProps {
    error: any;
}

export const ErrorFallbackComponent = ({
    error
}: ErrorFallbackComponentProps) => {
    const classes = useStyles();
    return (
        <ViewCenteredContainer
            data-testid="error-fallback"
            p={2}
            className={classes.dark}
        >
            <Typography component="h1" variant="h3">
                {errorToString(error)}
            </Typography>
        </ViewCenteredContainer>
    );
};
