import React from 'react';
import Box from '@material-ui/core/Box';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';

const useStyles = makeStyles((theme: Theme) => ({
    dark: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.grey.A400
    }
}));

export interface ContainerProps {
    className?: string;
    dark?: boolean;
}

/**
 * FullHeightCenteredContainer
 * - Centers content on the entire page (flex: 1)
 */
export const FullHeightCenteredContainer: React.FC<ContainerProps> = ({
    className: classNameProp,
    dark,
    children
}) => {
    const classes = useStyles();
    const className = classNames(dark ? classes.dark : null, classNameProp);
    return (
        <Box
            p={2}
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            className={className}
        >
            {children}
        </Box>
    );
};

/**
 * ViewHeightCenteredContainer
 * - Centers content on the entire page (height: 100vh)
 */
export const ViewHeightCenteredContainer: React.FC<ContainerProps> = ({
    className: classNameProp,
    dark,
    children
}) => {
    const classes = useStyles();
    const className = classNames(dark ? classes.dark : null, classNameProp);
    return (
        <Box
            p={2}
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            className={className}
        >
            {children}
        </Box>
    );
};
