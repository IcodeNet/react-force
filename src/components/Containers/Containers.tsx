import React from 'react';
import Box from '@material-ui/core/Box';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';

const useStyles = makeStyles((theme: Theme) => ({
    centeredContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: theme.spacing(1)
    },
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
 * CenteredContainer
 * - Flexible (flex: 1)
 * - Centers content using Flexbox
 */
export const CenteredContainer: React.FC<ContainerProps> = ({
    className: classNameProp,
    children
}) => {
    const classes = useStyles();
    const className = classNames(classes.centeredContainer, classNameProp);
    return <div className={className}>{children}</div>;
};

/**
 * PageCenteredContainer
 * - Centers content on the entire page (height: 100vh)
 */
export const PageCenteredContainer: React.FC<ContainerProps> = ({
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
